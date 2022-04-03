<template>
  <div class="spinner-container">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.spinner-container {
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* height: 100px; */
}
.spinner {
  width: 50px;
  height: 50px;
  position: relative;
  top: 42px;
  left: 53px;
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
</style>
