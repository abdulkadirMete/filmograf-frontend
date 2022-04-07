import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getSliderMovies } from "../../../../context/movieContext/apiCalls";
import { MovieContext } from "../../../../context/movieContext/MovieContext";
import { slidePerSlider, sliderSettings } from "../../../../data/options";
import { strings } from "../../../../data/text";
import { LoadingDot } from "../../../../styles/globalStyles";
import { SliderMovieItem } from "../sliderMovieItem/SliderMovieItem";
import {
  Caurousel,
  HeroSlider,
  HeroSliderImage,
  HeroSliderWrapper,
} from "./SliderStyles";

export const Slider = () => {
  const { sliderMovies, dispatch, sliderError, sliderLoading } =
    useContext(MovieContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (!sliderMovies.length > 0) getSliderMovies(dispatch);
  }, []);

  if (sliderError) {
    toast.error(strings.defaultError);
    navigate("/notfound");
  }

  return (
    <HeroSlider>
      <HeroSliderImage src="/images/tv.webp"></HeroSliderImage>
      <HeroSliderWrapper>
        {sliderLoading ? (
          <LoadingDot secondary={true} />
        ) : (
          <>
            <Caurousel {...sliderSettings}>
              {sliderMovies?.slice(0, slidePerSlider).map((movie) => {
                return <SliderMovieItem key={movie._id} {...movie} />;
              })}
            </Caurousel>
            <Caurousel rtl={true} {...sliderSettings}>
              {sliderMovies?.slice(-slidePerSlider).map((movie) => {
                return <SliderMovieItem key={movie._id} {...movie} />;
              })}
            </Caurousel>
          </>
        )}
      </HeroSliderWrapper>
    </HeroSlider>
  );
};
