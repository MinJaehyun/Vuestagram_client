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
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'FilterBox',
  props: {
    filter: String,
  },
  computed: {
    ...mapState(['url']),
  },
  methods: {
    ...mapMutations(['setSelectFilter']),
    fire() {
      this.setSelectFilter(this.filter);
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
