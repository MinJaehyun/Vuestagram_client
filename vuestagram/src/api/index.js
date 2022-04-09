import axios from 'axios';

function registerUser(userData) {
  const url = 'http://localhost:3000/auth/signup';
  // const url = 'https://real-vuestagram-server.herokuapp.com/auth/signup';
  return axios.post(url, userData);
}

export { registerUser };
