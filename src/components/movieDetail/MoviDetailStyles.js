import styled from "styled-components";
import { Container, Section } from "../../styles/globalStyles";
import { colors } from "../../styles/variables";

export const DetailSection = styled(Section)`
  margin-top: 40px;
`;

export const DetailContainer = styled(Container)`
  display: flex;
  color: ${colors.colorInfoItems};
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 40px;
  }
`;

export const MovieInfo = styled.div`
  flex: 1;
  padding: 0 2rem;
`;
