import React, { useContext, useEffect } from "react";
import { SecondaryMovieList } from "../components/movies/subComponents/secondaryMovieList/SecondaryMovieList";
import { getPopularMovies } from "../context/movieContext/apiCalls";
import { MovieContext } from "../context/movieContext/MovieContext";

export const PopularMovies = () => {
  const {
    popularMovies,
    isLoading,
    error,
    popularMoviesPage,
    count,
    dispatch,
  } = useContext(MovieContext);

  // get popular movies
  useEffect(() => {
    if (isLoading) return;
    getPopularMovies(popularMoviesPage, dispatch);
  }, [popularMoviesPage]);

  if (error) {
    // handle errors
  }
  return (
    <SecondaryMovieList
      movies={popularMovies}
      background={true}
      count={count}
      title="Popüler Filmler"
      infiniteScroll={true}
    />
  );
};
