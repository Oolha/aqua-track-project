export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectAuthUser = (state) => state.auth.user;
export const selectAuthError = (state) => state.auth.error;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;