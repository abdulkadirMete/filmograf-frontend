import styled from "styled-components";
import { Container, Section } from "../../styles/globalStyles";

export const HeroSection = styled.section`
  height: 100vh;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1268px) {
    padding: 1.5rem 0px;
  }
`;

export const HeroImage = styled.img`
  object-fit: cover;
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const HeroContainer = styled(Container)`
  z-index: 1;
  display: flex;
  height: 100%;

  @media screen and (max-width: 1268px) {
    flex-direction: column-reverse;
  }
`;

// left
export const HeroLeft = styled.div`
  flex: 1;
  text-align: start;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  overflow: visible;

  @media screen and (max-width: 1268px) {
    text-align: center;
  }
`;

// right
export const HeroRight = styled.div`
  flex: 1;
`;
