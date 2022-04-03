<template>
  <div>
    <div v-if="step == 0">
      <!-- post step 0 -->
      <Post :post="item" v-for="item in post" :key="item.id" />
    </div>

    <!-- 필터선택 step 1 -->
    <div v-if="step == 1">
      <div
        :class="selectFilter"
        class="upload-image"
        :style="{ backgroundImage: `url(${url})` }"
      ></div>
      <div class="filters">
        <FilterBox
          :style="{ backgroundImage: `url(${url})` }"
          :filter="filter"
          :url="url"
          v-for="filter in filterList"
          :key="filter.id"
        />
      </div>
    </div>

    <!-- 글 작성 step 2 -->
    <div v-if="step == 2">
      <div
        :class="selectFilter"
        class="upload-image"
        :style="{ backgroundImage: `url(${url})` }"
      ></div>
      <div class="write">
        <textarea
          placeholder="글을 작성 해주세요:)"
          class="write-box"
          @input="$emit('uploadText', $event.target.value)"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import filterList from "../assets/data/instagramFilter";

export default {
  name: "Container",
  components: { Post, FilterBox },
  data() {
    return {
      filterList: filterList,
    };
  },
  props: {
    post: Array,
    step: Number,
    url: String,
    selectFilter: String,
  },
};
</script>

<style>
@import "../assets/css/container.css";
</style>
