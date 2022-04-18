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
      // NOTE: emitter 사용하여, depth 가 2단계 이상이거나 같은 depth 라인에게 값을 넘길 수 있다.
      this.emitter.emit('clickBox', this.filter);
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
