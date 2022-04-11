import styled from "styled-components";
import { borders, colors } from "../../../../styles/variables";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  overflow-y: auto;
  height: calc(100% - 220px);

  /* padding for last element */
  & > :last-child {
    margin-bottom: 4rem;
  }

  /* hide scrollbar  */
  &::-webkit-scrollbar {
    display: none;
  }

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
