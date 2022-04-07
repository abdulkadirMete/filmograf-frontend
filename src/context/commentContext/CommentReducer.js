const reducer = (state, action) => {
  switch (action.type) {
    // get comments
    case "FETCH_COMMENTS_START":
      return { ...state, commentsLoading: true };

    case "FETCH_COMMENTS_SUCCESS":
      return { ...state, commentsLoading: false, comments: action.payload };

    case "FETCH_COMMENTS_FAIL":
      return {
        ...state,
        commentsLoading: false,
        commentsError: action.payload,
      };

    // put comments
    case "PUT_COMMENTS_START":
      return { ...state, putCommentLoading: true, commentsLoading: true };

    case "PUT_COMMENTS_SUCCESS":
      return {
        ...state,
        putCommentLoading: false,
        comments: [action.payload, ...state.comments],
        commentsLoading: false,
      };

    case "PUT_COMMENTS_FAIL":
      return {
        ...state,
        putCommentLoading: false,
        putCommentError: action.payload,
        commentsLoading: false,
      };

    // delete comments
    case "DELETE_COMMENTS_START":
      return { ...state, deleteCommentLoading: true, commentsLoading: true };

    case "DELETE_COMMENTS_SUCCESS":
      let tmpComments = state.comments;
      tmpComments = tmpComments.filter(
        (comment) => comment._id !== action.payload
      );
      return {
        ...state,
        deleteCommentLoading: false,
        comments: tmpComments,
        commentsLoading: false,
      };

    case "DELETE_COMMENTS_FAIL":
      return {
        ...state,
        deleteCommentLoading: false,
        deleteCommentError: action.payload,
        commentsLoading: false,
      };

    // get last comments
    case "FETCH_LAST_COMMENTS_START":
      return { ...state, lastCommentsLoading: true };

    case "FETCH_LAST_COMMENTS_SUCCESS":
      return {
        ...state,
        lastCommentsLoading: false,
        lastComments: action.payload,
      };

    case "FETCH_LAST_COMMENTS_FAIL":
      return {
        ...state,
        lastCommentsLoading: false,
        lastCommentsError: action.payload,
      };

    default:
      throw new Error(`no mathching "${action.type}" action type`);
  }
};
export default reducer;
