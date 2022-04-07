import styled from "styled-components";
import { borders, colors, shadows } from "../../../../styles/variables";

export const MovieContainer = styled.div`
  display: flex;
  column-gap: 1rem;
  padding: 0.5rem;
  border-radius: ${borders.borderL};

  &:hover {
    background-color: ${colors.colorSearchItemHover};
  }
`;

export const MovieImg = styled.img`
  height: 90px;
  border-radius: ${borders.borderSm};
  border: ${borders.searchItemBorder};
  box-shadow: ${shadows.shadow3d};
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 0.5rem;
`;

export const MovieName = styled.h3`
  color: ${colors.colorSearchResultName};
  font-size: medium;
`;

export const MovieAlt = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

export const MovieAltText = styled.span`
  color: ${colors.colorSearchItemInfo};
  font-size: 0.8rem;

  .head {
    color: ${colors.colorNavLinks};
  }
`;
