import styled from "styled-components";
import { PlayButtonContainer } from "../../../../components/movieDetail/subComponents/play/PlayButtonStyles";

export const RemoveButtonContainer = styled(PlayButtonContainer)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  & > svg {
    margin: 0;
  }
`;
