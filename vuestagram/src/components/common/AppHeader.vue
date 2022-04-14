<template>
  <div class="navbar">
    <div class="navbar__logo">
      <router-link to="/" class="gradient">Vuestagram</router-link>
    </div>
    <ul style="margin: 8px; line-height: 0px" class="navbar__menu">
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
        <span>{{ usernameStr() }}</span> |
        <!-- TODO: #: scroll 을 최상단에 위치시킨다. top 기능으로 활용해도 될 듯 -->
        <!-- <a href="#" to="/auth/logout">logout</a> -->
        <!-- <a href="#none" to="/auth/logout">logout</a> -->
        <a href="javascript:;" @click="logoutUser">logout</a>
        <!-- <a href="javascript:void(0);" to="/auth/logout">logout</a> -->
      </template>
      <!-- 로그아웃 -->
      <template v-else>
        <router-link to="/auth/login">Login</router-link> |
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
  data() {
    return {
      isToggleBtn: false,
      username: '',
    };
  },
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit('setClearUsername');
      this.$router.push('/');
    },
    comingSoonAlert() {
      alert('해당 기능은 준비 중입니다 :)');
    },
    toggleBtn(isToggleBtn) {
      this.isToggleBtn = !isToggleBtn;
      // 버튼(홈, 검색)
      const menu = document.querySelector('.navbar__menu');
      // 계정(아이디, 로그아웃, 로그인, 회원가입)
      const account = document.querySelector('.navbar__account');
      /* Section.vue 의 toggleBtn() 함수를 실행하여, app.css 의 menu 와 account 를 classList.toggle("active") 설정 */
      menu.classList.toggle('active');
      account.classList.toggle('active');
    },
    usernameStr() {
      const username = this.$store.state.username;
      let result = '';
      let number = 0;
      if (username.indexOf('@') !== -1) {
        // @ 있으면 true 이며, @ 앞에 글자들을 가져온다
        number = username.indexOf('@');
        for (let i = 0; i < number; i++) {
          result = result + username[i];
        }
      }
      return result;
    },
  },
};
</script>

<style>
@import '../../assets/css/app.css';
@import '../../assets/css/gradient.css';
</style>
