import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
  isRefreshingUser: false,
};

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

const extraActions = [
  authOperations.register,
  authOperations.logIn,
  authOperations.logOut,
];

const getActions = type => extraActions.map(action => action[type]);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(authOperations.fetchCurrentUser.pending, state => {
        pending(state);
        state.isRefreshingUser = true;
      })
      .addCase(
        authOperations.fetchCurrentUser.fulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
          fulfilled(state);
          state.isRefreshingUser = false;
        }
      )
      .addCase(
        authOperations.fetchCurrentUser.rejected,
        (state, { payload }) => {
          rejected(state, { payload });
          state.isRefreshingUser = false;
        }
      )
      .addMatcher(isAnyOf(...getActions('pending')), pending)
      .addMatcher(isAnyOf(...getActions('rejected')), rejected)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilled);
  },
});

export default authSlice.reducer;
