import React from "react";
import { Link } from "react-router-dom";
import {
  MovieContainer,
  MovieImg
} from "./SliderMovieItemStyles";

export const SliderMovieItem = ({ _id, name, img }) => {
  return (
    <Link to={`/movie/${_id}`}>
      <MovieContainer>
        <MovieImg src={img} alt={name} />
      </MovieContainer>
    </Link>
  );
};
