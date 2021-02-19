import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import DictionariesAPI from '../services/api/dictionaries.api';

export const fetchDictionaries = createAsyncThunk('auth/fetchDictionaries', async (payload) => {
  try {
    const response = await DictionariesAPI.getDictionaries();
    return response.data;
  } catch (e) {
    throw e.response.data.message;
  }
});

const initialState = {
  dictionaries: [],
  isLoading: false,
  error: null,
};

const dictionariesSlice = createSlice({
  name: 'dictionariesSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDictionaries.pending]: (state) => {
      state.dictionaries = null;
      state.isLoading = true;
      state.error = null;
    },
    [fetchDictionaries.fulfilled]: (state, { payload }) => {
      state.dictionaries = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchDictionaries.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
  },
});

export default dictionariesSlice.reducer;
