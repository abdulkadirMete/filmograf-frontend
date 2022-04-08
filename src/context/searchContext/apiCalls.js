import axios from "axios";
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
      `${process.env.REACT_APP_BASE_URL}/movies/filter/search?phrase=${phrase ? phrase : ""}`
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
