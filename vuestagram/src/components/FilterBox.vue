<template>
  <div @click="fire" :class="filter" class="filter-item" :style="`background-image: url${url}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  methods: {
    fire(){
      this.emitter.emit('clickBox', this.filter)
    }
  },
  props: {
    filter: Object,
    url: String,
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
