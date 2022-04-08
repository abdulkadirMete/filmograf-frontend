import axios from "axios";
import { baseApiUrl } from "../../data/options";
import {
  fetchTypesFail,
  fetchTypesStart,
  fetchTypesSuccess,
} from "./TypeAction";

// get types
export const getTypes = async (dispatch) => {
  dispatch(fetchTypesStart());
  try {
    const res = await axios.get(`${baseApiUrl}/api/types`);
    dispatch(fetchTypesSuccess(res.data));
  } catch (error) {
    dispatch(fetchTypesFail(error));
  }
};
