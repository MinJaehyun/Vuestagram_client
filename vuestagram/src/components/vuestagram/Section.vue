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
          <ul class="header__button__left" @click="setStepMinus">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </ul>
          <!-- forward button -->
          <ul class="header__button__right" @click="setStepPlus">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </ul>
        </div>
        <!-- step == 2 -->
        <div v-if="step == 2">
          <ul class="header__button__left" @click="setStepMinus">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </ul>
          <ul class="header__button__right" @click="publish">
            <ion-icon name="checkmark-done-outline"></ion-icon>
          </ul>
        </div>
      </div>

      <!-- Container -->
      <Container />
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
      isLoading: false,
    };
  },
  computed: {
    ...mapState([
      'visit',
      'post',
      'selectFilter',
      'content',
      'liked',
      'likes',
      'step',
      'url',
      'tag',
    ]),
  },
  methods: {
    ...mapMutations([
      'setUpload',
      'modalChange',
      'setMorePost',
      'setStepMinus',
      'setStepPlus',
      'setStep',
      'setUrl',
      'setTag',
    ]),
    // upload + tensorflow
    async upload(e) {
      this.isLoading = true;
      let file = e.target.files[0];
      let url = URL.createObjectURL(file);
      this.setUrl(url);
      const img = document.getElementById('img');
      img.src = this.url;
      const model = await mobilenet.load();
      const predictions = await model.classify(img);
      const className = predictions[0].className;
      const probability = ' ' + parseInt(predictions[0].probability * 100) + '%';
      const result = 'Tag: ' + probability + ' 확률로 ' + className + ' 입니다';
      this.setTag(result);
      img.src = '';
      this.isLoading = false;
      this.setStep(1);
    },
    // 발행
    publish() {
      var uploadPost = {
        id: JSON.parse(JSON.stringify(this.post)).length,
        tag: this.tag,
        name: 'tester',
        date: new Date().toLocaleString(),
        // NOTE: liked 는 아직 만들어지지 않았으므로, post 접근할 수 없다
        liked: this.liked,
        likes: this.likes,
        filter: this.selectFilter,
        content: this.content,
        userImage: 'https://placeimg.com/100/100/arch',
        postImage: this.url,
      };
      this.setUpload(uploadPost);
      this.modalChange(true);
      this.setStep(0);
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
