<template>
  <div class="list-container contents">
    <h1 class="page-header page-header-wrap"></h1>
    <h2 style="text-align: center" class="gradient">전체 노트</h2>
    <LoadingSpinner v-if="isLoading"></LoadingSpinner>
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
      const { data } = await this.axios
        .create({
          baseURL: `${process.env.VUE_APP_API_URL}findAll`,
          // baseURL: `https://real-vuestagram-server.herokuapp.com/findAll`, // 배포 URL
        })
        .get('')
        .catch(err => {
          return err.response;
        });
      this.isLoading = false;
      // console.log('data', data);
      // console.log('data.findAll', data.findAll);
      this.posts = data.findAll;
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
