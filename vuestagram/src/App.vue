<template>
  <!-- header -->
  <div class="header">
    <div v-if="step == 1">
      <ul class="header-button-left">
        <li style="color: black">Cancel</li>
      </ul>	

      <ul class="header-button-right" @click="step++">
        <li style="color: black">Next</li>
      </ul>

      <div style="font-size: 40px; text-align:center;">&#128396;</div>
    </div>

    <div v-if="step == 2">
      <ul class="header-button-right">
        <li @click="publish" style="color: black">발행</li>
      </ul>
    </div>
    
  </div>

  <!-- vuex 요청한 게시글 더 보기 내용 출력 -->
  <!-- {{$store.state.post[0].name}} -->

  <!-- component -->
  <Container :post="post" :step="step" :url="url" @uploadText="content=$event"/>

  <!-- axios 요청하여 깃헙서버에서 json 가져오기 -->
  <div v-if="step == 0">
    <button @click="more">
    <!-- <button @click="$store.dispatch('getData')">   -->
      게시글 더 보기
    </button>
  </div>

  <!-- footer -->
  <div v-if="step == 0">
    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
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
      content: '',
      url: '',
      step: 0,
      post: post,
      count: 0,
      selectFilter: '',
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
    upload(e){
      let files = e.target.files;
      let file  = files[0];
      // console.log(file);
      let url   = URL.createObjectURL(file);
      // console.log(url);
      this.url  = url;
      this.step = 1;
    },
    publish(){
      // 게시글을 서버에 저장한다
      // uploadPost 만들기 (형태는 post.js 참조)
      var uploadPost = {
        name: "Min jae Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.url,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.content,
        filter: this.selectFilter,
      }
      this.post.unshift(uploadPost)
      // 마지막에 this.step 을 0 으로 만든다
      this.step = 0;
    }
  },
  mounted() {
    this.emitter.on('clickBox', (a)=>{
      this.selectFilter = a
    })
  }
};
</script>

<style>
@import "assets/css/app.css";
</style>
