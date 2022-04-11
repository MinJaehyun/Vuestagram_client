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
        <button type="submit" class="loginBtn">로그인</button>
      </form>
      <!-- <p class="log">{{ logMessage }}</p> -->
    </div>
  </div>
</template>

<script>
import { loginUser } from '@/api/index';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
      };
      const test = await loginUser(userData);
      console.log(test);
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
