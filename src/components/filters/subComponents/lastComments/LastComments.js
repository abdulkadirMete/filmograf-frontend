import React, { useContext, useEffect } from "react";
import { LoadingDot, SectionHeading } from "../../../../styles/globalStyles";
import { CommonHeader } from "../../FiltersStyles";
import {
  LastCommentsContainer,
  LastCommentsSection,
} from "./LastCommentsStyles";
import { FaComments } from "react-icons/fa";
import { CommentContext } from "../../../../context/commentContext/CommentContext";
import { getLastComments } from "../../../../context/commentContext/apiCalls";
import { LastCommentItem } from "./subComponents/LastCommentItem";
import { strings } from "../../../../data/text";

export const LastComments = () => {
  const { lastComments, dispatch, lastCommentsLoading, lastCommentsError } =
    useContext(CommentContext);

  useEffect(() => {
    if (lastCommentsLoading) return;
    getLastComments(dispatch);
  }, []);

  if (lastCommentsLoading) {
    return <LoadingDot />;
  }

  return (
    <LastCommentsSection>
      <CommonHeader>
        <FaComments className="icon" />
        <SectionHeading>{strings.lastCommentsHeading}</SectionHeading>
      </CommonHeader>
      <LastCommentsContainer>
        {lastComments.map((comment) => {
          return (
            <LastCommentItem
              key={comment._id}
              user={comment.user}
              movie={comment.movie}
              comment={comment}
            />
          );
        })}
      </LastCommentsContainer>
    </LastCommentsSection>
  );
};
