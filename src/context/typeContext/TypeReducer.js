const reducer = (state, action) => {
  switch (action.type) {
    // types
    case "FETCH_TYPES_START":
      return { ...state, typesLoading: true };

    case "FETCH_TYPES_SUCCESS":
      return { ...state, typesLoading: false, types: action.payload };

    case "FETCH_TYPES_FAIL":
      return { ...state, typesLoading: false, typesError: action.payload };

    default:
      throw new Error(`no mathching "${action.type}" action type`);
  }
};
export default reducer;
