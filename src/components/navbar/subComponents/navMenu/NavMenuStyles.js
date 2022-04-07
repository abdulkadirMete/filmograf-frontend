import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../../styles/variables";

export const NavMenuSection = styled.div`
  display: flex;
  column-gap: 2rem;
  align-items: center;

  @media screen and (max-width: 1068px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: ${colors.colorNavLinks};
  font-family: Arial, sans-serif;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    color: ${colors.colorNavHover};
  }
`;
