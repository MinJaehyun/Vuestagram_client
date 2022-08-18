<template>
  <div class="list-container contents">
    <h1 class="page-header page-header-wrap"></h1>
    <!-- 로그인 한 상태면 아래 안 보이도록 설정하기: token 값 있으면 로그인 중인 상태 -->
    <h2 v-if="$store.state.token" style="text-align: center" class="gradient">
      <!-- 로그인 후 노트를 작성하실 수 있습니다 -->
      개인 노트
    </h2>
    <div v-else style="text-align: center; font-size: 50px" class="gradient">
      로그인하여 개인 노트를 관리해 보세요 :)
    </div>
    <LoadingSpinner v-if="isLoading"></LoadingSpinner>
    <!-- ul 로 views/ 안에 components 를 감싼다 -->
    <ul v-else>
      <PostPage
        v-for="post in posts"
        :key="post._id"
        :post="post"
        @refresh="fetchData"
      ></PostPage>
    </ul>
    <div v-if="$store.state.username">
      <router-link class="create-button" to="/posts/add">
        <ion-icon name="add-outline"></ion-icon>
      </router-link>
    </div>
  </div>
</template>

<script>
import PostPage from '@/components/posts/PostList.vue';
import { fetchPosts } from '@/api/posts';
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
      this.isLoading = true;
      const { data } = await fetchPosts();
      this.isLoading = false;
      this.posts = data.post;
      // console.log(JSON.parse(JSON.stringify(this.posts)));
      this.posts.reverse();
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
@import '../assets/css/common.css';
@import '../assets/css/common/gradient.css';
</style>
