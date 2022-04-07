import React, { useContext, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import uniqid from "uniqid";
import {
  applyRobotFilter,
  getMovies,
  getReleaseOfMovies,
  getTypesOfMovies,
} from "../../../../context/movieContext/apiCalls";
import { MovieContext } from "../../../../context/movieContext/MovieContext";
import { Loading } from "../../../../styles/globalStyles";
import { MovieItem } from "../../../movieItem/MovieItem";
import { MovieListWrapper } from "./MovieListStyles";

export const MovieList = () => {
  const {
    movies,
    isLoading,
    error,
    dispatch,
    hasRobotFilter,
    robotFilterValues,
  } = useContext(MovieContext);

  const { page, release, type, imdb } = useParams();

  // get movies
  useEffect(() => {
    if (isLoading) return;

    if (hasRobotFilter) {
      applyRobotFilter(
        robotFilterValues.type,
        robotFilterValues.release,
        robotFilterValues.imdb,
        page,
        dispatch
      );
    } else if (type) {
      getTypesOfMovies(type, page, dispatch);
    } else if (release) {
      getReleaseOfMovies(release, page, dispatch);
    } else {
      getMovies(page, dispatch);
    }
  }, [page, release, type, imdb, robotFilterValues]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    // handle errors
  }

  return (
    <MovieListWrapper>
      {movies.map((movie) => {
        return <MovieItem key={uniqid()} {...movie}></MovieItem>;
      })}
    </MovieListWrapper>
  );
};
