const AuthReducer = (state, action) => {
  switch (action.type) {
    // login
    case "LOGIN_START":
      return {
        ...state,
        user: null,
        loginLoading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loginLoading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        user: null,
        loginLoading: false,
        error: action.payload,
      };
    // logout
    case "LOGOUT":
      return {
        ...state,
        user: null,
        loginLoading: false,
        error: null,
        redirectLock: false,
      };

    // register
    case "REGISTER_START":
      return {
        ...state,
        user: null,
        registerLoading: true,
        registerError: null,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        registerLoading: false,
        registerError: null,
      };
    case "REGISTER_FAILURE":
      return {
        ...state,
        user: null,
        registerLoading: false,
        registerError: action.payload,
      };

    // redirect lock
    case "REDIRECT_UNLOCK":
      return {
        ...state,
        redirectLock: true,
      };

    // upload user img
    case "UPLOAD_IMG_START":
      return {
        ...state,
        uplaodImageLoading: true,
        uploadImageError: null,
        uploadImageSuccess: false,
      };
    case "UPLOAD_IMG_SUCCESS":
      return {
        ...state,
        user: action.payload,
        uplaodImageLoading: false,
        uploadImageError: null,
        uploadImageSuccess: true,
      };
    case "UPLOAD_IMG_FAILURE":
      return {
        ...state,
        uplaodImageLoading: false,
        uploadImageError: action.payload,
        uploadImageSuccess: false,
      };

    // send mail
    case "SEND_MAIL_START":
      return {
        ...state,
        sendMailLoading: true,
        sendMailError: null,
        sendMailSuccess: false,
      };
    case "SEND_MAIL_SUCCESS":
      return {
        ...state,
        sendMailLoading: false,
        sendMailError: null,
        sendMailSuccess: true,
      };
    case "SEND_MAIL_FAILURE":
      return {
        ...state,
        sendMailLoading: false,
        sendMailError: action.payload,
        sendMailSuccess: false,
      };

    // verified
    case "VERIFY_START":
      return {
        ...state,
        verifyLoading: true,
        verifyError: null,
        verifySuccess: false,
      };
    case "VERIFY_SUCCESS":
      return {
        ...state,
        verifyLoading: false,
        verifyError: null,
        verifySuccess: action.payload,
      };
    case "VERIFY_FAILURE":
      return {
        ...state,
        verifyLoading: false,
        verifyError: action.payload,
        verifySuccess: false,
      };

    // watchList
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchList: [...state.watchList, action.payload],
      };

    // watchList
    case "REMOVE_MOVIE_TO_WATCHLIST":
      let tmpList = state.watchList.filter(
        (movie) => movie._id !== action.payload
      );
      return {
        ...state,
        watchList: tmpList,
      };

    // watchList
    case "CLEAR_WATCHLIST":
      return {
        ...state,
        watchList: [],
      };

    default:
      throw new Error(`no mathching "${action.type}" action type`);
  }
};

export default AuthReducer;
