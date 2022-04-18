import axios from 'axios';
import { setInterceptors } from './common/interceptor';

// user 전용 미인증된 axios
function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}
const instance = createInstance();

// user 생성
function registerUser(userData) {
  return instance.post('auth/signup', userData, { credentials: true }).catch(err => {
    return err.response;
  });
}

// user 로그인
function loginUser(userData) {
  return instance.post('auth/login', userData).catch(err => {
    return err.response;
  });
}

// 인증된 user 를 위한 posts
function createInstanceWithAuth() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}
const postsInstance = createInstanceWithAuth();

// post 조회
function fetchPost() {
  return postsInstance.get('posts').catch(err => {
    return err.response;
  });
}

// post 생성
function postCreate(postData) {
  return postsInstance.post('posts', postData).catch(err => {
    return err.response;
  });
}

export { registerUser, loginUser, fetchPost, postCreate };
