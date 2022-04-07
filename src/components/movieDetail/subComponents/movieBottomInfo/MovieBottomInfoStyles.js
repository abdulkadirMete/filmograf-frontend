import styled from "styled-components";
import { ButtonPrimary } from "../../../../styles/globalStyles";
import { colors } from "../../../../styles/variables";

export const BottomInfo = styled.div`
  margin-top: 2rem;
`;

export const SummaryContainer = styled.div`
  padding: 0.5rem 0;
  max-height: 250px;
  overflow-y: scroll;
`;

export const Summary = styled.p`
  color: ${colors.colorInfo};
`;

export const AltInfoContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const AltInfoGroup = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;

export const AltInfoHeading = styled.span`
  color: ${colors.colorInfoHeading};
  font-size: 1rem;
  font-weight: 600;
  border-left: 3px solid ${colors.colorInfoHeadingBorder};
  padding-left: 0.5rem;
`;

export const AltInfo = styled.span`
  color: ${colors.colorInfo};
`;

export const AltButton = styled(ButtonPrimary)``;
