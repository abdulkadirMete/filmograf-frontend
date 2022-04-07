import React, { useContext } from "react";
import { ImExit } from "react-icons/im";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../../context/authContext/apiCalls";
import { AuthContext } from "../../../../context/authContext/AuthContext";
import { strings } from "../../../../data/text";
import { purifyUserImage } from "../../../../helpers/helpers";
import {
  NavButton,
  ProfileMenu,
  ProfileMenuGroup,
  ProfileMenuText,
  UserName,
  UserPhoto,
  UserProfilGroup
} from "./ProfileStyles";


export const Profile = () => {
  const { user, dispatch } = useContext(AuthContext);
  let navigate = useNavigate();
  // logout
  const handleLogout = () => {
    logout(dispatch);
  };

  // settings
  const handleSettings = () => {
    navigate("/settings");
  };

  return (
    <>
      {user ? (
        <UserProfilGroup>
          <UserPhoto src={purifyUserImage(user.img)} />
          <UserName grey={true}>{user.username}</UserName>
          <IoMdArrowDropdown />
          <ProfileMenu id="menu">
            <ProfileMenuGroup onClick={handleSettings}>
              <IoSettings />
              <ProfileMenuText>{strings.settings}</ProfileMenuText>
            </ProfileMenuGroup>
            <ProfileMenuGroup onClick={handleLogout}>
              <ImExit />
              <ProfileMenuText>{strings.logout}</ProfileMenuText>
            </ProfileMenuGroup>
          </ProfileMenu>
        </UserProfilGroup>
      ) : (
        <Link to="/auth">
          <NavButton>{strings.loginButon}</NavButton>
        </Link>
      )}
    </>
  );
};
