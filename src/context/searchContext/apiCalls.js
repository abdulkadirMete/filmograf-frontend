import axios from "axios";
import { baseApiUrl } from "../../data/options";
import {
  clearResultsState,
  searchFail,
  searchPhraseState,
  searchStart,
  searchSuccess,
} from "./SearchAction";

// do a search
export const searchMovie = async (phrase, dispatch) => {
  dispatch(searchStart());
  try {
    const res = await axios.get(
      `${baseApiUrl}/api/movies/filter/search?phrase=${phrase ? phrase : ""}`
    );
    dispatch(searchSuccess(res.data.movies));
  } catch (error) {
    dispatch(searchFail(error));
  }
};

// clear results
export const clearResults = (dispatch) => {
  dispatch(clearResultsState());
};

// set phrase
// export const setSearchPhrase = (phrase, dispatch) => {
//   dispatch(searchPhraseState(phrase));
// };
