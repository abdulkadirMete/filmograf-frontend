import styled from "styled-components";
import { borders, colors, shadows } from "../../../../styles/variables";

export const TopInfo = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 568px) {
    flex-direction: column;
    row-gap: 2rem;
    text-align: center;
  }
`;

export const MovieName = styled.h3`
  letter-spacing: 2px;
  font-size: 1.8rem;
`;

export const MovieStatistics = styled.div`
  display: flex;
  column-gap: 1.5rem;
`;

// imdb
export const MovieImdbGroup = styled.div`
  padding: 10px 15px;
  background: ${colors.colorImdbBox};
  display: flex;
  column-gap: 0.3rem;
  border-radius: ${borders.borderMd};
  box-shadow: ${shadows.shadow3d};
`;

export const MovieImdb = styled.span`
  color: ${colors.colorImdbText};
  font-weight: 600;
`;

export const MovieImdbHeading = styled.span`
  text-transform: uppercase;
`;

// view
export const MovieViewGroup = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;

  & > svg {
    font-size: 1.8rem;
    color: ${colors.colorInfo};
  }
`;

export const MovieViewText = styled.span`
  color: ${colors.colorWhite};
  font-size: 1rem;
`;
