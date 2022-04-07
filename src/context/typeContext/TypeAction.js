// types
export const fetchTypesStart = () => ({
  type: "FETCH_TYPES_START",
});
export const fetchTypesSuccess = (types) => ({
  type: "FETCH_TYPES_SUCCESS",
  payload: types,
});
export const fetchTypesFail = (error) => ({
  type: "FETCH_TYPES_FAIL",
  payload: error,
});
