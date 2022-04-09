import styled from "styled-components";
import { Container, Section } from "../../styles/globalStyles";
import { colors } from "../../styles/variables";

export const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${colors.colorBlack};

  @media screen and (max-width: 1268px) {
    height: 120vh;
  }
`;

export const HeroImage = styled.img`
  object-fit: cover;
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const HeroContainer = styled(Container)`
  display: flex;
  height: 100%;
  margin-top: 80px;
  background-color: ${colors.colorBlack};

  @media screen and (max-width: 1268px) {
    flex-direction: column-reverse;
    padding: 40px 0;
  }
`;

// left
export const HeroLeft = styled.div`
  flex: 1;
  text-align: start;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  @media screen and (max-width: 1268px) {
    text-align: center;
  }
`;

// right
export const HeroRight = styled.div`
  flex: 1;
`;
