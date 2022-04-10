import React, { useContext, useEffect, useState } from "react";
import { AsideContainer, AsideMenu } from "./AsideStyles";
import { MdClose } from "react-icons/md";
import { Profile } from "./subComponents/profile/Profile";
import { AuthContext } from "../../context/authContext/AuthContext";
import { Strip } from "../../styles/globalStyles";
import { Menu } from "./subComponents/menu/Menu";
import { UtilContext } from "../../context/utilContext/UtilContext";
import { BlankProfile } from "./subComponents/blankProfile/BlankProfile";

export const Aside = () => {
  const { user } = useContext(AuthContext);
  const { toggleAside, showAside } = useContext(UtilContext);

  // prevent body scroll when aside is open
  useEffect(() => {
    document.body.style.overflow = showAside ? "hidden" : "auto";
  }, [showAside]);

  return (
    <AsideMenu className={showAside ? "open" : null}>
      <AsideContainer>
        <MdClose className="close" onClick={() => toggleAside(false)} />
        {!user ? <BlankProfile /> : <Profile {...user} />}
        <Strip />
        <Menu />
      </AsideContainer>
    </AsideMenu>
  );
};
