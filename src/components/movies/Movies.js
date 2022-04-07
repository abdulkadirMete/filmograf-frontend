import React, { useContext, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { Filters } from "../filters/Filters";
import { MovieContainer, MovieSection, Showcase } from "./MoviesStyles";
import { SectionDivider } from "./subComponents/divider/SectionDivider";
import { MovieList } from "./subComponents/movieList/MovieList";
import { Paginate } from "./subComponents/paginate/Paginate";

export const Movies = () => {
  const { isLoading } = useContext(MovieContext);
  const scrollRef = useRef(null);

  return (
    <MovieSection>
      <SectionDivider scrollRef={scrollRef} />
      <MovieContainer>
        <Showcase>
          <MovieList />
          {!isLoading && <Paginate scrollRef={scrollRef} />}
        </Showcase>
        <Filters />
      </MovieContainer>
    </MovieSection>
  );
};
