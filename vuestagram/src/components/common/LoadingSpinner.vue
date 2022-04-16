<template>
  <div class="spinner-container">
    <div class="spinner" style="font-size: 50px">
      <!-- loading... -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.spinner {
  width: 50px;
  height: 50px;
  position: relative;
  left: 13px;
  top: 100px;
  border-radius: 50%;
  border: 5px solid #e0e0e0;
  border-top-color: #f19022;
  border-bottom-color: #f19022;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}
/* 기기별 사이즈 320, 375(v), 425, 768px */
@media screen and (max-width: 375px) {
  .spinner {
    width: 50px;
    height: 50px;
    position: relative;
    left: 163px;
    top: 70px;
    border-radius: 50%;
    border: 5px solid #e0e0e0;
    border-top-color: #f19022;
    border-bottom-color: #f19022;
    animation: spin 1s linear infinite;
  }
}
</style>
