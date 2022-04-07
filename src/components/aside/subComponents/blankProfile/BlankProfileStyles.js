import styled from "styled-components";
import { ButtonPrimary } from "../../../../styles/globalStyles";
import { colors } from "../../../../styles/variables";

export const BlankProfileSection = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  color: ${colors.colorsAsideText};

  @media screen and (max-width: 568px) {
    flex-direction: column;
    row-gap: 0.5rem;
    text-align: center;
  }
`;
// login group
export const LoginButton = styled(ButtonPrimary)`
  border: 2px solid ${colors.colorWhite};
  padding: 0.4rem 0.6rem;
  background-color: transparent;

  &:hover {
    background-color: ${colors.colorWhiteInner};
  }
`;

export const BlankInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const BlankUserName = styled.span`
  text-transform: capitalize;
  font-weight: 600;
  color: white;
  font-size: 1.4rem;
`;

export const BlankEmail = styled.span``;
