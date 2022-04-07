import styled from "styled-components";
import { ButtonPrimary } from "../../../../styles/globalStyles";
import { colors, shadows } from "../../../../styles/variables";

export const RobotSection = styled.div``;

export const RobotContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  row-gap: 0.5rem;
`;

export const RobotSelect = styled.select`
  background-color: ${colors.colorWhiteInner};
  border: none;
  color: ${colors.colorFilterItems};
  padding: 0.5rem 0.75rem;
  box-shadow: ${shadows.shadow3d};
`;

export const RobotOption = styled.option`
  &:checked {
    color: ${colors.colorLogo};
    padding: 0.5rem 0.75rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const RobotButton = styled(ButtonPrimary)`
  padding: 0.75rem 1rem;
`;
