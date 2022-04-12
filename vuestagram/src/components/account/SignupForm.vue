<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:<span style="color: red">*required</span></label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">pw:<span style="color: red">*required</span></label>
          <input type="text" id="password" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input type="text" id="nickname" v-model="nickname" />
        </div>
        <!-- button의 기본 type은 submit이다. 중복 지정할 필요 있나? -->
        <button type="submit" class="signupBtn">회원 가입</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/index';
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
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
        this.logMessage = `${data.username} 님이 회원가입 되셨습니다.`;
        this.initForm();
      }
      // 409 에러 메시지 처리
      else if (data.err) {
        return (this.logMessage = data.err);
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style>
@import '../../assets/css/common.css';
</style>
