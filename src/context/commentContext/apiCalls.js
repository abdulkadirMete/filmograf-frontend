import axios from "axios";
import { baseApiUrl } from "../../data/options";
import {
  deleteCommentFail,
  deleteCommentStart,
  deleteCommentSuccess,
  fetchCommentsFail,
  fetchCommentsStart,
  fetchCommentsSuccess,
  fetchLastCommentsFail,
  fetchLastCommentsStart,
  fetchLastCommentsSuccess,
  putCommentFail,
  putCommentStart,
  putCommentSuccess,
} from "./CommentAction";

// get comments
export const getComment = async (movieId, dispatch) => {
  dispatch(fetchCommentsStart());
  try {
    const res = await axios.post(
      `${baseApiUrl}/api/tools/comment`,
      movieId
    );
    dispatch(fetchCommentsSuccess(res.data));
  } catch (error) {
    dispatch(fetchCommentsFail(error));
  }
};

// send comment
export const putComment = async (comment, dispatch) => {
  dispatch(putCommentStart());
  try {
    const res = await axios.put(
      `${baseApiUrl}/api/tools/comment`,
      comment,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );

    dispatch(putCommentSuccess(res.data));
  } catch (error) {
    dispatch(putCommentFail(error));
  }
};

// delete comment
export const deleteComment = async (comment, dispatch) => {
  dispatch(deleteCommentStart());
  try {
    const res = await axios.delete(
      `${baseApiUrl}/api/tools/comment`,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
        data: {
          commentId: comment.commentId,
          userId: comment.userId,
        },
      }
    );

    dispatch(deleteCommentSuccess(comment.commentId));
  } catch (error) {
    console.log(error);
    dispatch(deleteCommentFail(error));
  }
};

// get last comments
export const getLastComments = async (dispatch) => {
  dispatch(fetchLastCommentsStart());
  try {
    const res = await axios.get(
      `${baseApiUrl}/api/tools/comment/last`
    );
    dispatch(fetchLastCommentsSuccess(res.data));
  } catch (error) {
    dispatch(fetchLastCommentsFail(error));
  }
};
