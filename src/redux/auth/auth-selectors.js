const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUser = state => state.auth.user;

const getIsRefreshingUser = state => state.auth.isRefreshingUser;

const getError = state => state.auth.error;

const getLoading = state => state.auth.isLoading;

const authSelectors = {
  getError,
  getIsLoggedIn,
  getUser,
  getIsRefreshingUser,
  getLoading,
};

export default authSelectors;
