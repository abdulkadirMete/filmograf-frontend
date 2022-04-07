import React from "react";
import { Link } from "react-router-dom";
import { strings } from "../../../../data/text";
import {
  MovieAlt,
  MovieAltText,
  MovieContainer,
  MovieImg,
  MovieInfo,
  MovieName,
} from "./SearchResultItemStyles";

export const SearchResultItem = ({
  _id,
  name,
  img,
  release,
  imdb,
  closeResults,
}) => {
  return (
    <Link to={`/movie/${_id}`} onClick={closeResults}>
      <MovieContainer>
        <MovieImg src={img} alt="result" />
        <MovieInfo>
          <MovieName>{name}</MovieName>
          <MovieAlt>
            <MovieAltText>
              <span className="head">{strings.searchResultYear}</span>
              {release}
            </MovieAltText>
            <MovieAltText>
              <span className="head">{strings.searchResultImdb}</span>
              {imdb !== 0 ? imdb : null}
            </MovieAltText>
          </MovieAlt>
        </MovieInfo>
      </MovieContainer>
    </Link>
  );
};
