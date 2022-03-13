<template>
  <div class="post">
    <!-- post-header -->
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${post.userImage})` }"
      ></div>
      <span class="profile-name">{{ post.name }}</span>
    </div>
    <!-- @click="$store.commit('likesButton')"  -->

    <!-- FIX 
      1. 변경 전: 선택한 필터를 모든 게시물에 적용, 
      - :class="selectFilter + ' post-body'"
      2. 변경 후: post 의 각각의 필터를 적용
      - :class="post.filter + ' post-body'"
     -->
    <div
      :class="post.filter + ' post-body'"
      :style="{ backgroundImage: `url(${post.postImage})` }"
      @click="$store.commit('likesUpButton', post)"
    ></div>

    <!-- post-content -->
    <div class="post-content">
      <p>{{ $store.state.likes }} Likes</p>
      <p>
        <strong>{{ post.name }}</strong
        >{{ post.content }}
      </p>
      <p class="date">{{ post.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
  },
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
