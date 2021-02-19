import axios from 'axios';
import store from '../store';
import { logout } from '../store/authSlice';

const HttpService = {
  setupInterceptors: () => {
    axios.interceptors.request.use((config) => {
      const user = localStorage.getItem('user');
      if (user?.token) {
        config.headers['Authorization'] = `Bearer ${user.token}`;
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
