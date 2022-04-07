import React, { useContext, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../../context/authContext/AuthContext";
import { MovieContext } from "../../../../../context/movieContext/MovieContext";
import {
  getUserRate,
  putRate,
} from "../../../../../context/rateContext/apiCalls";
import { RateContext } from "../../../../../context/rateContext/RateContext";
import { reverseFade } from "../../../../../data/animation";
import { ratingOptions } from "../../../../../data/options";
import { strings } from "../../../../../data/text";
import {
  AnimationWrapper,
  LoadingDot,
} from "../../../../../styles/globalStyles";
import {
  Rate,
  RateButton,
  RatedGroup,
  RatedText,
  Rating,
  RatingContainer,
} from "./MovieRateStyles";

export const MovieRate = ({ avarageRate }) => {
  const {
    rate: dbRate,
    fetchRateLoading,
    putRateError,
    fetchRateError,
    dispatch,
  } = useContext(RateContext);

  // stars ui variables
  const [showStars, setShowStars] = useState(false);
  const [userRate, setUserRate] = useState(null);

  // rate object
  const { user } = useContext(AuthContext);
  const { singleMovie } = useContext(MovieContext);

  const handleRating = () => {
    if (user) {
      setShowStars(true);
    } else {
      toast.warn(strings.loginForRate);
    }
  };

  const ratingChanged = (newRating) => {
    setUserRate(newRating);
    toast(`${strings.yourRate} : ${newRating}`);
    putRate(
      { movieId: singleMovie._id, userId: user._id, rate: newRating },
      dispatch
    );
  };

  useEffect(() => {
    if (user) {
      getUserRate({ movieId: singleMovie._id, userId: user._id }, dispatch);
    }
  }, []);

  useEffect(() => {
    if (dbRate) {
      setUserRate(dbRate.rate);
    }
  }, [dbRate]);

  if (putRateError || fetchRateError) {
    // handleError
  }

  // loading
  if (fetchRateLoading) {
    return <LoadingDot />;
  }

  return (
    <RatingContainer>
      <RatedGroup>
        <RatedText>{strings.siteRate}</RatedText>
        <Rate>
          <AiFillStar />
          <RatedText>{avarageRate ? `${avarageRate}/10` : "?/10"}</RatedText>
        </Rate>
      </RatedGroup>

      {showStars && user ? (
        <AnimationWrapper
          variants={reverseFade}
          animate="animate"
          initial="initial"
        >
          <Rating
            {...ratingOptions}
            onChange={ratingChanged}
            value={userRate}
          />
        </AnimationWrapper>
      ) : (
        <RateButton onClick={handleRating}>
          {dbRate ? strings.updateRate : strings.rateIt}
        </RateButton>
      )}
    </RatingContainer>
  );
};
