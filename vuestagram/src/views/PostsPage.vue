<template>
  <div class="list-container contents">
    <h1 class="page-header page-header-wrap">학습 노트</h1>
    <!-- 로그인 한 상태면 아래 안 보이도록 설정하기: token 값 있으면 로그인 중인 상태 -->
    <h2 v-if="!$store.state.token" style="text-align: center" class="gradient">
      로그인 한 user 만 학습 노트를 작성하실 수 있습니다
    </h2>
    <LoadingSpinner v-if="isLoading"></LoadingSpinner>
    <!-- ul 로 views/ 안에 components 를 감싼다 -->
    <ul v-else>
      <PostPage v-for="post in posts" :key="post._id" :post="post"></PostPage>
    </ul>
    <router-link class="create-button" to="/posts/add">
      <ion-icon name="add-outline"></ion-icon>
    </router-link>
  </div>
</template>

<script>
import PostPage from '@/components/posts/PostList.vue';
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
@import '../assets/css/common.css';
@import '../assets/css/common/gradient.css';
</style>
