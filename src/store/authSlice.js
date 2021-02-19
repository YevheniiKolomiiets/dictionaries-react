import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthAPI from '../services/api/auth.api';

export const doLogin = createAsyncThunk('auth/doLogin', async (payload) => {
  try {
    const response = await AuthAPI.login(payload);

    localStorage.setItem('user', JSON.stringify(response.data));

    return response.data;
  } catch (e) {
    throw e.response.data.message;
  }
});

const persistedUser = localStorage.getItem('user');

const initialState = {
  user: persistedUser ? JSON.parse(persistedUser) : null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isLoading = false;
      state.error = null;

      localStorage.removeItem('user');
    },
  },
  extraReducers: {
    [doLogin.pending]: (state) => {
      state.user = null;
      state.isLoading = true;
      state.error = null;
    },
    [doLogin.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
      state.error = null;
    },
    [doLogin.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
