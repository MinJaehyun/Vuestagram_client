<template>
  <div style="display: flex">
    <!-- vuestagram -->
    <div class="card" style="width: 18rem; margin: 30px 30px">
      <img src="../assets/image/vuestagram.gif" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title gradient">vuestagram</h5>
        <p class="card-text">
          이미지에 필터를 입혀 업로드 시, 이미지를 분석하여 자동으로 태그를 등록합니다.
        </p>
        <router-link to="/vuestagram" class="btn btn-outline-success"
          >vuestagram 이동하기</router-link
        >
      </div>
    </div>
    <!-- TIL -->
    <div class="card" style="width: 18rem; margin: 30px 30px">
      <img src="../assets/image/image.png" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title gradient">TIL</h5>
        <p class="card-text">매일 학습 내용을 간편하게 기록합니다.</p>
        <router-link
          @click="comingSoonAlert('TIL')"
          to="#"
          class="btn btn-outline-success"
          >TIL 이동하기</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    comingSoonAlert(name) {
      alert(`${name} 기능은 준비 중입니다 :)`);
    },
  },
};
</script>

<style>
@import '../assets/css/gradient.css';
</style>
