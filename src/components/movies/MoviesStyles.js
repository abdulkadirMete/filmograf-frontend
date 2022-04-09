import styled from "styled-components";
import { Container, Section } from "../../styles/globalStyles";
import { colors } from "../../styles/variables";

export const MovieSection = styled(Section)`
  padding-top: 0;
`;

export const MovieContainer = styled(Container)`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 1rem;

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const Showcase = styled.div`
  display: flex;
  flex-direction: column;
`;
