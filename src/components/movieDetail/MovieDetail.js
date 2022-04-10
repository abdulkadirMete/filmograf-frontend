import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getSingleMovie,
  increaseView,
} from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { UtilContext } from "../../context/utilContext/UtilContext";
import { Loading, PageLoadingWrapper, Strip } from "../../styles/globalStyles";
import { DetailContainer, DetailSection, MovieInfo } from "./MoviDetailStyles";
import { Comment } from "./subComponents/comment/Comment";
import { MovieBottomInfo } from "./subComponents/movieBottomInfo/MovieBottomInfo";
import { MovieImageGroup } from "./subComponents/movieImageGroup/MovieImageGroup";
import { MovieTopInfo } from "./subComponents/movieTopInfo/MovieTopInfo";
import { PlayButton } from "./subComponents/play/PlayButton";

export const MovieDetail = () => {
  // get single movie

  const { id } = useParams();

  const { singleMovieLoading, singleMovie, singleMovieError, dispatch } =
    useContext(MovieContext);

  const { toggleNav, showAside } = useContext(UtilContext);

  const {
    cast,
    categorys,
    desc,
    director,
    imdb,
    img,
    langs,
    name,
    release,
    rate,
    type,
    view,
    video,
  } = singleMovie;

  useEffect(() => {
    if (singleMovieLoading) return;
    toggleNav(true);
    getSingleMovie(id, dispatch);
  }, [id]);

  // handle movie view change

  const increaseMovieView = () => {
    increaseView(id, dispatch);
  };

  if (singleMovieLoading) {
    return (
      <PageLoadingWrapper>
        <Loading />
      </PageLoadingWrapper>
    );
  }

  if (singleMovieError) {
    // handle error
  }

  return (
    <>
      <DetailSection showAside={showAside}>
        <DetailContainer>
          <MovieImageGroup
            _id={id}
            name={name}
            img={img}
            avarageRate={rate}
            imdb={imdb}
            release={release}
          />

          <MovieInfo>
            <MovieTopInfo imdb={imdb} name={name} view={view}></MovieTopInfo>
            <MovieBottomInfo
              cast={cast}
              categorys={categorys}
              director={director}
              langs={langs}
              type={type}
              desc={desc?.desc}
            ></MovieBottomInfo>
            <Strip />
            <Comment />
          </MovieInfo>
        </DetailContainer>
      </DetailSection>
      <PlayButton increaseMovieView={increaseMovieView} video={video} />
    </>
  );
};
