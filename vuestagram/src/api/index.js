import axios from 'axios';
import store from '@/store';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Authorization: store.state.token,
  },
});

function registerUser(userData) {
  return instance.post('auth/signup', userData, { credentials: true }).catch(err => {
    return err.response;
  });
}

function loginUser(userData) {
  return instance.post('auth/login', userData).catch(err => {
    return err.response;
  });
}

export { registerUser, loginUser };
