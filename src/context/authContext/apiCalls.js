import axios from "axios";
import {
  addToWatchListState,
  clearToWatchListState,
  loginFailure,
  loginStart,
  loginSuccess,
  logoutAction,
  registerFailure,
  registerStart,
  registerSuccess,
  removeToWatchListState,
  sendMailFailure,
  sendMailStart,
  sendMailSuccess,
  unLockRedirectState,
  uploadUserImgFailure,
  uploadUserImgStart,
  uploadUserImgSuccess,
  verifyFailure,
  verifyStart,
  verifySuccess,
} from "./AuthActions";

// login
export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err.response.data.message || err.message));
  }
};

// logout
export const logout = (dispatch) => {
  dispatch(logoutAction());
};

// register
export const registerUser = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure(err.response.data.message || err.message));
  }
};

// redirect lock
export const unLockRedirect = (dispatch) => {
  dispatch(unLockRedirectState());
};

// upload user image
export const uploadUserImg = async (imgData, dispatch) => {
  dispatch(uploadUserImgStart());
  const token = JSON.parse(localStorage.getItem("user")).accessToken;
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("img", imgData);
    const res = await axios.post("users/uplaod/image", bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
        token: "Bearer " + token,
      },
    });
    const user = { ...res.data, accessToken: token };
    dispatch(uploadUserImgSuccess(user));
  } catch (err) {
    dispatch(uploadUserImgFailure(err.response.data.message || err.message));
  }
};

// auth send email
export const sendVerificationEmail = async (userId, dispatch) => {
  dispatch(sendMailStart());
  try {
    const res = await axios.get(`auth/verify/${userId}`);
    dispatch(sendMailSuccess(res.data));
  } catch (err) {
    dispatch(sendMailFailure(err.response.data.message || err.message));
  }
};

// verify
export const verifyUser = async (userId, token, dispatch) => {
  console.log(`auth/verify/${userId}/${token}`);
  dispatch(verifyStart());
  try {
    const res = await axios.post(`/auth/verify/`, { userId, token });
    dispatch(verifySuccess(res.data.success));
  } catch (error) {
    dispatch(verifyFailure(error));
    console.log(error);
  }
};

// add watch list
export const addToWatchList = (movie, dispatch) => {
  dispatch(addToWatchListState(movie));
};

// remove watch list
export const removeToWatchList = (id, dispatch) => {
  dispatch(removeToWatchListState(id));
};

// clear watchlist

export const clearWatchList = (dispatch) => {
  dispatch(clearToWatchListState());
};
