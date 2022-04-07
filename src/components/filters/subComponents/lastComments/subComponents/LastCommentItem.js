import React from "react";
import { Link } from "react-router-dom";
import { purifyUserImage, timeFromNow } from "../../../../../helpers/helpers";
import {
  InfoBackgroundImage,
  ItemCommentHeader,
  ItemCommentInfo,
  ItemMovieImg,
  ItemWrapper,
  LastCommentContent,
  LastCommentDate,
  LastMovieName,
  LastUserImage,
  LastUserName,
} from "./LastCommentItemStyles";

export const LastCommentItem = ({ user, comment, movie }) => {
  return (
    <ItemWrapper>
      {/* <ItemMovieImg src={movie.img} /> */}
      <ItemCommentInfo>
        <ItemCommentHeader>
          <LastUserImage src={purifyUserImage(user.img)} />
          <LastUserName>{user.username}</LastUserName>
          <LastCommentDate>{timeFromNow(comment.createdAt)}</LastCommentDate>
        </ItemCommentHeader>
        <Link to={`/movie/${movie._id}`}>
          <LastMovieName>{movie.name.split("-")[0]}</LastMovieName>
        </Link>
        <LastCommentContent>{comment.comment}</LastCommentContent>
      </ItemCommentInfo>
    </ItemWrapper>
  );
};
