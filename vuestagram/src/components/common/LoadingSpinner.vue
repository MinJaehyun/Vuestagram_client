<template>
  <div class="spinner-container">
    <div class="spinner"></div>
    <h4 class="gradient">Loading...</h4>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* .spinner-container{} */
.spinner {
  font-size: 50px;
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
/* 기기별 사이즈 320(v), 375, 425, 768px */
@media screen and (max-width: 320px) {
  .spinner {
    width: 50px;
    height: 50px;
    position: relative;
    left: 135px;
    top: 70px;
    border-radius: 50%;
    border: 5px solid #e0e0e0;
    border-top-color: #f19022;
    border-bottom-color: #f19022;
    animation: spin 1s linear infinite;
  }
}
</style>
