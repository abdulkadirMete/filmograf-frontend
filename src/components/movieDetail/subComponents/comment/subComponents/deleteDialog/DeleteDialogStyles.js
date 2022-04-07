import { motion } from "framer-motion";
import styled from "styled-components";
import { DialogButton } from "../../../../../../styles/globalStyles";
import { borders, colors } from "../../../../../../styles/variables";

export const CommentDeleteDialog = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${colors.colorDarkTransparentBackground};
  z-index: 99;
`;

export const CommentDeleteDialogContainer = styled(motion.div)`
  padding: 1.5rem 2rem;
  width: 600px;
  border-radius: ${borders.borderL};
  background-color: ${colors.colorLoginCart};
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  @media screen and (max-width: 668px) {
    width: 90%;
  }
`;

export const ConfirmMessage = styled.span`
  color: ${colors.colorWhite};
  letter-spacing: 1px;
  font-size: 1.2rem;
  font-weight: 600;

  @media screen and (max-width: 668px) {
    font-size: 1rem;
  }
`;

export const DialogButtonContainer = styled.div`
  display: flex;
  width: 100%;
  column-gap: 2rem;
  justify-content: center;

  @media screen and (max-width: 968px) {
    column-gap: 1.5rem;
  }
`;

export const DialogDeleteButton = styled(DialogButton)`
  &.cancel {
    background-color: ${colors.colorErrorLight};
  }
`;
