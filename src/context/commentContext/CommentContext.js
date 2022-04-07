import CommentReducer from "./CommentReducer";
import { createContext, useReducer } from "react";

const initialState = {
  commentsLoading: false,
  comments: [],
  commentsError: null,
  putCommentLoading: false,
  putCommentError: null,
  deleteCommentMessage: "",
  deleteCommentLoading: false,
  deleteCommentError: null,
  lastCommentsLoading: false,
  lastComments: [],
  lastCommentsError: null,
};

export const CommentContext = createContext(initialState);

export const CommentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CommentReducer, initialState);

  return (
    <CommentContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
