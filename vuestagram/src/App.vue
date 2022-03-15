<template>
  <div>
    <div>
      <ShareSuccessPage v-if="modal == true" @modal="modal = false" />
    </div>

    <div>
      <div v-if="step == 0">
        <div class="footer ">
          <ul class="footer-button-plus ">
            <input @change="upload" type="file" id="file" class="inputfile" />
            <label for="file" class="input-plus">&#9997;</label>
          </ul>
        </div>
      </div>

      <div class="header">
        <!-- step == 1 -->
        <div v-if="step == 1">
          <ul class="header-button-left" @click="step--">
            <li style="color: black">Cancel</li>
          </ul>

          <ul class="header-button-right" @click="step++">
            <li style="color: black">Next</li>
          </ul>

          <!-- TODO: 붓 이모티콘은 당장 사용하지 않으므로 기능 추가 시, 설정한다! -->
          <!-- <div style="font-size: 40px; text-align:center;">&#128396;</div> -->
        </div>

        <!-- step == 2 -->
        <div v-if="step == 2">
          <ul class="header-button-right">
            <li @click="publish" style="color: black">발행</li>
          </ul>
        </div>
      </div>

      <!-- vuex 요청한 게시글 더 보기 내용 출력 -->
      <!-- {{$store.state.post[0].name}} -->

      <!-- component -->
      <Container
        :selectFilter="selectFilter"
        :post="post"
        :step="step"
        :url="url"
        @uploadText="content = $event"
      />

      <div>
        <!-- axios 요청하여 깃헙 서버에서 json 가져오기 -->
        <div v-if="step == 0" class="container ">
          <button @click="more">
            <!-- <button @click="$store.dispatch('getData')"> -->
            게시글 더보기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import post from "./assets/data/post";
import axios from "axios";
import ShareSuccessPage from "./components/ShareSuccessPage.vue";

export default {
  name: "App",
  data() {
    return {
      content: "",
      url: "",
      step: 0,
      post: post,
      count: 0,
      selectFilter: "",
      modal: false,
    };
  },
  components: { Container, ShareSuccessPage },
  mounted() {
    this.emitter.on("clickBox", (result) => {
      this.selectFilter = result; // selectFilter 에는 _1977 들어있는 상태
    });
  },
  methods: {
    async more() {
      try {
        const post = await axios.get(
          `https://minjaehyun.github.io/vue/more${this.count++}.json`
        );
        this.post.push(post.data);
      } catch (error) {
        console.log(error.response);
        alert("더 이상 게시물이 존재하지 않습니다.");
        // confirm("더 이상 게시물이 존재하지 않습니다.");
      }
    },
    upload(e) {
      let files = e.target.files;
      let file = files[0];
      let url = URL.createObjectURL(file);
      this.url = url;
      this.step = 1;
    },
    publish() {
      var uploadPost = {
        name: "tester",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.url,
        likes: 0,
        // 날짜와 시간 출력
        date: new Date().toLocaleString(),
        liked: false,
        content: this.content,
        filter: this.selectFilter,
      };
      this.post.unshift(uploadPost);
      this.step = 0;
      this.modal = true;
    },
  },
};
</script>

<style>
@import "assets/css/app.css";
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
</style>
