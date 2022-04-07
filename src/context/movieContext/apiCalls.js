import axios from "axios";
import {
  fetchMovieFail,
  fetchMoviesFail,
  fetchMoviesStart,
  fetchMoviesSuccess,
  fetchMovieStart,
  fetchMovieSuccess,
  fetchPopularMoviesSuccess,
  fetchRandomFail,
  fetchRandomStart,
  fetchRandomSuccess,
  fetchSliderFail,
  fetchSliderStart,
  fetchSliderSuccess,
  increaseViewFail,
  increaseViewStart,
  increaseViewSuccess,
  setPopularMoviesPageState,
  setRobotFilterState,
  setRobotFilterValuesState,
} from "./MovieActions";

// url
export const getMoviesFromUrl = async (url, dispatch) => {
  dispatch(fetchMoviesStart());
  try {
    const res = await axios.get(url);
    dispatch(fetchMoviesSuccess(res.data.movies, res.data.count));
  } catch (error) {
    dispatch(fetchMoviesFail(error));
  }
};

// get movies
export const getMovies = async (page, dispatch) => {
  const url = `/movies/${page ? page : 1}`;
  getMoviesFromUrl(url, dispatch);
};

// get popular
export const getPopularMovies = async (page, dispatch) => {
  dispatch(fetchMoviesStart());
  try {
    const res = await axios.get(`movies/popular/${page ? page : 1}`);
    dispatch(fetchPopularMoviesSuccess(res.data.movies, res.data.count));
  } catch (error) {
    dispatch(fetchMoviesFail(error));
  }
};

// get release of movie
export const getReleaseOfMovies = async (release, page, dispatch) => {
  const url = `/filter/release/${release}/${page ? page : 1}`;
  getMoviesFromUrl(url, dispatch);
};

// applyRobotFilter
export const applyRobotFilter = async (type, release, imdb, page, dispatch) => {
  const url = `/filter/robot/${page ? page : 1}?type=${
    type ? type : ""
  }&release=${release ? release : ""}&imdb=${imdb ? imdb : ""}`;

  getMoviesFromUrl(url, dispatch);
};

// get type of movie
export const getTypesOfMovies = async (type, page, dispatch) => {
  const url = `/types/${type}/${page ? page : 1}`;
  getMoviesFromUrl(url, dispatch);
};

// get slider movie
export const getSliderMovies = async (dispatch) => {
  dispatch(fetchSliderStart());
  try {
    const res = await axios.get("/movies/showcase/slider");
    dispatch(fetchSliderSuccess(res.data.movies));
  } catch (error) {
    dispatch(fetchSliderFail(error));
  }
};

// get single movie
export const getSingleMovie = async (id, dispatch) => {
  dispatch(fetchMovieStart());
  const req1 = axios.get(`/movies/movie/${id}`);
  const req2 = axios.get(`/movies/movie/rate/${id}`);
  axios
    .all([req1, req2])
    .then(
      axios.spread((...responses) => {
        const movie = responses[0];
        const rate = responses[1];
        const singleMovie = { ...movie.data, rate: rate.data };
        dispatch(fetchMovieSuccess(singleMovie));
      })
    )
    .catch((err) => {
      dispatch(fetchMovieFail(err.response.data.message || err.message));
    });
};

// get random movie id
export const getRandomMovie = async (dispatch) => {
  dispatch(fetchRandomStart());
  try {
    const res = await axios.get(`/movies/pick/random`);
    dispatch(fetchRandomSuccess(res.data));
  } catch (error) {
    dispatch(fetchRandomFail(error));
  }
};

// query
export const setRobotFilter = (hasQuery, dispatch) => {
  dispatch(setRobotFilterState(hasQuery));
};

// set popular movies page
export const setPopularMoviesPage = (page, dispatch) => {
  dispatch(setPopularMoviesPageState(page));
};

// set robot filter values
export const setRobotFilterValues = (values, dispatch) => {
  dispatch(setRobotFilterValuesState(values));
};

// increase view count
export const increaseView = async (movieId, dispatch) => {
  dispatch(increaseViewStart());
  try {
    await axios.get(`/movies/movie/view/${movieId}`);
    dispatch(increaseViewSuccess());
  } catch (error) {
    dispatch(increaseViewFail(error));
  }
};
