<template>
  <div>
    <div v-if="isLoading">
      <LoadingSpinner />
    </div>
    <!-- step 0 -->
    <div v-if="step == 0">
      <div class="navbar plusIcon" style="padding: 0px">
        <ul style="padding: 8px 12px">
          <img id="img" class="input__file" />
          <input @change="upload" id="file" type="file" class="input__file" />
          <!-- post_upload icon -->
          <li>
            <label for="file">
              <ion-icon for="file" size="large" name="add-circle-outline"></ion-icon>
            </label>
          </li>
        </ul>
      </div>
      <!-- Explain component -->
      <Explain v-if="$store.state.visit == true" />
    </div>

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
      <Container
        :selectFilter="selectFilter"
        :post="post"
        :step="step"
        :url="url"
        @uploadText="content = $event"
      />
      <!-- 깃헙 서버에 axios 요청하여 json 가져오기 -->
      <div v-if="step == 0" class="more__post">
        <button @click="more" class="btn btn-outline-success">
          <!-- TODO: vuex: <button @click="$store.dispatch('getData')">  -->
          게시글 더보기
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Container from '@/components/Container.vue';
import Explain from '@/components/Explain.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import post from '@/assets/data/post';
import axios from 'axios';
import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs-backend-webgl';

export default {
  name: 'SectionApp',
  components: { Container, Explain, LoadingSpinner },
  data() {
    return {
      content: '',
      url: '',
      step: 0,
      post: post,
      count: 0,
      selectFilter: '',
      tag: '',
      isLoading: false,
    };
  },
  mounted() {
    this.emitter.on('clickBox', result => {
      this.selectFilter = result; // selectFilter 에는 _1977 들어있는 상태
    });
  },
  methods: {
    async more() {
      try {
        const post = await axios.get(
          // `https://minjaehyun.github.io/vue/more${this.count++}.json`
          // https://github.com/MinJaehyun/Vuestagram_client/blob/main/vuestagram/src/assets/data/more0.json
          // FIXME: 추 후 리펙토링 하기
          `https://minjaehyun.github.io/vuestagram_client/vuestagram/src/assets/data/more${this
            .count++}.json`,
        );
        this.post = this.post.concat(post.data); // concat 사용하여 배열안에 배열을 풀어서 넣다.
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

      // img 가져온 뒤, 업로드 한 url 을 src 에 넣는다
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
      this.post.unshift(uploadPost);
      this.step = 0;
      this.$store.commit('modalChange', true);
    },
  },
};
</script>
<style>
@import '../assets/css/app.css';
@import '../assets/css/gradient.css';
.input__file {
  display: none;
}
</style>
