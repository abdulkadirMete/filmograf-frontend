import Slider from "react-slick";
import styled from "styled-components";

export const HeroSlider = styled.div``;

// slider
export const HeroSliderWrapper = styled.div`
  position: absolute;
  width: 525px;
  height: 290px;
  right: 70px;
  top: 151px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 3px;

  @media screen and (max-width: 1268px) {
    right: 50%;
    transform: translateX(52.6%);
    top: 143px;
  }

  @media screen and (max-width: 768px) {
    top: 114px;

    width: 410px;
    height: 230px;
  }

  @media screen and (max-width: 568px) {
    top: 110px;
    width: 320px;
    height: 180px;
  }

  @media screen and (max-width: 468px) {
    top: 102px;
    width: 275px;
    height: 155px;
  }
`;

export const Caurousel = styled(Slider)`
  width: 100%;
  position: relative;

  .slick-slide {
    width: 100%;
  }

  .slick-arrow {
    z-index: 3;
    opacity: 0;
  }

  .slick-arrow.slick-prev {
    position: absolute;
    left: 10px;
  }

  .slick-arrow.slick-next {
    position: absolute;
    right: 10px;
    z-index: 3;
  }

  &:hover {
    .slick-arrow {
      opacity: 1;
    }
  }
`;

export const HeroSliderImage = styled.img`
  width: 900px;
  position: absolute;
  right: -105px;

  @media screen and (max-width: 1268px) {
    right: 50%;
    transform: translateX(50%);
  }

  @media screen and (max-width: 768px) {
    width: 700px;
  }

  @media screen and (max-width: 568px) {
    margin-top: 15px;
    width: 550px;
  }

  @media screen and (max-width: 468px) {
    width: 475px;
  }
`;
