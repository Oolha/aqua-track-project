export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectAuthUser = (state) => state.auth.user;
export const selectAuthError = (state) => state.auth.error;
export const selectAuthIsLoading = (state) => state.auth.isLoading;
export const selectUserDisplayName = (state) => {
  const user = state.auth.user;
  return user.name !== 'User' ? user.name : user.email.split('@')[0];
};
export const selectUserDailyNorma = (state) => {
  const user = state.auth.user;
  return user.dailyNorm !== undefined || 0 ? user.dailyNorm : 1.5;
};

export const selectIsRefreshing = (state) => state.auth.isRefreshing;