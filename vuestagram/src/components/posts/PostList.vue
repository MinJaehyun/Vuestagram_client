<template>
  <!-- ul>li>div 로 감싸고, class 입히기 -->
  <li>
    <div class="post-title" @click="routerEditPage()" style="cursor: pointer">
      {{ post.title }}
    </div>
    <div class="post-contents">
      {{ post.contents }}
    </div>
    <div>
      <div class="post-createdBy">
        <!-- 변경 전: {{ $store.state.username }} -->
        <!-- 변경 후: 로그인 한 username 이 아닌, 작성한 username 가져오기 -->
        {{ post.createdBy.username }}
      </div>
      <div class="post-created_at">
        <!-- {{ post.created_at 을 filter 처리함 }} -->
        {{ setDate(post.created_at) }}
        <!-- icon -->
        <ion-icon
          name="create-sharp"
          style="padding: 0px 12px; color: black; cursor: pointer"
          @click="routerEditPage()"
        ></ion-icon>
        <ion-icon
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
  computed: {},
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
