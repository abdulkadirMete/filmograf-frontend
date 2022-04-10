import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/authContext/AuthContext";
import { getRandomMovie } from "../../../../context/movieContext/apiCalls";
import { MovieContext } from "../../../../context/movieContext/MovieContext";
import { UtilContext } from "../../../../context/utilContext/UtilContext";
import { streamServices } from "../../../../data/item";
import { strings } from "../../../../data/text";
import {
  HeroButtonGroup,
  HeroHeading,
  HeroRandomButtom,
  HeroShowcaseWrapper,
  HeroSignUpButton,
  HeroText,
  StreamServicesContainer,
  StreamServicesItem,
} from "./ShowcaseStyles";

export const Showcase = () => {
  const { dispatch, randomMovieId, randomMovieLoading, randomMovieError } =
    useContext(MovieContext);

  const { user } = useContext(AuthContext);
  const { toggleShowRegister } = useContext(UtilContext);

  // get random movie
  const [clickRandom, setClickRandom] = useState(false);
  let navigate = useNavigate();

  const pickMovie = () => {
    getRandomMovie(dispatch);
    setClickRandom(true);
  };

  const navigateRegister = () => {
    toggleShowRegister(true);
    navigate("/auth");
  };

  useEffect(() => {
    if (randomMovieLoading || !clickRandom) return;
    navigate(`/movie/${randomMovieId}`);
    setClickRandom(false);
  }, [randomMovieId, clickRandom]);

  // handle error
  if (randomMovieError) {
    return;
  }
  return (
    <HeroShowcaseWrapper>
      <HeroHeading><span></span>{strings.heroHeading}</HeroHeading>
      <HeroText showcase={true} grey={true}>
        {strings.heroText}
      </HeroText>
      <StreamServicesContainer>
        {streamServices.map((item, index) => {
          return <StreamServicesItem key={index} src={item.path} />;
        })}
      </StreamServicesContainer>

      <HeroButtonGroup>
        <HeroRandomButtom onClick={() => pickMovie()}>
          {strings.getRandomMovie}
        </HeroRandomButtom>
        {!user && (
          <HeroSignUpButton onClick={() => navigateRegister()}>
            {strings.register}
          </HeroSignUpButton>
        )}
      </HeroButtonGroup>
    </HeroShowcaseWrapper>
  );
};
