import axios from "axios";
import { baseApiUrl } from "../../data/options";
import {
  putRateFail,
  putRateStart,
  putRateSuccess,
  getRateStart,
  getRateFail,
  getRateSuccess,
  resetRateState,
} from "./RateAction";

// put rate
export const putRate = async (rateObject, dispatch) => {
  dispatch(putRateStart());
  try {
    const res = await axios.put(`${baseApiUrl}/api/tools/rate`, rateObject);
    dispatch(putRateSuccess(res.data));
  } catch (error) {
    dispatch(putRateFail(error));
  }
};

// get user rate
export const getUserRate = async (rateObject, dispatch) => {
  dispatch(getRateStart());
  try {
    const res = await axios.post(`${baseApiUrl}/api/tools/rate`, rateObject);
    dispatch(getRateSuccess(res.data));
  } catch (error) {
    dispatch(getRateFail(error));
  }
};

// reset rate
export const resetRate = (dispatch) => dispatch(resetRateState());
