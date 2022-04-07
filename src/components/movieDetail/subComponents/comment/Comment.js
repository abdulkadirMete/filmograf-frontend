import React, { useContext, useState } from "react";
import { MovieContext } from "../../../../context/movieContext/MovieContext";
import { strings } from "../../../../data/text";
import {
  CommentContainer,
  CommentHeading,
  ShowCommentsButton
} from "./CommentStyles";
import { CommentList } from "./subComponents/commentList/CommentList";
import { SendComment } from "./subComponents/sendComment/SendComment";

export const Comment = () => {
  // handle show comments
  const [showComments, setShowComments] = useState(false);
  const { singleMovie } = useContext(MovieContext);

  const handleShowComments = () => {
    setShowComments(!showComments);
  };

  return (
    <CommentContainer>
      <CommentHeading>{strings.comments}</CommentHeading>
      <ShowCommentsButton
        className={showComments && "show"}
        onClick={handleShowComments}
      >
        {`${strings.commentPossesive} ${
          showComments ? strings.close : strings.show
        }`}
      </ShowCommentsButton>
      {showComments && (
        <>
          <SendComment />
          <CommentList movieId={singleMovie._id} />
        </>
      )}
    </CommentContainer>
  );
};
