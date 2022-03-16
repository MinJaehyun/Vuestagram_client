<template>
  <div class="explain">
    <h4>이모티콘을 눌러 멋진 게시물을 만들어 주세요 :)</h4>
  </div>
</template>

<script>
export default {
  name: "Explain",
  // FIXME: vue 이므로 mounted() 사용하여 처리, nuxt 로 리펙토링할 시, asyncData 또는 fetch 적용한다
  mounted() {
    this.$store.dispatch("HELLO_SET_TIMEOUT");
  },
};
</script>

<style>
@import "../assets/css/explain.css";
</style>
