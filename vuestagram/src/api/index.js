import axios from 'axios';
import { setInterceptors } from './common/interceptor';

// 미인증된 user axios
function createInstance(url) {
  return axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
}

// 인증된 posts axios
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

// NOTE: '/' 안 넣어도 된다
export const instance = createInstance('auth');
export const postsInstance = createInstanceWithAuth('posts');
