import React from "react";
import { ImBin } from "react-icons/im";
import { RemoveButtonContainer } from "./RemoveListButtonStyles";

export const RemoveListButton = ({ setShowDiaolog }) => {
  return (
    <RemoveButtonContainer onClick={() => setShowDiaolog(true)}>
      <ImBin />
    </RemoveButtonContainer>
  );
};
