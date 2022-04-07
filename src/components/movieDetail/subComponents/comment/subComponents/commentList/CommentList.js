import React, { useContext, useEffect, useState } from "react";
import { CommentContext } from "../../../../../../context/commentContext/CommentContext";
import {
  deleteComment,
  getComment,
} from "../../../../../../context/commentContext/apiCalls";
import {
  InnerHeading,
  LoadingDot,
} from "../../../../../../styles/globalStyles";
import { CommentItem } from "../commentItem/CommentItem";
import { DeleteDialog } from "../deleteDialog/DeleteDialog";
import { CommentListWrapper } from "./CommentListStyles";
import { strings } from "../../../../../../data/text";
import { AuthContext } from "../../../../../../context/authContext/AuthContext";

export const CommentList = (movieId) => {
  const { comments, commentsLoading, commentsError, dispatch } =
    useContext(CommentContext);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (commentsLoading) return;
    getComment(movieId, dispatch);
  }, [movieId,user]);

  //delete button click
  const [showDialog, setShowDiaolog] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState();

  const handleDeleteClick = (id) => {
    setSelectedCommentId(id);
    setShowDiaolog(true);
  };

  const confirmDeleteComment = () => {
    setShowDiaolog(false);
    const comment = { userId: user._id, commentId: selectedCommentId };
    deleteComment(comment, dispatch);
  };

  // loading
  if (commentsLoading) {
    return <LoadingDot />;
  }

  if (commentsError) {
    // handle error
  }

  // not any comment
  if (!comments.length > 0) {
    return <InnerHeading>{strings.hasNotComment}</InnerHeading>;
  }

  return (
    <CommentListWrapper>
      {showDialog && (
        <DeleteDialog
          confirmFunction={confirmDeleteComment}
          setShowDiaolog={setShowDiaolog}
          confirmMessage={strings.commentDeleteConfirm}
        />
      )}
      {comments.map((comment) => {
        return (
          <CommentItem
            handleCommentClick={handleDeleteClick}
            key={comment._id}
            id={comment._id}
            user={comment.user}
            comment={comment.comment}
            createdAt={comment.createdAt}
          ></CommentItem>
        );
      })}
    </CommentListWrapper>
  );
};
