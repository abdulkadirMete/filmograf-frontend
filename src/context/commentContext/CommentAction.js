// get comments
export const fetchCommentsStart = () => ({
  type: "FETCH_COMMENTS_START",
});
export const fetchCommentsSuccess = (comments) => ({
  type: "FETCH_COMMENTS_SUCCESS",
  payload: comments,
});
export const fetchCommentsFail = (error) => ({
  type: "FETCH_COMMENTS_FAIL",
  payload: error,
});

// delete comments
export const putCommentStart = () => ({
  type: "PUT_COMMENTS_START",
});
export const putCommentSuccess = (comment) => ({
  type: "PUT_COMMENTS_SUCCESS",
  payload: comment,
});
export const putCommentFail = (error) => ({
  type: "PUT_COMMENTS_FAIL",
  payload: error,
});

// comment
export const deleteCommentStart = () => ({
  type: "DELETE_COMMENTS_START",
});
export const deleteCommentSuccess = (commentId) => ({
  type: "DELETE_COMMENTS_SUCCESS",
  payload: commentId,
});
export const deleteCommentFail = (error) => ({
  type: "DELETE_COMMENTS_FAIL",
  payload: error,
});


// fetch last comments
export const fetchLastCommentsStart = () => ({
  type: "FETCH_LAST_COMMENTS_START",
});
export const fetchLastCommentsSuccess = (comments) => ({
  type: "FETCH_LAST_COMMENTS_SUCCESS",
  payload: comments,
});
export const fetchLastCommentsFail = (error) => ({
  type: "FETCH_LAST_COMMENTS_FAIL",
  payload: error,
});
