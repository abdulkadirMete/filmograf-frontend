import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../../styles/variables";

export const NavBrandGroup = styled(Link)`
  display: flex;
  align-items: center;

  @media screen and (max-width: 968px) {
    margin: 0 auto;
  }
`;

export const NavLogo = styled.img`
  width: 50px;
`;

export const NavBrandText = styled.h1`
  color: ${colors.colorLogo};
  font-size: 2rem;
`;
