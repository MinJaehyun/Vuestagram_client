<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div>
          <label for="password">pw:</label>
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
      // vue 를 사용하여 username, password 체크
      if (this.username == '' || this.password == '') {
        this.logMessage = 'id, pw 을 입력 해주세요';
      }
      // 동일 id 로 회원가입 시, server 에서 409 충돌나므로, 중복된 id 메시지를 send 하였고, 이를 data 로 받음
      else if (typeof data === 'string') {
        this.logMessage = `${data}`;
      }
      // 회원 가입 성공 시, server 에 data.username 을 받음
      else if (typeof data === 'object') {
        this.logMessage = `${data.username} 님이 회원가입 되셨습니다.`;
        this.initForm();
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
