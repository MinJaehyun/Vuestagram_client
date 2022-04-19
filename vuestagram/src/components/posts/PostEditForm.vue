<template>
  <div class="contents">
    <h1 class="page-header">Edit post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">title: </label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">contents: </label>
          <textarea id="contents" type="text" v-model="contents" />
        </div>
        <button class="btn" type="submit">Edit</button>
      </form>
    </div>
  </div>
</template>
<script>
import { fetchPost, postUpdate } from '@/api/posts';
export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  methods: {
    // NOTE: 2순위: submit 시, 해당 내용을 업데이트 한다
    async submitForm() {
      const id = this.$route.params.id;
      const { data } = await postUpdate(id, {
        title: this.title,
        contents: this.contents,
      });
      console.log(data);
      this.$router.push('/posts');
    },
  },
  // NOTE: 1순위: 시작 시 fetchPost 로 id 인 상세페이지 가져온다
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    // console.log(data);
    this.title = data._doc.title;
    this.contents = data._doc.contents;
  },
};
</script>

<style></style>
