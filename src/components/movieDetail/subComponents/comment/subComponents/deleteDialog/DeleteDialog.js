import React, { useContext, useRef } from "react";
import { AuthContext } from "../../../../../../context/authContext/AuthContext";
import { deleteComment } from "../../../../../../context/commentContext/apiCalls";
import { CommentContext } from "../../../../../../context/commentContext/CommentContext";
import {
  CommentDeleteDialog,
  CommentDeleteDialogContainer,
  ConfirmMessage,
  DialogButtonContainer,
  DialogDeleteButton,
} from "./DeleteDialogStyles";
import { strings } from "../../../../../../data/text";
import { mountAnimation } from "../../../../../../data/animation";

export const DeleteDialog = ({
  setShowDiaolog,
  confirmFunction,
  confirmMessage,
}) => {
  const dialogRef = useRef();

  const modelOutsideTouch = (e) => {
    if (e.target === dialogRef.current) {
      setShowDiaolog(false);
    }
  };

  return (
    <CommentDeleteDialog onClick={(e) => modelOutsideTouch(e)} ref={dialogRef}>
      <CommentDeleteDialogContainer
        variants={mountAnimation}
        animate="animate"
        initial="initial"
      >
        <ConfirmMessage>{confirmMessage}</ConfirmMessage>
        <DialogButtonContainer>
          <DialogDeleteButton onClick={confirmFunction}>
            {strings.confirm}
          </DialogDeleteButton>
          <DialogDeleteButton
            className="cancel"
            onClick={(e) => setShowDiaolog(false)}
          >
            {strings.cancel}
          </DialogDeleteButton>
        </DialogButtonContainer>
      </CommentDeleteDialogContainer>
    </CommentDeleteDialog>
  );
};
