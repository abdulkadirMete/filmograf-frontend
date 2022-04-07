import styled from "styled-components";

export const MovieListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2rem;

  @media screen and (max-width: 1286px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1268px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 968px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
