import styled from "styled-components";
import { Container, Section, Strip, Text } from "../../styles/globalStyles";
import { colors } from "../../styles/variables";

export const FooterSection = styled.div`
  padding-top: 70px;
`;

export const FooterContainer = styled(Container)`
  background: ${colors.colorAsideTry};
  display: flex;
  height: 200px;
  flex-direction: column;
`;

export const FooterContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterLinkGroup = styled.div`
  display: flex;
  column-gap: 2rem;
`;

export const FooterLink = styled.a`
  & > svg {
    font-size: 2rem;
    color: ${colors.colorPaleWhite};
  }
`;

export const CopyRight = styled(Text)`
  color: ${colors.colorPaleWhite};
`;

export const FooterStrip = styled(Strip)`
  margin: 0;
`;
