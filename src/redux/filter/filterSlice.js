import { createSlice } from '@reduxjs/toolkit';
import { addContact } from './../contacts/contactOperations';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    filterContact(state, { payload }) {
      state.value = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(addContact.pending, state => {
      state.value = '';
    });
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
