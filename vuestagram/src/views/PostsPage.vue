<template>
  <div class="list-container contents">
    <h1 class="page-header page-header-wrap"></h1>
    <!-- 로그인 한 상태면 개인 노트 안 보이게 설정: token 유무로 로그인 상태 판단 -->
    <h2 v-if="$store.state.token" style="text-align: center" class="gradient">
      <div class="personal-note-setTimeout">
        "우측 하단 + 버튼 눌르면 노트를 작성할 수 있습니다"
      </div>
      <br />
      개인 노트
    </h2>
    <div v-else style="text-align: center; font-size: 50px" class="gradient">
      로그인하여 개인 노트를 관리해 보세요 :)
    </div>
    <LoadingSpinner v-if="isLoading"></LoadingSpinner>
    <!-- ul 로 views/ 안에 components 를 감싼다 -->
    <ul v-else>
      <PostList
        v-for="post in posts"
        :key="post._id"
        :post="post"
        @refresh="fetchData"
      ></PostList>
    </ul>
    <div v-if="$store.state.username">
      <router-link class="create-button" to="/posts/add">
        <ion-icon name="add-outline"></ion-icon>
      </router-link>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList.vue';
import { fetchPosts } from '@/api/posts';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

export default {
  components: { PostList, LoadingSpinner },
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
      if (this.posts) this.posts.reverse();
    },
    async perNoteFunction() {
      setTimeout(() => {
        let personalNote = document.querySelector('.personal-note-setTimeout');
        if (personalNote) personalNote.style = 'display: none';
      }, 5000);
    },
  },
  created() {
    this.fetchData();
    this.perNoteFunction();
  },
};
</script>

<style>
@import '../assets/css/common.css';
@import '../assets/css/common/gradient.css';
</style>
