<template>
  <!-- contents -->
  <div class="contents">
    <h1 class="page-header">Create post</h1>
    <!-- form-wrapper -->
    <div class="form-wrapper">
      <!-- form -->
      <form class="form" @submit.prevent="submitPost">
        <!-- FIXME: 하드코딩된 분기 처리(css) 개선하기 -->
        <div v-if="isTitleValid">
          <label for="title">title:<span style="color: red">*required</span></label>
          <input id="title" type="text" v-model="title" class="valid" />
        </div>
        <div v-else>
          <label for="title">title:<span style="color: red">*required</span></label>
          <input id="title" type="text" v-model="title" class="invalid" />
          <p v-if="!isTitleValid" class="validation-text">
            <span class="warning">!</span>
            제목은 최대 100자까지 입력할 수 있습니다.
          </p>
        </div>
        <p class="log warning">
          {{ logMessage }}
        </p>
        <div>
          <label for="contents">contents:</label>
          <textarea id="contents" rows="5" cols="" v-model="contents"></textarea>
          <p v-if="!isContentsValid" class="validation-text">
            <span class="warning">!</span>
            내용은 최대 3000자까지 입력할 수 있습니다.
          </p>
        </div>
        <button :disabled="!title" type="submit" class="btn">create</button>
        <!-- $router.go(-1) 이전 페이지로 돌아가기 -->
        <button @click="$router.go(-1)" class="btn" style="margin-left: 782px">
          cancel
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { postCreate } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    // 100글자 이하면 true
    isTitleValid() {
      return this.title.length <= 100;
    },
    isContentsValid() {
      // 3천자 이하면 true
      return this.contents.length <= 3000;
    },
  },
  methods: {
    async submitPost() {
      try {
        const postData = {
          title: this.title,
          contents: this.contents,
        };
        // const { data } = axios.post('http://localhost:3000/posts/', postData);
        const { data } = await postCreate(postData);
        if (!data.message) {
          this.logMessage = `${data.data.title} 을 생성하셨습니다.`;
          this.$router.push('/posts');
        } else {
          this.logMessage = data.message;
        }
      } catch (error) {
        console.log('error', error);
      }
    },
  },
};
</script>

<style scoped>
.log {
  text-align: right;
}
</style>
