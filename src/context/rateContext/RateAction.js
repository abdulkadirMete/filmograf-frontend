// put rate
export const putRateStart = () => ({
  type: "PUT_RATE_START",
});
export const putRateSuccess = (rate) => ({
  type: "PUT_RATE_SUCCESS",
  payload: rate,
});
export const putRateFail = (error) => ({
  type: "PUT_RATE_FAIL",
  payload: error,
});

// get rate
export const getRateStart = () => ({
  type: "FETCH_RATE_START",
});
export const getRateSuccess = (rate) => ({
  type: "FETCH_RATE_SUCCESS",
  payload: rate,
});
export const getRateFail = (error) => ({
  type: "FETCH_RATE_FAIL",
  payload: error,
});

// reset db rate

export const resetRateState = () => ({
  type: "RESET_RATE",
});
