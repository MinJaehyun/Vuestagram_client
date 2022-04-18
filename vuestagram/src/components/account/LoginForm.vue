<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:<span style="color: red">*required</span></label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="email@ 형식으로 입력해 주세요"
          />
        </div>
        <div>
          <label for="password">pw:<span style="color: red">*required</span></label>
          <input type="text" id="password" v-model="password" />
        </div>
        <button :disabled="!isUsernameValid || !password" type="submit" class="loginBtn">
          로그인
        </button>
      </form>
      <p class="log">{{ $store.state.logMessage }}</p>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';
import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookie';

export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
      };
      const { data } = await loginUser(userData);
      // 비밀번호 에러
      if (data.err) {
        console.log('data.err: ', data.err);
        this.logMessage = `${data.err}`;
      }
      // 로그인 메시지
      else {
        // this.logMessage = `${data.user.username} 님이 로그인 하셨습니다.`;
        this.$store.commit('setUsername', data.user.username);
        this.$store.commit('setToken', data.token);
        saveAuthToCookie(data.token);
        saveUserToCookie(data.user.username);
        this.$router.push('/');
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style>
@import '../../assets/css/common.css';
</style>
