import React, { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import { UtilContext } from "../../../../context/utilContext/UtilContext";
import {
  SubmenuContainer, SubmenuContent,
  SubmenuHeader,
  SubmenuHeading
} from "./SubmenuStyles";

export const Submenu = ({ children, title }) => {
  const { toggleSubmenu, showSubmenu } = useContext(UtilContext);
  return (
    <SubmenuContainer className={showSubmenu && "active"}>
      <SubmenuHeader>
        <SubmenuHeading>{title}</SubmenuHeading>
        <BiArrowBack onClick={() => toggleSubmenu(false)}></BiArrowBack>
      </SubmenuHeader>
      <SubmenuContent>{children}</SubmenuContent>
    </SubmenuContainer>
  );
};
