import axios from 'axios';
import store from '../store';
import { logout } from '../store/authSlice';

const HttpService = {
  setupInterceptors: () => {
    axios.interceptors.request.use((config) => {
      const user = JSON.parse(localStorage.getItem('user'));

      if (user?.authToken) {
        config.headers['Authorization'] = `Bearer ${user.authToken}`;
      }
      return config;
    });

    axios.interceptors.response.use(undefined, (err) => {
      return new Promise(() => {
        if (err.response?.status === 401) {
          store.dispatch(logout());
        }
        throw err;
      });
    });
  },
};

export default HttpService;
