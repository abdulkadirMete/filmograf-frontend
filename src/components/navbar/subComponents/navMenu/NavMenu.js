import React, { useContext } from "react";
import { UtilContext } from "../../../../context/utilContext/UtilContext";
import { strings } from "../../../../data/text";
import { NavLink, NavMenuSection } from "./NavMenuStyles";

export const NavMenu = () => {
  const { toggleContact } = useContext(UtilContext);

  return (
    <NavMenuSection>
      <NavLink to="/popular">{strings.navMenuPopular}</NavLink>
      <NavLink to="/watchlist">{strings.navMenuMyList}</NavLink>
      <NavLink to="/" onClick={() => toggleContact(true)}>
        {strings.navMenuContact}
      </NavLink>
    </NavMenuSection>
  );
};
