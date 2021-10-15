<template>
  <!-- header -->
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <!-- component -->
  <Container :post="post" :step="step"/>

  <!-- axios 요청하여 깃헙서버에서 json 가져오기 -->
  <button class="btn btn-primary" @click="more">
    게시글 더 보기
  </button>

  <!-- footer -->
  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

</template>

<script>
import Container from "./components/Container.vue";
import post from "./assets/data/post";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      step: 0,
      post: post,
      count: 0,
    };
  },
  components: { Container },
  methods: {
    more() {
      axios
        .get(`https://minjaehyun.github.io/vue/more${this.count++}.json`)
        .then((result) => {
          this.post.push(result.data);
        })
        .catch();
    },
    nextStep(){
      this.step = 1
    },
  },
};
</script>

<style>
@import "assets/css/app.css";
</style>
