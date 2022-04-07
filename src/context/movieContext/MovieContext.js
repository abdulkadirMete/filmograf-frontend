import MovieReducer from "./MovieReducer";
import { createContext, useReducer } from "react";

const initialState = {
  isLoading: false,
  count: 0,
  movies: [],
  error: null,
  // popular movies
  popularMovies: [],
  popularMoviesPage: 1,

  // filter items
  hasRobotFilter: false,
  robotFilterValues: { type: "", release: "", imdb: "" },

  // end of filter items
  sliderLoading: false,
  sliderMovies: [],
  sliderError: null,
  singleMovie: {},
  singleMovieLoading: false,
  singleMovieError: false,
  randomMovieId: null,
  randomMovieLoading: false,
  randomMovieError: false,
  increaseViewLoading: false,
  increaseViewSuccess: false,
  increaseViewError: null,
};

export const MovieContext = createContext(initialState);

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, initialState);

  return (
    <MovieContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
