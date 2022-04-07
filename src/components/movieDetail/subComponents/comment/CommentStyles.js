import styled from "styled-components";
import { ButtonThird, InnerHeading } from "../../../../styles/globalStyles";
import { borders, colors, shadows } from "../../../../styles/variables";
import { TextArea } from "../../../contact/ContactStyles";

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  align-items: center;
`;

export const CommentHeading = styled(InnerHeading)`
  padding-bottom: 5px;
  border-bottom: 3px solid ${colors.colorMobileBlue};
  margin-right: auto;
`;

export const ShowCommentsButton = styled(ButtonThird)`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  &.show {
    &:hover {
      color: ${colors.colorError};
      box-shadow: ${shadows.commentCloseShadow};
    }
  }
`;
