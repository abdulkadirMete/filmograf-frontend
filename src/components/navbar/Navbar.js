import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { FiMenu } from "react-icons/fi";
import { UtilContext } from "../../context/utilContext/UtilContext";
import { colors } from "../../styles/variables";
import { Nav, NavContainer, NavInfo } from "./NavbarStyles";
import { Brand } from "./subComponents/brand/Brand";
import { NavMenu } from "./subComponents/navMenu/NavMenu";
import { Profile } from "./subComponents/profile/Profile";
import { Search } from "./subComponents/search/Search";

export const Navbar = () => {
  const { toggleAside, toggleNav, showNav } = useContext(UtilContext);

  return (
    <Nav className={showNav ? null : "hide"}>
      <NavContainer>
        <IconContext.Provider value={{ color: `${colors.colorNavLinks}` }}>
          <FiMenu onClick={() => toggleAside(true)} />
          <Brand />
          <NavInfo>
            <NavMenu />
            <Search />
            <Profile />
          </NavInfo>
        </IconContext.Provider>
      </NavContainer>
    </Nav>
  );
};
