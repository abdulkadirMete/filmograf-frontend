// movies
export const fetchMoviesStart = () => ({
  type: "FETCH_MOVIES_START",
});
export const fetchMoviesSuccess = (movies, count) => ({
  type: "FETCH_MOVIES_SUCCESS",
  payload: { movies, count },
});
export const fetchMoviesFail = (error) => ({
  type: "FETCH_MOVIES_FAIL",
  payload: error,
});

// single movie
export const fetchMovieStart = () => ({
  type: "FETCH_MOVIE_START",
});
export const fetchMovieSuccess = (movie) => ({
  type: "FETCH_MOVIE_SUCCESS",
  payload: movie,
});
export const fetchMovieFail = (error) => ({
  type: "FETCH_MOVIE_FAIL",
  payload: error,
});

// random movie
export const fetchRandomStart = () => ({
  type: "RANDOM_MOVIE_START",
});
export const fetchRandomSuccess = (id) => ({
  type: "RANDOM_MOVIE_SUCCESS",
  payload: id,
});
export const fetchRandomFail = (error) => ({
  type: "RANDOM_MOVIE_FAIL",
  payload: error,
});

// slider movies
export const fetchSliderStart = () => ({
  type: "FETCH_SLIDER_START",
});
export const fetchSliderSuccess = (movies) => ({
  type: "FETCH_SLIDER_SUCCESS",
  payload: movies,
});
export const fetchSliderFail = (error) => ({
  type: "FETCH_SLIDER_FAIL",
  payload: error,
});

// count
export const fetchCount = (count) => ({
  type: "FETCH_MOVIES_COUNT",
  payload: count,
});

// has robot query
export const setRobotFilterState = (filter) => ({
  type: "SET_ROBOT",
  payload: filter,
});

// set popular moves  page state
export const setPopularMoviesPageState = (page) => ({
  type: "SET_POPULAR_PAGE",
  payload: page,
});

// fetch popular movie success
export const fetchPopularMoviesSuccess = (movies, count) => ({
  type: "FETCH_POPULAR_MOVIES_SUCCESS",
  payload: { movies, count },
});

// set robot filter values
export const setRobotFilterValuesState = (values) => ({
  type: "SET_ROBOT_FILTER_VALUES",
  payload: values,
});

// increase view
export const increaseViewStart = () => ({
  type: "INCREASE_VIEW_START",
});
export const increaseViewSuccess = () => ({
  type: "INCREASE_VIEW_SUCCESS",
});
export const increaseViewFail = (error) => ({
  type: "INCREASE_VIEW_FAIL",
  payload: error,
});
