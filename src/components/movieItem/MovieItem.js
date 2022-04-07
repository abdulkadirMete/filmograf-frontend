import React from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { defaultMoviePhoto } from "../../data/options";
import {
  MovieContainer,
  MovieImdb,
  MovieImdbContainer,
  MovieImg,
  MovieInfo,
  MovieInnerInfo,
  MovieName,
  MovieRelease,
} from "./MovieItemStyles";

export const MovieItem = ({ _id, img, name, release, imdb }) => {
  return (
    <Link to={`/movie/${_id}`}>
      <MovieContainer>
        <Tilt>
          <MovieImg src={img || defaultMoviePhoto} alt={name} />
        </Tilt>
        <MovieInfo>
          <MovieName>{name?.split("-")?.[0]}</MovieName>
          <MovieInnerInfo>
            <MovieRelease>{release}</MovieRelease>
            <MovieImdbContainer>
              <MovieImdb>{imdb}</MovieImdb>
            </MovieImdbContainer>
          </MovieInnerInfo>
        </MovieInfo>
      </MovieContainer>
    </Link>
  );
};
