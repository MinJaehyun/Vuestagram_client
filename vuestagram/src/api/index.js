import axios from 'axios';

function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';
  const url = 'https://real-vuestagram-server.herokuapp.com';
  return axios.post(url, userData);
}

export default registerUser;
