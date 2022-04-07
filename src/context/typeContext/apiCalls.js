import axios from "axios";
import {
  fetchTypesFail,
  fetchTypesStart,
  fetchTypesSuccess,
} from "./TypeAction";

// get types
export const getTypes = async (dispatch) => {
  dispatch(fetchTypesStart());
  try {
    const res = await axios.get("/types");
    dispatch(fetchTypesSuccess(res.data));
  } catch (error) {
    dispatch(fetchTypesFail(error));
  }
};
