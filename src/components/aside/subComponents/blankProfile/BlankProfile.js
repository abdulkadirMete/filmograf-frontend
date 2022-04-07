import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UtilContext } from "../../../../context/utilContext/UtilContext";
import { defaultPhoto } from "../../../../data/options";
import { strings } from "../../../../data/text";
import { ProfileImage } from "../profile/ProfileStyles";
import {
  BlankEmail,
  BlankInfo,
  BlankProfileSection,
  BlankUserName,
  LoginButton,
} from "./BlankProfileStyles";

export const BlankProfile = () => {
  const { toggleAside } = useContext(UtilContext);

  return (
    <BlankProfileSection>
      <ProfileImage src={defaultPhoto}></ProfileImage>
      <BlankInfo>
        <BlankUserName>{strings.defaultUserName}</BlankUserName>
        <BlankEmail>{strings.defaultEmail}</BlankEmail>
      </BlankInfo>
      <Link to="/auth">
        <LoginButton onClick={() => toggleAside(false)}>Giriş Yap</LoginButton>
      </Link>
    </BlankProfileSection>
  );
};
