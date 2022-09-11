<template>
  <div>
    <!-- 기존구조 -->
    <div v-if="step == 0">
      <Post :post="item" v-for="item in post" :key="item.id" />
    </div>

    <!-- 필터선택영역 -->
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
          v-for="filter in filterList"
          :key="filter.id"
        />
      </div>
    </div>

    <!-- 글작성영역 -->
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
          @input="setUploadText($event.target.value)"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from '@/components/vuestagram/Post.vue';
import FilterBox from '@/components/vuestagram/FilterBox.vue';
import filterList from '@/assets/data/instagramFilter';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Container',
  components: { Post, FilterBox },
  data() {
    return {
      // filterList data 는 상위에서 내려받지 않아도 된다
      filterList,
    };
  },
  computed: {
    ...mapState(['post', 'selectFilter', 'url', 'step']),
  },
  methods: {
    ...mapMutations(['setUploadText']),
  },
};
</script>

<style>
@import '../../assets/css/vuestagram/container.css';
</style>
