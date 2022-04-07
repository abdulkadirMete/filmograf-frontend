import React, { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import uniqid from "uniqid";
import { setPopularMoviesPage } from "../../../../context/movieContext/apiCalls";
import { MovieContext } from "../../../../context/movieContext/MovieContext";
import { moviePerPage } from "../../../../data/options";
import { Loading } from "../../../../styles/globalStyles";
import { MovieItem } from "../../../movieItem/MovieItem";
import {
  SecondaryMovieListContainer,
  SecondaryMovieListHeading,
  SecondaryMovieListHeadingWrapper,
  SecondaryMovieListSection,
  SecondaryMovieListWrapper,
  SectionImageWithFilter,
} from "./SecondaryMovieListStyles";

export const SecondaryMovieList = ({
  movies,
  blue,
  title,
  background,
  infiniteScroll,
}) => {
  const { dispatch, popularMoviesPage: page } = useContext(MovieContext);

  const handleNextPage = () => {
    setPopularMoviesPage(page + 1, dispatch);
  };

  return (
    <SecondaryMovieListSection>
      {background && <SectionImageWithFilter />}
      <SecondaryMovieListContainer>
        <SecondaryMovieListHeadingWrapper>
          <SecondaryMovieListHeading blue={blue}>
            {title}
          </SecondaryMovieListHeading>
        </SecondaryMovieListHeadingWrapper>
        {infiniteScroll ? (
          <InfiniteScroll
            dataLength={page * moviePerPage}
            next={handleNextPage}
            hasMore={true}
            scrollThreshold={0.9}
            loader={<Loading />}
          >
            <SecondaryMovieListWrapper>
              {movies.map((movie) => {
                return <MovieItem key={uniqid()} {...movie}></MovieItem>;
              })}
            </SecondaryMovieListWrapper>
          </InfiniteScroll>
        ) : (
          <SecondaryMovieListWrapper>
            {movies.map((movie) => {
              return <MovieItem key={uniqid()} {...movie}></MovieItem>;
            })}
          </SecondaryMovieListWrapper>
        )}
      </SecondaryMovieListContainer>
    </SecondaryMovieListSection>
  );
};
