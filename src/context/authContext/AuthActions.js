// login
export const loginStart = () => ({
  type: "LOGIN_START",
});
export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const loginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

// logout
export const logoutAction = () => ({
  type: "LOGOUT",
});

// register
export const registerStart = () => ({
  type: "REGISTER_START",
});
export const registerSuccess = (user) => ({
  type: "REGISTER_SUCCESS",
  payload: user,
});
export const registerFailure = (error) => ({
  type: "REGISTER_FAILURE",
  payload: error,
});

// toast trigger
export const unLockRedirectState = () => ({
  type: "REDIRECT_UNLOCK",
});

// uploadUserImg
export const uploadUserImgStart = () => ({
  type: "UPLOAD_IMG_START",
});
export const uploadUserImgSuccess = (user) => ({
  type: "UPLOAD_IMG_SUCCESS",
  payload: user,
});
export const uploadUserImgFailure = (error) => ({
  type: "UPLOAD_IMG_FAILURE",
  payload: error,
});

// send mail
export const sendMailStart = () => ({
  type: "SEND_MAIL_START",
});
export const sendMailSuccess = (res) => ({
  type: "SEND_MAIL_SUCCESS",
  payload: res,
});
export const sendMailFailure = (error) => ({
  type: "SEND_MAIL_FAILURE",
  payload: error,
});

// verified
export const verifyStart = () => ({
  type: "VERIFY_START",
});
export const verifySuccess = (res) => ({
  type: "VERIFY_SUCCESS",
  payload: res,
});
export const verifyFailure = (error) => ({
  type: "VERIFY_FAILURE",
  payload: error,
});

// add watchList
export const addToWatchListState = (movie) => ({
  type: "ADD_MOVIE_TO_WATCHLIST",
  payload: movie,
});

// remove watchList
export const removeToWatchListState = (id) => ({
  type: "REMOVE_MOVIE_TO_WATCHLIST",
  payload: id,
});

//clear watchlist
export const clearToWatchListState = () => ({
  type: "CLEAR_WATCHLIST",
});
