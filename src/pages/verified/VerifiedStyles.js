import styled from "styled-components";
import { Container, Heading } from "../../styles/globalStyles";
import { colors } from "../../styles/variables";

export const VerifiedContainer = styled(Container)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 2rem;

  & > svg {
    font-size: 12rem;
  }

  .success {
    color: ${colors.colorSuccessGreen};
  }
  .fail {
    color: ${colors.colorFailRed};
  }
`;

export const VerifiedHeading = styled(Heading)`
  letter-spacing: 2px;
  font-size: 2.5rem;
`;
