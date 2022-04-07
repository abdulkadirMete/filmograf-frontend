import styled from "styled-components";
import { borders, colors } from "../../../../styles/variables";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  svg {
    font-size: 2rem;
    color: ${colors.colorNavLinks};
  }
`;

export const MenuGroup = styled.div`
  padding: 0.25rem;
  display: flex;
  align-items: center;
  column-gap: 2rem;
  cursor: pointer;
  border-radius: ${borders.borderMd};

  &:hover {
    background-color: ${colors.colorSearchItemHover};

    svg,
    span {
      color: ${colors.colorWhite};
    }
  }
`;

export const MenuItem = styled.span`
  color: ${colors.colorsAsideText};
  font-size: 1.2rem;
`;
