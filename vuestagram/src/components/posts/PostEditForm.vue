<template>
  <!-- contents -->
  <div class="contents">
    <h1 class="page-header">Edit post</h1>
    <!-- form-wrapper -->
    <div class="form-wrapper">
      <!-- form -->
      <form class="form" @submit.prevent="submitPost">
        <!-- FIXME: 하드코딩 개선하기 -->
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
        <button :disabled="!title" type="submit" class="btn">update</button>
        <button type="submit" class="btn" style="margin-left: 782px">cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';

export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isTitleValid() {
      return this.title.length <= 100;
    },
    isContentsValid() {
      return this.contents.length <= 3000;
    },
  },
  methods: {
    async submitPost() {
      const postId = this.$route.params.id;
      try {
        // editPost api 요청
        await editPost(postId, {
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/posts');
      } catch (error) {
        console.log(error);
        this.logMessage = error;
      }
    },
  },
  async created() {
    // fetchPost api 요청
    const postId = this.$route.params.id;
    const { data } = await fetchPost(postId);
    // 이 전 데이터 가져오기
    this.title = data._doc.title;
    this.contents = data._doc.contents;
  },
};
</script>

<style scoped>
.log {
  text-align: right;
}
</style>
