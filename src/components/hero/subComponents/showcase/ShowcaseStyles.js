import styled from "styled-components";
import {
  ButtonPrimary,
  ButtonSecondary,
  Heading,
  Text,
} from "../../../../styles/globalStyles";
import { borders, colors } from "../../../../styles/variables";

export const HeroShowcaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  z-index: 9;
  margin-top: 100px;
  position: relative;

  @media screen and (max-width: 1268px) {
    margin-bottom: 0;
    margin-top: 120px;
    row-gap: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 568px) {
    margin-bottom: 70px;
  }

  @media screen and (max-width: 376px) {
    margin-bottom: 10px;
  }
`;

export const HeroHeading = styled(Heading)`
  font-size: 3rem;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  letter-spacing: 4px;

  @media screen and (max-width: 1268px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 568px) {
    font-size: 2rem;
    letter-spacing: normal;
  }
`;

export const HeroText = styled(Text)``;

// buttons

export const HeroButtonGroup = styled.div`
  display: flex;
  column-gap: 1.5rem;
  @media screen and (max-width: 1268px) {
    font-size: 2.5rem;
    justify-content: center;
  }

  @media screen and (max-width: 568px) {
    flex-direction: column-reverse;
    align-items: center;
    row-gap: 1.5rem;
  }

  @media screen and (max-width: 568px) {
    align-items: stretch;
  }
`;

export const HeroRandomButtom = styled(ButtonPrimary)`
  border-radius: ${borders.borderMd};
  font-weight: 700;
  background-color: ${colors.colorHeroButton};
  color: ${colors.colorBlack};
  padding: 1rem 4rem;
  font-size: 18px;
  transition: transform 0.3s ease-in;

  &:hover {
    background-color: ${colors.colorHeroButton};
    transform: scale(1.05);
  }
`;

export const HeroSignUpButton = styled(ButtonSecondary)`
  border-radius: ${borders.borderMd};
  border: ${borders.heroSignUpButtonBorder};
  color: ${colors.colorHeroSignUpButton};
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 18px;

  &:hover {
    background-color: ${colors.colorHeroSignUpButtonHover};
  }
`;
// stream services
export const StreamServicesContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

export const StreamServicesItem = styled.img`
  width: 50px;
  height: 50px;
  opacity: 0.7;
  border-radius: ${borders.borderMd};

  @media screen and (max-width: 1268px) {
    display: none;
  }
`;
