<template>
  <div class="navbar">
    <div class="navbar__logo">
      <router-link to="/" class="gradient">Vuestagram</router-link>
    </div>
    <ul style="display: flex; margin: 8px; padding: 8px 12px; line-height: 0px">
      <li>
        <!-- home icon -->
        <router-link to="/">
          <ion-icon size="large" name="home-outline"></ion-icon>
        </router-link>
      </li>
      <li>
        <!-- search icon -->
        <ion-icon @click="comingSoonAlert" size="large" name="search-outline"> </ion-icon>
      </li>
    </ul>
    <div class="navbar__account gradient" style="padding: 8px 12px">
      <!-- 로그인: store 에 isLogin 값을 가져온다 (true) -->
      <template v-if="isUserLogin">
        <span>{{ $store.state.username }}</span>
        <router-link to="/auth/logout">logout</router-link>
      </template>
      <!-- 로그아웃 -->
      <template v-else>
        <router-link to="/auth/login">Login</router-link>
        <router-link to="/auth/signup">Signup</router-link>
      </template>
    </div>

    <!-- navbar__toggleBtn -->
    <a href="#" class="navbar__toggleBtn" @click="toggleBtn(isToggleBtn)">
      <font-awesome-icon icon="bars" />
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    comingSoonAlert() {
      alert('해당 기능은 준비 중입니다 :)');
    },
  },
};
</script>

<style>
@import '../../assets/css/app.css';
@import '../../assets/css/gradient.css';
</style>
