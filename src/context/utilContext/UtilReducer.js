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

const reducer = (state, action) => {
  switch (action.type) {
    // types
    case TOGGLE_ASIDE:
      return { ...state, showAside: action.payload };

    case TOGGLE_SUB:
      return { ...state, showSubmenu: action.payload };

    case TOGGLE_CONTACT:
      return { ...state, showContact: action.payload };

    case TOGGLE_NAV:
      return { ...state, showNav: action.payload };

    case TOGGLE_REGISTER:
      return { ...state, showRegister: action.payload };

    // send mail
    case SEND_MAIL_SUCCESS:
      return {
        ...state,
        sendMailSuccess: true,
        sendMailError: null,
        sendMailLoading: false,
      };

    case SEND_MAIL_FAIL:
      return {
        ...state,
        sendMailFail: action.payload,
        sendMailSuccess: false,
        sendMailLoading: false,
      };

    case SEND_MAIL_START:
      return { ...state, sendMailLoading: true };

    default:
      throw new Error(`no mathching "${action.type}" action type`);
  }
};
export default reducer;
