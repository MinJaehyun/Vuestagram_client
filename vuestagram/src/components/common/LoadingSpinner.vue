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
.spinner-container {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* height: 100px; */
}
.spinner {
  width: 50px;
  height: 50px;
  position: relative;
  /* default */
  top: -8px;
  left: 103px;
  /* bugger */
  /* top: 82px;
  left: 297px; */

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
