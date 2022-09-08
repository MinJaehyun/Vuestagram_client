<template>
  <div
    @click="fire"
    :class="filter"
    class="filter-item"
    :style="{ backgroundImage: `url(${url})` }"
  >
    {{ filter }}
  </div>
</template>

<script>
export default {
  name: 'FilterBox',
  props: {
    filter: String,
    url: String,
  },
  methods: {
    fire() {
      // 변경 전: emitter 으로 depth 2단계 이상 또는 같은 depth 에게 값 넘김: this.emitter.emit('clickBox', this.filter);
      // 변경 후: vuex 적용
      this.$store.commit('setSelectFilter', this.filter);
    },
  },
};
</script>
<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 3px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
