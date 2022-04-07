import starsRating from "stars-rating";
import styled from "styled-components";
import { ButtonThird } from "../../../../../styles/globalStyles";
import { colors } from "../../../../../styles/variables";

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 1.5rem;
`;

export const Rating = styled(starsRating)``;

export const RateButton = styled(ButtonThird)`
  transition: all 0.3s linear;
`;

// rated

export const RatedGroup = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;

export const RatedText = styled.span`
  color: ${colors.colorWhite};
  letter-spacing: 2px;
  font-size: 1.2rem;
`;

export const Rate = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  & > svg {
    font-size: 1.8rem;
    color: ${colors.colorLogo};
  }
`;
