import React, { useContext, useState } from "react";
import { AiFillContacts, AiFillHome, AiFillSetting } from "react-icons/ai";
import { BiMovie } from "react-icons/bi";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaListAlt, FaHackerrank } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";
import { logout } from "../../../../context/authContext/apiCalls";
import { AuthContext } from "../../../../context/authContext/AuthContext";
import { UtilContext } from "../../../../context/utilContext/UtilContext";
import { strings } from "../../../../data/text";
import { Release } from "../../../filters/subComponents/release/Release";
import { Type } from "../../../filters/subComponents/type/Type";
import { Submenu } from "../submenu/Submenu";
import { MenuContainer, MenuGroup, MenuItem } from "./MenuStyles";

export const Menu = () => {
  // effect
  const { toggleContact, toggleSubmenu, toggleAside } = useContext(UtilContext);
  const [showRelease, setShowRelease] = useState(false);

  // props
  const releaseProp = {
    title: strings.releaseTitle,
    children: <Release mobileMenuMode={true} />,
  };

  const typeProp = {
    title: strings.typeTitle,
    children: <Type mobileMenuMode={true} />,
  };

  // handle show submenu
  const handleSubmenu = (show) => {
    toggleSubmenu(true);
    setShowRelease(show);
  };

  // handle logout
  const { dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    logout(dispatch);
  };

  // user
  const { user } = useContext(AuthContext);

  // contact
  const handleToggleContact = () => {
    toggleAside(false);
    toggleContact(true);
  };

  return (
    <MenuContainer>
      <Link to="/" onClick={() => toggleAside(false)}>
        <MenuGroup>
          <AiFillHome />
          <MenuItem>{strings.home}</MenuItem>
        </MenuGroup>
      </Link>

      <Link to="/popular" onClick={() => toggleAside(false)}>
        <MenuGroup>
          <FaHackerrank />
          <MenuItem>{strings.navMenuPopular}</MenuItem>
        </MenuGroup>
      </Link>

      <Link to="/watchlist" onClick={() => toggleAside(false)}>
        <MenuGroup>
          <FaListAlt />
          <MenuItem>{strings.navMenuMyList}</MenuItem>
        </MenuGroup>
      </Link>

      <MenuGroup onClick={() => handleSubmenu(true)}>
        <BsCalendarDateFill />
        <MenuItem>{strings.releaseTitle}</MenuItem>
      </MenuGroup>

      <MenuGroup onClick={() => handleSubmenu(false)}>
        <BiMovie />
        <MenuItem>{strings.typeTitle}</MenuItem>
      </MenuGroup>

      <Link to="/settings" onClick={() => toggleAside(false)}>
        <MenuGroup>
          <AiFillSetting />
          <MenuItem>{strings.settings}</MenuItem>
        </MenuGroup>
      </Link>

      <MenuGroup onClick={() => handleToggleContact()}>
        <AiFillContacts />
        <MenuItem>{strings.contact}</MenuItem>
      </MenuGroup>

      {user && (
        <MenuGroup>
          <ImExit />
          <MenuItem onClick={handleLogout}>{strings.logout}</MenuItem>
        </MenuGroup>
      )}

      {/* submenus */}
      <Submenu
        children={showRelease ? releaseProp.children : typeProp.children}
        title={showRelease ? releaseProp.title : typeProp.title}
      />
    </MenuContainer>
  );
};
