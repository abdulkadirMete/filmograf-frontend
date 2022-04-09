import styled from "styled-components";
import { Container } from "../../styles/globalStyles";
import { colors } from "../../styles/variables";

export const Nav = styled.nav`
  max-width: 1680px;
  justify-self: center;
  width: 100%;
  height: 80px;
  position: absolute;
  background-color: ${colors.colorNav};
  top: 0;
  left: 0;
  z-index: 3;
  transform: translateY(0%);
  transition: transform 0.5s ease-out;

  &.hide {
    transform: translateY(-110%);
  }

  @media screen and (min-width: 1560px) {
    left: calc(50% - 840px);
  }
`;

export const NavContainer = styled(Container)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 568px) {
    padding-bottom: 0.5rem;
  }

  & > svg {
    color: ${colors.colorWhite};
    font-size: 2rem;
    display: none;
    cursor: pointer;

    @media screen and (max-width: 1068px) {
      display: block;
    }
  }
`;

export const NavInfo = styled.div`
  display: flex;
  column-gap: 2rem;
  align-items: center;

  @media screen and (max-width: 568px) {
    column-gap: 0;
  }
`;
