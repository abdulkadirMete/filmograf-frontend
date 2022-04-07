import AuthReducer from "./AuthReducer";
import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  watchList: JSON.parse(localStorage.getItem("watchList")) || [],
  loginLoading: false,
  error: null,
  registerLoading: false,
  registerError: null,
  redirectLock: true,
  uplaodImageLoading: false,
  uploadImageError: null,
  uploadImageSuccess: false,
  sendMailLoading: false,
  sendMailError: null,
  sendMailSuccess: false,
  verifyLoading: true,
  verifyError: null,
  verifySuccess: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // save user to local storage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  // save movie to watchList
  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
  }, [state.watchList]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
