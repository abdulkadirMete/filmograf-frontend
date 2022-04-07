import styled from "styled-components";
import { Container, Section } from "../../../../styles/globalStyles";
import { colors, shadows } from "../../../../styles/variables";
import { MovieListWrapper } from "../movieList/MovieListStyles";

export const SecondaryMovieListSection = styled(Section)`
  padding: 40px 0;
  position: relative;
`;

export const SecondaryMovieListContainer = styled(Container)`
  margin-top: 80px;
`;

export const SectionImageWithFilter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9)),
    url("/images/hero-2.png");
  z-index: -1;
`;

export const SecondaryMovieListWrapper = styled(MovieListWrapper)`
  margin-top: 45px;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1168px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SecondaryMovieListHeadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SecondaryMovieListHeading = styled.span`
  font-size: 1.8rem;
  letter-spacing: 2px;
  padding: 0 0.5rem;
  font-weight: 600;
  text-shadow: ${shadows.fancyTextshadow};
  color: ${colors.colorNavLinks};

  & {
    line-height: 0.5;
    text-align: center;
  }
  & {
    display: inline-block;
    position: relative;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 5px;
    border-bottom: 1px solid
      ${({ blue }) => (blue ? colors.colorMobileBlue : colors.colorLogo)};
    border-top: 1px solid
      ${({ blue }) => (blue ? colors.colorMobileBlue : colors.colorLogo)};
    top: 0;
    width: 200px;

    @media screen and (max-width: 768px) {
      width: 150px;
    }

    @media screen and (max-width: 668px) {
      width: 120px;
    }

    @media screen and (max-width: 568px) {
      display: none;
    }
  }
  &::before {
    right: 100%;
    margin-right: 15px;
  }
  &::after {
    left: 100%;
    margin-left: 15px;
  }
`;
