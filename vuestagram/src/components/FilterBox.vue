<template>
  <div
    @click="fire"
    :class="filter"
    class="filter-item"
    :style="{ backgroundImage: `url(${url})` }"
  >
    <!-- Container.vue 에서 v-slot 사용하여 데이터 내려줄 시 아래 slot 으로 받을 수 있다 -->
    <!-- <slot name="a"></slot> -->
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
      this.emitter.emit("clickBox", this.filter);
    },
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>
