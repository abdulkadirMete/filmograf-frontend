import Slider from "react-slick";
import styled from "styled-components";
import { LoadingDot } from "../../../../styles/globalStyles";

export const HeroSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 100%;
  padding-bottom: 70px;

  @media screen and (max-width: 1268px) {
    justify-content: center;
    padding-bottom: 0px;
  }
`;

export const HeroSlideGroup = styled.div`
  position: relative;
`;

export const SliderLoading = styled(LoadingDot)`
  position: absolute;
  top: calc(50% - 1rem);
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeroSliderWrapper = styled.div`
  z-index: 3;
  position: absolute;
  left: 8.5px;
  right: 7.5px;
  top: 10.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 3px;

  @media screen and (max-width: 768px) {
    top: 7.5px;
    left: 6px;
    right: 6px;
  }

  @media screen and (max-width: 468px) {
    top: 5.5px;
    left: 5.5px;
    right: 5.5px;
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
  width: 540px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    width: 420px;
  }

  @media screen and (max-width: 568px) {
    width: 330px;
  }

  @media screen and (max-width: 468px) {
    width: 290px;
  }
`;
