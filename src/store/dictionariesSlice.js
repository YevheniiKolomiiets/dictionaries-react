import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import DictionariesAPI from '../services/api/dictionaries.api';

export const fetchDictionaries = createAsyncThunk('auth/fetchDictionaries', async () => {
  try {
    const response = await DictionariesAPI.getDictionaries();
    return response.data;
  } catch (e) {
    throw e.response.data.message;
  }
});

export const addDictionary = createAsyncThunk('auth/addDictionary', async (payload) => {
  try {
    const response = await DictionariesAPI.addDictionary(payload);
    return response.data;
  } catch (e) {
    throw e.response.data.message;
  }
});

export const removeDictionary = createAsyncThunk('auth/removeDictionary', async (payload) => {
  try {
    const response = await DictionariesAPI.removeDictionary(payload);
    return response.data;
  } catch (e) {
    throw e.response.data.message;
  }
});

export const editDictionary = createAsyncThunk('auth/editDictionary', async (payload) => {
  try {
    const response = await DictionariesAPI.editDictionary(payload);
    return response.data;
  } catch (e) {
    throw e.response.data.message;
  }
});

const initialState = {
  dictionaries: [],
  isDictionariesLoading: false,
  isLoading: false,
  error: null,
  addDictionaryError: null,
  removeDictionaryError: null,
};

const dictionariesSlice = createSlice({
  name: 'dictionariesSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDictionaries.pending]: (state) => {
      state.dictionaries = null;
      state.isDictionariesLoading = true;
      state.error = null;
    },
    [fetchDictionaries.fulfilled]: (state, { payload }) => {
      state.dictionaries = payload;
      state.isDictionariesLoading = false;
      state.error = null;
    },
    [fetchDictionaries.rejected]: (state, { error }) => {
      state.isDictionariesLoading = false;
      state.error = error.message;
    },

    [addDictionary.pending]: (state) => {
      state.isLoading = true;
      state.addDictionaryError = null;
    },
    [addDictionary.fulfilled]: (state, { payload }) => {
      state.dictionaries = [...state.dictionaries, payload];
      state.isLoading = false;
      state.addDictionaryError = null;
    },
    [addDictionary.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.addDictionaryError = error.message;
    },

    [removeDictionary.pending]: (state) => {
      state.isLoading = true;
      state.removeDictionaryError = null;
    },
    [removeDictionary.fulfilled]: (state, { payload }) => {
      state.dictionaries = state.dictionaries.filter(({ id }) => id !== payload.id);
      state.isLoading = false;
      state.removeDictionaryError = null;
    },
    [removeDictionary.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.removeDictionaryError = error.message;
    },

    [editDictionary.pending]: (state) => {
      state.isLoading = true;
      state.editDictionaryError = null;
    },
    [editDictionary.fulfilled]: (state, { payload }) => {
      state.dictionaries = state.dictionaries.map((record) => (record.id === payload.id ? payload : record));
      state.isLoading = false;
      state.editDictionaryError = null;
    },
    [editDictionary.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.editDictionaryError = error.message;
    },
  },
});

export default dictionariesSlice.reducer;
