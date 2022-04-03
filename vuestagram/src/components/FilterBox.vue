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
  name: "FilterBox",
  props: {
    filter: String,
    url: String,
  },
  methods: {
    fire() {
      // NOTE: emitter 사용하여, depth 가 2단계 이상이거나 같은 depth 라인에게 값을 넘길 수 있다.
      this.emitter.emit("clickBox", this.filter);
    },
  },
};
</script>
<style>
@import "../assets/css/filterBox.css";
</style>
