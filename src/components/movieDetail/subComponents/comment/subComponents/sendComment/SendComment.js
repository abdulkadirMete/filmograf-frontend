import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../../../context/authContext/AuthContext";
import { putComment } from "../../../../../../context/commentContext/apiCalls";
import { CommentContext } from "../../../../../../context/commentContext/CommentContext";
import { MovieContext } from "../../../../../../context/movieContext/MovieContext";
import { strings } from "../../../../../../data/text";
import { purifyUserImage } from "../../../../../../helpers/helpers";
import {
  CommentArea,
  CommentAreaGroup,
  CommentProfileImage,
  SendCommentButton,
  SendCommentGroup,
} from "./SendCommentStyles";

export const SendComment = () => {
  const { user } = useContext(AuthContext);
  const { singleMovie } = useContext(MovieContext);
  const { dispatch } = useContext(CommentContext);

  const [comment, setComment] = useState("");

  const handleSendComment = () => {
    if (user) {
      const commentObject = {
        user: user._id,
        movie: singleMovie._id,
        comment,
      };
      putComment(commentObject, dispatch);
      setComment("");
    } else {
      toast.warn(strings.sendCommentAuthDenied);
    }
  };

  return (
    <SendCommentGroup>
      <CommentProfileImage src={purifyUserImage(user?.img)} />
      <CommentAreaGroup>
        <CommentArea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          minLength={3}
          maxLength={200}
          placeholder={strings.commentAreaPlaceHolder}
        ></CommentArea>
        <SendCommentButton onClick={handleSendComment}>
          {strings.send}
        </SendCommentButton>
      </CommentAreaGroup>
    </SendCommentGroup>
  );
};
