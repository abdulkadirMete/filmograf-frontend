// search 
export const searchStart = () => ({
  type: "SEARCH_START",
});
export const searchSuccess = (types) => ({
  type: "SEARCH_SUCCESS",
  payload: types,
});
export const searchFail = (error) => ({
  type: "SEARCH_FAIL",
  payload: error,
});

// clear
export const clearResultsState = () => ({
  type: "CLEAR_RESULTS",
});

// set phrase
// export const searchPhraseState = (phrase) => ({
//   type: "SET_PHRASE",
//   payload: phrase,
// });
