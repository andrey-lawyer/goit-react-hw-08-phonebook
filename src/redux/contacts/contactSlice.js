import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contactOperations';

function pending(state) {
  state.isLoading = true;
}

function rejected(state, { payload }) {
  state.isLoading = false;
  state.error = payload;
}

function fulfilled(state) {
  state.isLoading = false;
  state.error = null;
}

const extraActions = [fetchContacts, addContact, deleteContact, updateContact];
const getActions = type => extraActions.map(action => action[type]);

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        state.items = state.items.map(item => {
          return (item = item._id === payload._id ? payload : item);
        });
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(contact => contact._id !== payload);
      })

      .addMatcher(isAnyOf(...getActions('pending')), pending)
      .addMatcher(isAnyOf(...getActions('rejected')), rejected)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilled);
  },
});

export const contactsReducer = contactSlice.reducer;
