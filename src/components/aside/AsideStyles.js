import styled from "styled-components";
import { Container } from "../../styles/globalStyles";
import { colors } from "../../styles/variables";

export const AsideMenu = styled.aside`
  width: 70%;
  height: 100%;
  position: fixed;
  background: ${colors.colorAsideTry};
  top: 0;
  left: 0;
  z-index: 99;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
  border-right: 1px solid ${colors.colorAsideBorder};

  &.open {
    transform: translateX(0);
  }

  @media screen and (min-width: 1069px) {
    display: none;
  }
`;

export const AsideContainer = styled(Container)`
  margin-top: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
