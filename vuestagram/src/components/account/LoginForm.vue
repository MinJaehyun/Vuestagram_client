<template>
  <div class="contents">
    <LoadingSpinner v-if="isLoading" />
    <div v-else class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username"
            >id:<span style="color: red">*required</span>
            <span v-if="!isUsernameValid">
              email@xxx.com 형식을 제대로 입력해 주세요</span
            >
          </label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="email@ 형식으로 입력해 주세요"
          />
        </div>
        <div>
          <label for="password">pw:<span style="color: red">*required</span></label>
          <input type="password" id="password" v-model="password" />
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
import { loginUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';
import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookie';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

export default {
  components: { LoadingSpinner },
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
      isLoading: false,
    };
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      this.isLoading = true;
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
      this.isLoading = false;
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style scoped>
@import '../../assets/css/common.css';
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
}
.spinner {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #e0e0e0;
  border-bottom: 5px solid #fe9616;
  animation: spin 1s linear infinite;
  position: relative;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
