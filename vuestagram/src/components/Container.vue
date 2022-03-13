<template>
  <div>
    <!-- post page -->
    <div v-if="step == 0">
      <Post :post="item" v-for="item in post" :key="item.id" />
    </div>

    <!-- 필터선택 page -->
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
        >
          <!-- {{ filter }} 는 slot 에 내려줄 데이터 -->
          <!-- <template v-slot:a><span>{{ filter }}</span></template> -->
        </FilterBox>
      </div>
    </div>

    <!-- 글 작성 page -->
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
.upload-image {
  width: 100%;
  height: 350px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
