import React, { useContext, useRef } from "react";
import { useInView } from "react-hook-inview";
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

  // check is need render movie list
  const [renderRef, isVisible] = useInView({
    threshold: 0,
    unobserveOnEnter: true,
  });

  console.log(isVisible);
  return (
    <MovieSection ref={renderRef}>
      <SectionDivider scrollRef={scrollRef} />
      <MovieContainer>
        <Showcase>
          {isVisible && <MovieList />}
          {!isLoading && <Paginate scrollRef={scrollRef} />}
        </Showcase>
        <Filters />
      </MovieContainer>
    </MovieSection>
  );
};
