<template>
  <div class="explain gradient">
    <h4>+ 버튼을 누르면 사진을 등록하실 수 있습니다 :)</h4>
  </div>
</template>

<script>
export default {
  name: 'Explain',
  // FIXME: vue 이므로 mounted() 사용하여 처리, nuxt 로 리펙토링할 시, asyncData 또는 fetch 적용한다
  mounted() {
    this.$store.dispatch('HELLO_SET_TIMEOUT');
  },
};
</script>

<style>
@import '../../assets/css/common/gradient.css';
.explain {
  padding: 12px;
  margin: 15px 12px;
  text-align: center;
}
</style>
