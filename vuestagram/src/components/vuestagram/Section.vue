<template>
  <div>
    <LoadingSpinner v-if="isLoading" />
    <!-- step 0 -->
    <div v-if="step == 0" class="navbar plusIcon" style="padding: 0px">
      <ul style="padding: 8px 12px">
        <img id="img" class="input__file" />
        <input @change="upload" id="file" type="file" class="input__file" />
        <!-- post_upload icon -->
        <label for="file">
          <ion-icon for="file" size="large" name="add-circle-outline"></ion-icon>
        </label>
      </ul>
    </div>
    <!-- Explain component -->
    <Explain v-if="visit == true" />

    <!-- POST -->
    <div class="app">
      <div class="header">
        <!-- step == 1 -->
        <div v-if="step == 1">
          <!-- back button -->
          <ul class="header__button__left" @click="step--">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </ul>
          <!-- forward button -->
          <ul class="header__button__right" @click="step++">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </ul>
        </div>
        <!-- step == 2 -->
        <div v-if="step == 2">
          <ul class="header__button__left" @click="step--">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </ul>
          <ul class="header__button__right" @click="publish">
            <ion-icon name="checkmark-done-outline"></ion-icon>
          </ul>
        </div>
      </div>
      <!-- Container component -->
      <Container :step="step" :url="url" @uploadText="content = $event" />
      <!-- 깃헙 서버에 axios 요청하여 json 가져오기 -->
      <div v-if="step == 0" class="more__post">
        <button @click="morePost" class="btn btn-outline-success">
          <!-- TODO: vuex: <button @click="$store.dispatch('getData')">  -->
          게시글 더보기
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Container from '@/components/vuestagram/Container.vue';
import Explain from '@/components/vuestagram/Explain.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import axios from 'axios';
import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs-backend-webgl';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'SectionApp',
  components: { Container, Explain, LoadingSpinner },
  data() {
    return {
      content: '',
      url: '',
      step: 0,
      count: 0,
      tag: '',
      isLoading: false,
    };
  },
  computed: {
    ...mapState(['visit', 'post', 'selectFilter']),
  },
  methods: {
    ...mapMutations(['setUpload', 'modalChange', 'setMorePost']),
    async morePost() {
      try {
        // TODO: vuex 적용하기
        const post = await axios.get(
          // `https://minjaehyun.github.io/vue/more${this.count++}.json`
          // https://github.com/MinJaehyun/Vuestagram_client/blob/main/vuestagram/src/assets/data/more0.json
          `https://minjaehyun.github.io/Vuestagram_client/vuestagram/src/assets/data/more${this
            .count++}.json`,
        );
        // 변경 전 test
        // console.log(this.post); // proxy
        // console.log(JSON.parse(JSON.stringify(this.post))); // [{…}, {…}, {…}]
        // const originPost = JSON.parse(JSON.stringify(this.post));
        // console.log('post.data: ', post.data); //  [{…}, {…}, {…}]
        // this.$store.state.post = originPost.concat(post.data);  // 성공

        // 변경 후: $store 의 state 변경하는 mutations 함수 만들기
        // 변경 후: this.$store.commit('setMorePost', post.data);
        this.setMorePost(post.data);
      } catch (error) {
        console.log(error.response.data);
        alert('더 이상 게시물이 존재하지 않습니다.');
      }
    },
    async upload(e) {
      this.isLoading = true;
      let file = e.target.files[0];
      let url = URL.createObjectURL(file);
      this.url = url;

      // img 가져온 뒤, 업로드 한 url 을 src 에 넣음
      const img = document.getElementById('img');
      img.src = this.url;
      const model = await mobilenet.load();
      const predictions = await model.classify(img);
      const className = predictions[0].className;
      const probability = ' ' + parseInt(predictions[0].probability * 100) + '%';
      const result = 'Tag: ' + probability + ' 확률로 ' + className + ' 입니다';
      this.tag = result;
      img.src = '';
      this.isLoading = false;
      this.step = 1;
    },
    publish() {
      var uploadPost = {
        name: 'tester',
        userImage: 'https://placeimg.com/100/100/arch',
        postImage: this.url,
        likes: 0,
        date: new Date().toLocaleString(),
        liked: false,
        content: this.content,
        filter: this.selectFilter,
        tag: this.tag,
      };
      // 변경 전: this.$store.commit('setUpload', uploadPost);
      this.setUpload(uploadPost);
      this.step = 0;
      // 변경 전: this.$store.commit('modalChange', true);
      this.modalChange(true);
    },
  },
};
</script>
<style>
@import '../../assets/css/app.css';
.input__file {
  display: none;
}
</style>
