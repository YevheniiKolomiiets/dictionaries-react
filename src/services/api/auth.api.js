import axios from 'axios';

const AuthAPI = {
  login(payload) {
    const endpoint = `${process.env.REACT_APP_API_BASE}/auth/login`;
    return axios.post(endpoint, payload);
  },
};

export default AuthAPI;
