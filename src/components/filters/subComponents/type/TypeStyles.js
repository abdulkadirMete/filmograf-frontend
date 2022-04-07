import styled from "styled-components";
import { ActiveBoxStyle } from "../../../../styles/globalStyles";
import { borders, colors, shadows } from "../../../../styles/variables";

// types
export const TypesSection = styled.div``;

export const TypesContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ mobileMenuMode }) =>
    mobileMenuMode ? "repeat(4,1fr)" : " 1fr 1fr"};

  gap: 0.5rem;
  padding: ${({ mobileMenuMode }) => (mobileMenuMode ? "1rem" : ".5rem")};

  .active {
    ${ActiveBoxStyle}
  }

  @media screen and (max-width: 968px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 468px) {
    grid-template-columns: 1fr;
  }
`;

export const TypeItem = styled.div`
  color: ${({ mobileMenuMode }) =>
    mobileMenuMode ? colors.colorsAsideText : colors.colorFilterItems};
  background: ${({ mobileMenuMode }) =>
    mobileMenuMode ? colors.colorWhiteInnerLight : colors.colorPaginateItem};
  border-radius: ${borders.borderSm};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  border: ${({ mobileMenuMode }) =>
    mobileMenuMode ? null : borders.categoryItemBorder};
  box-shadow: ${shadows.shadow3d};

  cursor: pointer;

  &:hover {
    background: ${({ mobileMenuMode }) =>
      mobileMenuMode ? colors.colorWhiteInnerLight : colors.colorPaginateItem};

    color: ${({ mobileMenuMode }) =>
      mobileMenuMode ? colors.colorWhite : colors.colorLogo};
    transform: scale(1.1);
  }
`;

export const DropDownIconWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  & > svg {
    font-size: 2rem;
    color: ${colors.colorNavLinks};
  }
`;
