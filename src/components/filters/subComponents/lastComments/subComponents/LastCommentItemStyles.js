import styled from "styled-components";
import { borders, colors, shadows } from "../../../../../styles/variables";
import { UserName } from "../../../../aside/subComponents/profile/ProfileStyles";
import { CommentContent } from "../../../../movieDetail/subComponents/comment/subComponents/commentItem/CommentItemStyles";
import { CommentProfileImage } from "../../../../movieDetail/subComponents/comment/subComponents/sendComment/SendCommentStyles";
import { MovieAltText } from "../../../../navbar/subComponents/searchResultItem/SearchResultItemStyles";

export const ItemWrapper = styled.div`
  display: flex;
  column-gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;
`;

export const ItemMovieImg = styled.img`
  height: 90px;
  margin-bottom: auto;
`;

export const ItemCommentInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${colors.colorLastCommentsBg};
  box-shadow: ${shadows.lastCommentsShadow};
  border-radius: ${borders.borderMd};
`;

// header

export const ItemCommentHeader = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
`;

export const LastCommentDate = styled(MovieAltText)`
  color: ${colors.colorNavLinks};
`;

export const LastUserImage = styled(CommentProfileImage)`
  width: 2rem;
  height: 2rem;
`;

export const LastUserName = styled(UserName)`
  font-size: 1rem;
  color: ${colors.colorSearchItemInfo};
`;

export const LastMovieName = styled.span`
  font-size: 1.2rem;
  color: ${colors.colorPaleWhite};

  &:hover {
    border-bottom: 2px solid ${colors.colorPaleWhite};
  }
`;

export const LastCommentContent = styled(CommentContent)`
  color: ${colors.colorBookMarkBlank};
  max-width: 300px;
`;
