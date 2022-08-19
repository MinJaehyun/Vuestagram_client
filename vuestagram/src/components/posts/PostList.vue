<template>
  <!-- ul>li>div 로 감싸고, class 입히기 -->
  <li>
    <div class="post-title">
      {{ post.title }}
    </div>
    <div class="post-contents">
      {{ post.contents }}
    </div>
    <div>
      <div class="post-createdBy">
        <!-- 변경 전: {{ $store.state.username }} 는 로그인 한 username 이다 -->
        <!-- 변경 후: 로그인 한 username 가 아닌, 작성한 username 가져오기 -->

        <!-- $router url 로 전체노트와 개인노트 username 을 나타낸다 -->
        <!-- $route.fullPath 사용하여 작성한 게시자의 username 을 나타낸다 -->
        <div v-if="$route.fullPath === '/posts'">{{ $store.state.username }}</div>
        <div v-else>{{ post.createdBy.username }}</div>
      </div>
      <div class="post-created_at">
        <!-- {{ post.created_at 을 filter 처리 }} -->
        {{ setDate(post.created_at) }}

        <!-- 수정 버튼 -->
        <ion-icon
          v-if="checkAuthUsername | ($route.fullPath === '/posts')"
          name="create-sharp"
          style="padding: 0px 12px; color: black; cursor: pointer"
          @click="routerEditPage()"
        ></ion-icon>

        <!-- 삭제 버튼 -->
        <ion-icon
          v-if="checkAuthUsername | ($route.fullPath === '/posts')"
          name="trash-outline"
          style="color: black; cursor: pointer"
          @click="deleteItem"
        ></ion-icon>
      </div>
    </div>
  </li>
</template>

<script>
import { postDelete } from '@/api/posts';
import { postCreatedAtData } from '@/utils/filters';

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    checkAuthUsername() {
      return this.$store.state.username === this.post.createdBy.username;
    },
  },
  methods: {
    async deleteItem() {
      if (confirm('You wanna to delete it?')) {
        await postDelete(this.post._id);
        this.$emit('refresh');
      }
    },
    routerEditPage() {
      this.$router.push(`/posts/${this.post._id}`);
    },
    // vue3 방식: filter 대신 computed or method 호출로 대체됨
    setDate(value) {
      return postCreatedAtData(value);
    },
  },
};
</script>

<style>
@import '../../assets/css/common.css';
</style>
