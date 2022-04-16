<template>
  <div>
    <div class="black-bg">
      <!-- <div class="white-bg " @click="$emit('modal')"> -->
      <div class="white-bg" @click="$store.commit('modalChange', false)">
        <div class="flex">
          <img src="@/assets/image/10a8cbeb94ba.gif" alt="" />
        </div>
        <p class="flex">게시물이 공유되었습니다</p>
        <button
          style="margin: auto; display: block"
          class="btn btn-outline-info"
          type="button"
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
  /* z-index 맨 앞에 위치하게 설정하여, 이미지 뒤로 모달창이 설정되는 문제점을 해결! */
  z-index: 500;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
}
.white-bg {
  position: fixed;
  top: 30%;
  left: 25%;
  width: 50%;
  height: 40%;
  background: white;
  border-radius: 10px;
  padding: 100px;
  color: grey;
  cursor: pointer;
}
.flex {
  display: flex;
  justify-content: center;
}
/* 기기별 사이즈 320, 375, 425, 768px */
@media screen and (max-width: 375px) {
  .black-bg {
    z-index: 500;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
  }
  .white-bg {
    position: fixed;
    top: 15%;
    left: 25%;
    width: 60%;
    height: 75%;
    background: white;
    border-radius: 10px;
    padding: 100px;
    color: grey;
    cursor: pointer;
  }
  .flex {
    display: flex;
    justify-content: center;
  }
}
</style>
