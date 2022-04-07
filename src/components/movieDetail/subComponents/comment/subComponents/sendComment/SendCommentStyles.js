import styled from "styled-components";
import { colors, borders } from "../../../../../../styles/variables";

import { ProfileImage } from "../../../../../aside/subComponents/profile/ProfileStyles";
import { TextArea } from "../../../../../contact/ContactStyles";

export const SendCommentGroup = styled.div`
  width: 100%;
  display: flex;
  column-gap: 0.5rem;
`;

export const CommentProfileImage = styled(ProfileImage)`
  border-radius: ${borders.borderMd};
  border: ${borders.commentProfileBorder};
  width: 50px;
  height: 50px;
`;

export const CommentAreaGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CommentArea = styled(TextArea)`
  height: 100px;
  border-radius: 0;
  border-top-left-radius: ${borders.borderMd};
  border-top-right-radius: ${borders.borderMd};
`;

export const SendCommentButton = styled.button`
  border: none;
  padding: 0.5rem 0.75rem;
  background-color: ${colors.colorWhiteInner};
  color: ${colors.colorWhite};
  letter-spacing: 2px;
  font-weight: 600;
  border-bottom-left-radius: ${borders.borderMd};
  border-bottom-right-radius: ${borders.borderMd};

  &:hover {
    opacity: 0.9;
    background-color: ${colors.commentSendButtonBackground};
  }
`;
