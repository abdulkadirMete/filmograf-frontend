const reducer = (state, action) => {
  switch (action.type) {
    // search
    case "SEARCH_START":
      return { ...state, searchLoading: true };

    case "SEARCH_SUCCESS":
      return { ...state, searchLoading: false, searchResults: action.payload };

    case "SEARCH_FAIL":
      return { ...state, searchLoading: false, searchError: action.payload };

    // clear search results
    case "CLEAR_RESULTS":
      return { ...state, searchLoading: false, searchResults: [] };

    default:
      throw new Error(`no mathching "${action.type}" action type`);
  }
};
export default reducer;
