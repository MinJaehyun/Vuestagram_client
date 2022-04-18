import { instance } from '@/api/index';

// user 생성
function registerUser(userData) {
  return instance.post('signup', userData, { credentials: true }).catch(err => {
    return err.response;
  });
}

// user 로그인
function loginUser(userData) {
  return instance.post('login', userData).catch(err => {
    return err.response;
  });
}

export { registerUser, loginUser };
