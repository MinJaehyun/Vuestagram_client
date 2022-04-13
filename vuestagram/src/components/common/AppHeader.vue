<template>
  <div>
    <!-- 로그인 시 -->
    <!-- store 에 isLogin 값을 가져온다. true -->
    <template v-if="isUserLogin">
      <span>{{ $store.state.username }}</span>
      <router-link @click="$emit('appNone')" to="/auth/logout">logout</router-link>
    </template>
    <!-- 로그아웃 시 -->
    <template v-else>
      <!-- FIXME: to="" 문자열만 받도록 되어 있는데, api/index.js 주소를 가져오는게 효율적이다. -->
      <router-link @click="$emit('appNone')" to="/auth/login">Login</router-link>
      <router-link @click="$emit('appNone')" to="/auth/signup">Signup</router-link>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
};
</script>

<style></style>
