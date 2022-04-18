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
        {{ $store.state.username }}
      </div>
      <div class="post-created_at">
        {{ post.created_at }}
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
@import '../../assets/css/common.css';
</style>
