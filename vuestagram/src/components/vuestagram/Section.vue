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
    <!-- Explain -->
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

      <!-- Container -->
      <Container :step="step" :url="url" />
      <div v-if="step == 0" class="more__post">
        <button @click="$store.dispatch('getData')" class="btn btn-outline-success">
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
import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs-backend-webgl';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'SectionApp',
  components: { Container, Explain, LoadingSpinner },
  data() {
    return {
      url: '',
      step: 0,
      count: 0,
      tag: '',
      isLoading: false,
    };
  },
  computed: {
    ...mapState(['visit', 'post', 'selectFilter', 'content']),
  },
  methods: {
    ...mapMutations(['setUpload', 'modalChange', 'setMorePost']),
    // upload + tensorflow
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
    // 발행
    publish() {
      var uploadPost = {
        id: JSON.parse(JSON.stringify(this.post)).length++,
        tag: this.tag,
        name: 'tester',
        date: new Date().toLocaleString(),
        liked: false,
        likes: 0,
        filter: this.selectFilter,
        content: this.content,
        userImage: 'https://placeimg.com/100/100/arch',
        postImage: this.url,
      };
      this.setUpload(uploadPost);
      this.modalChange(true);
      this.step = 0;
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
