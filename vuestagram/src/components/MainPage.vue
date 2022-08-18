<template>
  <div style="display: flex">
    <!-- vuestagram -->
    <div class="card" style="width: 18rem; margin: 30px 30px">
      <img src="@/assets/image/vuestagram.gif" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title gradient"></h5>
        <p class="card-text">
          이미지에 필터를 입혀 업로드 시, 이미지를 분석하여 자동으로 태그를 등록
        </p>
        <router-link to="/vuestagram" class="btn btn-outline-success">
          vuestagram
        </router-link>
      </div>
    </div>
    <!-- TIL -->
    <div class="card" style="width: 18rem; margin: 30px 30px">
      <img src="@/assets/image/TIL.gif" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title card-body-top gradient"></h5>
        <p class="card-text" style="margin-bottom: 23px">
          모든 유저의 노트를 볼 수 있고 나만의 노트를 기록
        </p>
        <br />
        <router-link to="/findAll" class="btn btn-outline-success"
          >전체 노트로 이동</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    comingSoonAlert(name) {
      alert(`${name} 기능 준비 중 :)`);
    },
  },
};
</script>

<style scoped>
@import '../assets/css/common/gradient.css';
.card-body-top {
  margin-top: 88px;
  margin-bottom: 32px;
}
</style>
