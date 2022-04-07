import styled from "styled-components";
import { borders, colors } from "../../../../../../styles/variables";

export const CommentItemWrapper = styled.div`
  display: flex;
  column-gap: 0.5rem;
  margin-right: auto;
  background-color: ${({ isOwn }) =>
    isOwn ? colors.colorOwnCommentBg : "transparent"};
  padding: 0.5rem;
  padding-right: 3rem;
  border-radius: ${borders.borderL};
  align-items: center;
  position: relative;

  &:hover {
    & > svg {
      visibility: visible;
    }
  }

  & > svg {
    margin: 0 5px;
    font-size: 1.4rem;
    visibility: hidden;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    pos &:hover {
      color: ${colors.colorMobileBlue};
    }
  }
`;

export const CommentItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  row-gap: 0.5rem;
`;

export const CommentItemHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;

export const CommentItemUserName = styled.span`
  font-size: 1.2rem;
`;

export const CommentItemDate = styled.span`
  font-size: 0.8rem;
  color: ${colors.colorCommentDate};
`;

export const CommentContent = styled.p`
  max-width: 1000px;
  overflow: hidden;
`;
