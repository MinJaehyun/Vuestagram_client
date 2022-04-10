import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  return instance.post('auth/signup', userData);
}

export { registerUser };
