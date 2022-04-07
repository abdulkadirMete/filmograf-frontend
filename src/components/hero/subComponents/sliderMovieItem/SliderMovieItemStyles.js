import styled from "styled-components";
import { borders, colors } from "../../../../styles/variables";

export const MovieContainer = styled.div`
  height: 142px;
  border-radius: ${borders.borderSm};
  position: relative;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.colorMovieSliderEffect};
  }

  @media screen and (max-width: 768px) {
    height: 110px;
  }

  @media screen and (max-width: 568px) {
    height: 86px;
  }

  @media screen and (max-width: 468px) {
    height: 75px;
  }

  overflow: hidden;
`;

export const MovieImg = styled.img`
  border-radius: ${borders.borderSm};
  height: 100%;
  width: calc(100% - 3px);
`;
