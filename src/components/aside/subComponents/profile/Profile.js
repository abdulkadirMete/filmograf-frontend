import React from "react";
import { purifyUserImage } from "../../../../helpers/helpers";
import {
  ProfileImage,
  ProfileInfo,
  ProfileSection,
  UserEmail,
  UserName,
} from "./ProfileStyles";

export const Profile = ({ img, email, username }) => {
  return (
    <ProfileSection>
      <ProfileImage src={purifyUserImage(img)}></ProfileImage>
      <ProfileInfo>
        <UserName>{`@${username}`}</UserName>
        <UserEmail>{email}</UserEmail>
      </ProfileInfo>
    </ProfileSection>
  );
};
