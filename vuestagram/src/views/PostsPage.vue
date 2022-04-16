<template>
  <div class="list-container contents">
    <h1 class="page-header page-header-wrap">학습 노트</h1>
    <LoadingSpinner v-if="isLoading"></LoadingSpinner>
    <!-- ul 로 views/ 안에 components 를 감싼다 -->
    <ul v-else>
      <PostPage v-for="post in posts" :key="post._id" :post="post"></PostPage>
    </ul>
  </div>
</template>

<script>
import PostPage from '../components/posts/PostList.vue';
import { fetchPost } from '@/api/index';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

export default {
  components: { PostPage, LoadingSpinner },
  data() {
    return {
      posts: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchData() {
      const { data } = await fetchPost();
      this.posts = data.post;
    },
  },
  created() {
    this.isLoading = true;
    this.fetchData();
    this.isLoading = false;
  },
};
</script>

<style>
@import '../assets/css/posts/common.css';
</style>
