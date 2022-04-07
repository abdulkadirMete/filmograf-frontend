const reducer = (state, action) => {
  switch (action.type) {
    // rate
    case "PUT_RATE_START":
      return { ...state, putRateLoading: true };

    case "PUT_RATE_SUCCESS":
      return {
        ...state,
        putRateLoading: false,
        putRateMessage: action.payload,
      };

    case "PUT_RATE_FAIL":
      return { ...state, putRateLoading: false, putRateError: action.payload };

    // rate
    case "FETCH_RATE_START":
      return { ...state, fetchRateLoading: true };

    case "FETCH_RATE_SUCCESS":
      return { ...state, fetchRateLoading: false, rate: action.payload };

    case "FETCH_RATE_FAIL":
      return {
        ...state,
        fetchRateLoading: false,
        fetchRateError: action.payload,
      };

    case "RESET_RATE":
      return {
        ...state,
        rate: null,
      };

    default:
      throw new Error(`no mathching "${action.type}" action type`);
  }
};
export default reducer;
