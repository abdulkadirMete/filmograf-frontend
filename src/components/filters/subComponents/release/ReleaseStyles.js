import styled from "styled-components";
import { ActiveBoxStyle } from "../../../../styles/globalStyles";
import { borders, colors, shadows } from "../../../../styles/variables";

export const ReleaseSection = styled.div``;

export const ReleaseContainer = styled.div`
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  cursor: pointer;

  /* mobile menu */

  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 468px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 368px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ReleaseItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: ${({ mobileMenuMode }) =>
    mobileMenuMode ? colors.colorsAsideText : colors.colorFilterItems};

  background: ${({ mobileMenuMode }) =>
    mobileMenuMode ? colors.colorWhiteInnerLight : colors.colorPaginateItem};
  padding: 0.5rem 0.75rem;
  border-radius: ${borders.borderL};
  box-shadow: ${shadows.shadow3d};
  cursor: pointer;

  &:hover {
    background: ${({ mobileMenuMode }) =>
      mobileMenuMode ? colors.colorWhiteInnerLight : colors.colorPaginateItem};

    color: ${({ mobileMenuMode }) =>
      mobileMenuMode ? colors.colorWhite : colors.colorLogo};

    transform: scale(1.2);
  }

  &.active {
    ${ActiveBoxStyle}
  }
`;
