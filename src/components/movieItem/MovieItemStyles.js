import styled from "styled-components";
import { borders, colors, shadows } from "../../styles/variables";

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const MovieImg = styled.img`
  border-radius: ${borders.borderMd};
  width: 100%;
  height: 350px;
  transition: scale 0.3s ease-out;
  object {
    display: block;
  }

  &:hover {
    transform: scale(1.05);
    border: none;
  }

  @media screen and (max-width: 568px) {
    height: 250px;
  }

  @media screen and (max-width: 400px) {
    height: 200px;
  }
`;

// Info

export const MovieInfo = styled.div`
  color: white;
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 1rem;
  row-gap: 0.5rem;
`;

export const MovieName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const MovieRelease = styled.span`
  color: ${colors.colorMovieRelease};
`;

export const MovieInnerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
`;

export const MovieImdbContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 1.5rem;
  background-color: ${colors.colorLastCommentsBg};
  box-shadow: ${shadows.imdbItemShadow};
`;

export const MovieImdb = styled.span`
  color: ${colors.colorPaleWhite};
  font-weight: 600;
`;
