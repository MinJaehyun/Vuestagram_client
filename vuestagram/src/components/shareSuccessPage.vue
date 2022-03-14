<template>
  <div>
    <div class="black-bg">
      <div class="white-bg ">
        <div class="flex">
          <img src="../assets/image/10a8cbeb94ba.gif" alt="애니메이션 효과" />
        </div>
        <p class="flex">게시물이 공유되었습니다:)</p>
        <!-- modal 을 false 로 변경한다. -->
        <button
          style="margin:auto; display:block;"
          type="button"
          @click="$emit('modal')"
        >
          닫기
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 24%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  /* position: static; */
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  color: grey;
}
.flex {
  display: flex;
  justify-content: center;
}
</style>
