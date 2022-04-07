import React, { useContext, useState } from "react";
import { MdClose } from "react-icons/md";
import { AuthContext } from "../../../../../../context/authContext/AuthContext";
import { reverseFade } from "../../../../../../data/animation";
import {
  purifyUserImage,
  timeFromNow
} from "../../../../../../helpers/helpers";
import { AnimationWrapper } from "../../../../../../styles/globalStyles";
import { CommentProfileImage } from "../sendComment/SendCommentStyles";
import {
  CommentContent,
  CommentItemDate,
  CommentItemHeaderInfo,
  CommentItemInfo,
  CommentItemUserName,
  CommentItemWrapper
} from "./CommentItemStyles";


export const CommentItem = ({
  user,
  comment,
  createdAt,
  id,
  handleCommentClick,
}) => {
  const { user: currentUser } = useContext(AuthContext);
  const [isOwn, setOwn] = useState(currentUser?._id === user?._id);

  return (
    <AnimationWrapper
      variants={reverseFade}
      animate="animate"
      initial="initial"
    >
      <CommentItemWrapper isOwn={isOwn}>
        <CommentProfileImage
          src={purifyUserImage(user.img)}
        ></CommentProfileImage>
        <CommentItemInfo>
          <CommentItemHeaderInfo>
            <CommentItemUserName>{user.username}</CommentItemUserName>
            <CommentItemDate>{timeFromNow(createdAt)}</CommentItemDate>
          </CommentItemHeaderInfo>
          <CommentContent>{comment}</CommentContent>
        </CommentItemInfo>
        {isOwn && <MdClose onClick={() => handleCommentClick(id)} />}
      </CommentItemWrapper>
    </AnimationWrapper>
  );
};
