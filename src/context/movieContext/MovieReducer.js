const reducer = (state, action) => {
  switch (action.type) {
    // movies
    case "FETCH_MOVIES_START":
      return { ...state, isLoading: true };

    case "FETCH_MOVIES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        movies: action.payload.movies,
        count: action.payload.count,
        error: null,
      };

    case "FETCH_MOVIES_FAIL":
      return { ...state, isLoading: false, error: action.payload };

    // merge old movies and new movies for infinite scroll
    case "FETCH_POPULAR_MOVIES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        popularMovies: [...state.popularMovies, ...action.payload.movies],
      };

    // singleMovie
    case "FETCH_MOVIE_START":
      return { ...state, singleMovieLoading: true };

    case "FETCH_MOVIE_SUCCESS":
      return {
        ...state,
        singleMovieLoading: false,
        singleMovie: action.payload,
        singleMovieError: null,
      };

    case "FETCH_MOVIE_FAIL":
      return {
        ...state,
        singleMovieLoading: false,
        singleMovieError: action.payload,
      };

    // slider movies
    case "FETCH_SLIDER_START":
      return { ...state, sliderLoading: true };

    case "FETCH_SLIDER_SUCCESS":
      return {
        ...state,
        sliderLoading: false,
        sliderMovies: action.payload,
      };

    case "FETCH_SLIDER_FAIL":
      return { ...state, sliderLoading: false, sliderError: action.payload };

    // random movies
    case "RANDOM_MOVIE_START":
      return { ...state, randomMovieLoading: true };

    case "RANDOM_MOVIE_SUCCESS":
      return {
        ...state,
        randomMovieLoading: false,
        randomMovieId: action.payload,
      };

    case "RANDOM_MOVIE_FAIL":
      return {
        ...state,
        randomMovieLoading: false,
        randomMovieError: action.payload,
      };

    // set page
    case "SET_POPULAR_PAGE":
      return { ...state, popularMoviesPage: action.payload };

    // has robot filter
    case "SET_ROBOT":
      return { ...state, hasRobotFilter: action.payload };

    // has robot filter
    case "SET_ROBOT_FILTER_VALUES":
      return { ...state, robotFilterValues: action.payload };

    // increase view
    case "INCREASE_VIEW_START":
      return { ...state, increaseViewLoading: true };

    case "INCREASE_VIEW_SUCCESS":
      return {
        ...state,
        increaseViewLoading: false,
        increaseViewError: null,
        increaseViewSuccess: true,
      };

    case "INCREASE_VIEW_FAIL":
      return {
        ...state,
        increaseViewLoading: false,
        increaseViewError: action.payload,
      };

    default:
      throw new Error(`no mathching "${action.type}" action type`);
  }
};
export default reducer;
