<template>
  <div class="post">
    <!-- post-header -->
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage: `url(${post.userImage})` }"></div>
      <span class="profile-name">
        <strong>{{ post.name }}</strong>
      </span>
    </div>
    <div
      :class="post.filter + ' post-body'"
      :style="{ backgroundImage: `url(${post.postImage})` }"
      @click="$store.commit('likesUpButton', post)"
    ></div>
    <!-- post-content -->
    <div class="post-content">
      <div style="cursor: pointer" @click="$store.commit('likesUpButton', post)">
        <!-- '좋아요' 상태면 하트 보여주고, 아니면 빈하트 보여주기 -->
        <p v-if="!post.liked" style="margin-bottom: 0px">
          <ion-icon name="heart-outline"></ion-icon>
        </p>
        <p v-else style="margin-bottom: 0px">
          <ion-icon name="heart"></ion-icon>
        </p>
      </div>
      <p>{{ post.likes }} Likes</p>
      <p class="date">{{ post.date }}</p>
      <p>{{ post.content }}</p>
      <p class="gradient">{{ post.tag }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  // NOTE: 한 단계 아래는 props 사용하기 (v-for 로 prop 전달)
  props: {
    post: Object,
  },
};
</script>
<style>
@import '../../assets/css/common/gradient.css';
@import '../../assets/css/vuestagram/post.css';
</style>
