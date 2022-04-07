import React, { useState } from "react";
import { strings } from "../../../../data/text";
import {
  MovieImdb,
  MovieImdbGroup,
  MovieImdbHeading,
  MovieName,
  MovieStatistics,
  MovieViewGroup,
  MovieViewText,
  TopInfo,
} from "./MovieTopInfoStyles";
import { AiFillEye } from "react-icons/ai";

export const MovieTopInfo = ({ name, imdb, view }) => {
  return (
    <TopInfo>
      <MovieName>{name}</MovieName>
      <MovieStatistics>
        <MovieViewGroup>
          <AiFillEye />
          <MovieViewText>{view}</MovieViewText>
        </MovieViewGroup>
        <MovieImdbGroup>
          <MovieImdbHeading>{strings.imdb}</MovieImdbHeading>
          <MovieImdb>{imdb}</MovieImdb>
        </MovieImdbGroup>
      </MovieStatistics>
    </TopInfo>
  );
};
