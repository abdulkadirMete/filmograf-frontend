import axios from "axios";
import { createContext, useReducer, useRef } from "react";
import {
  SEND_MAIL_FAIL,
  SEND_MAIL_START,
  SEND_MAIL_SUCCESS,
  TOGGLE_ASIDE,
  TOGGLE_CONTACT,
  TOGGLE_NAV,
  TOGGLE_REGISTER,
  TOGGLE_SUB,
} from "./UtilActions";
import UtilReducer from "./UtilReducer";

const initialState = {
  showAside: false,
  showSubmenu: false,
  showContact: false,
  showRegister: false,
  showNav: true,
  sendMailError: null,
  sendMailSuccess: false,
  sendMailLoading: false,
};

export const UtilContext = createContext(initialState);

export const UtilContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UtilReducer, initialState);

  //   toggle register
  const toggleShowRegister = (show) => {
    dispatch({ type: TOGGLE_REGISTER, payload: show });
  };

  //   toggle aside
  const toggleAside = (show) => {
    dispatch({ type: TOGGLE_ASIDE, payload: show });
  };

  //   toggle submenu
  const toggleSubmenu = (show) => {
    dispatch({ type: TOGGLE_SUB, payload: show });
  };

  //   toggle contact
  const toggleContact = (show) => {
    dispatch({ type: TOGGLE_CONTACT, payload: show });
  };

  //   toggle navbar visibility
  const toggleNav = (show) => {
    dispatch({ type: TOGGLE_NAV, payload: show });
  };

  // send mail
  const sendMail = async (message) => {
    dispatch({ type: SEND_MAIL_START });
    try {
      const res = await axios.post("contact", message);
      dispatch({ type: SEND_MAIL_SUCCESS });
    } catch (err) {
      dispatch({
        type: SEND_MAIL_FAIL,
        paylaod: err.response.data.message || err.message,
      });
    }
  };

  return (
    <UtilContext.Provider
      value={{
        ...state,
        toggleAside,
        toggleSubmenu,
        toggleContact,
        toggleNav,
        toggleShowRegister,
        sendMail,
      }}
    >
      {children}
    </UtilContext.Provider>
  );
};
