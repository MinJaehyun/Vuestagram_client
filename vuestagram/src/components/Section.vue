<template>
  <div>
    <div>
      <Explain v-if="$store.state.visit == true" />
      <transition name="fade">
        <ShareSuccessPage v-if="modal == true" @modal="modal = false" />
      </transition>
    </div>
    <div class="app">
      <div>
        <div v-if="step == 0">
          <div class="footer ">
            <ul class="footer-button-plus ">
              <!-- 빈 이미지 등록하여 size err 해결 -->
              <!-- <img id="img" src="../assets/image/image.png" /> -->
              <img id="img" />
              <input @change="upload" id="file" type="file" class="inputfile" />
              <label for="file" class="input-plus btn btn-outline-success"
                >make&#9997;</label
              >
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
              <li style="color: black; box-sizing: none;">Next</li>
            </ul>

            <!-- TODO: 붓 이모티콘은 사용하지 않으므로 기능 추가 시, 설정한다! -->
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
            <button @click="more" class="btn btn-outline-success">
              <!-- <button @click="$store.dispatch('getData')"> -->
              게시글 더보기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Container from "../components/Container.vue";
import ShareSuccessPage from "../components/shareSuccessPage.vue";
import Explain from "../components/Explain.vue";
import post from "../assets/data/post";
import axios from "axios";
import * as mobilenet from "@tensorflow-models/mobilenet"; // 방법 1.
import "@tensorflow/tfjs-backend-webgl";

export default {
  name: "SectionApp",
  components: { Container, ShareSuccessPage, Explain },
  data() {
    return {
      content: "",
      url: "",
      step: 0,
      post: post,
      count: 0,
      selectFilter: "",
      modal: false,
      tag: "",
    };
  },
  mounted() {
    this.emitter.on("clickBox", (result) => {
      // selectFilter 에는 _1977 들어있는 상태
      this.selectFilter = result;
    });
  },
  methods: {
    async more() {
      try {
        const post = await axios.get(
          // `https://minjaehyun.github.io/vue/more${this.count++}.json`
          `https://minjaehyun.github.io/vuestagram_ref/vuestagram/src/assets/data/more${this
            .count++}.json`

          // FIXME: 추 후 리펙토링 하기
          // 여러개의 데이터가 담긴 객체배열에 요청 시, 3개씩 가져오도록 코드 작성하기
          // `https://minjaehyun.github.io/vuestagram_ref/vuestagram/src/assets/data/more.json`
          // this.post.push(post.data);
        );
        // 3개의 post.data 를 concat 을 사용하여 post 에 담는다
        // concat 으로 배열안에 배열을 풀어서 넣을 수 있다.
        this.post = this.post.concat(post.data);
      } catch (error) {
        console.log(error.response);
        alert("더 이상 게시물이 존재하지 않습니다.");
        // confirm("");
      }
    },
    async upload(e) {
      let file = e.target.files[0];
      let url = URL.createObjectURL(file);
      this.url = url;
      this.step = 1;

      // img 가져온 뒤, 업로드 한 url 을 src 에 넣는다
      const img = document.getElementById("img");
      img.src = this.url;
      const model = await mobilenet.load();
      const predictions = await model.classify(img);
      const className = predictions[0].className;
      const probability =
        " " + parseInt(predictions[0].probability * 100) + "%";
      const result =
        "Tag: " + probability + " 확률로 " + className + " 입니다 :)";
      this.tag = result;
    },
    publish() {
      var uploadPost = {
        name: "tester",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.url,
        likes: 0,
        date: new Date().toLocaleString(),
        liked: false,
        content: this.content,
        filter: this.selectFilter,
        tag: this.tag,
      };
      this.post.unshift(uploadPost);
      this.step = 0;
      this.modal = true;
    },
  },
};
</script>
<style>
@import "../assets/css/app.css";
@import "../assets/css/fade.css";

.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
</style>
