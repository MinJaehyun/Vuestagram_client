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
        <div>
          <label for="nickname">nickname: </label>
          <input type="text" id="nickname" v-model="nickname" />
        </div>
        <!-- button의 기본 type은 submit이다. 중복 지정할 필요 있나? -->
        <button :disabled="!isUsernameValid || !password" type="submit" class="signupBtn">
          회원 가입
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';

export default {
  components: { LoadingSpinner },
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
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
      // TODO: this.isLoading = true; // 동일한 id 로 가입 시, isLoading = true 설정하면 무한 로딩 발생한다
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const { data } = await registerUser(userData);
      // username, password check
      if (this.username == '' || this.password == '') {
        this.logMessage = 'id 와 password 를 입력해 주세요';
      }
      // 회원가입 성공
      else if (data.username) {
        this.logMessage = `${data.username} 님이 회원가입에 성공 하셨습니다.`;
        // 위는 push 기능 때문에 바로 login 화면으로 넘어간다. 고로, 값을 store 에 저장하고 login 화면에서 로그 메시지를 넘겨준다.
        this.$store.commit('setLogMessage', this.logMessage);
        this.initForm();
      }
      // 409 에러 메시지 처리
      else if (data.err) {
        return (this.logMessage = data.err);
      }
      this.isLoading = false;
      this.$router.push('/auth/login');
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style scoped>
@import '../../assets/css/common.css';
</style>
