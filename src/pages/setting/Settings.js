import React, { useContext, useEffect, useRef, useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { MdNotInterested, MdPending } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  sendVerificationEmail,
  uploadUserImg,
} from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { strings } from "../../data/text";
import { purifyUserImage } from "../../helpers/helpers";
import {
  DialogButton,
  Loading,
  PageLoadingWrapper,
} from "../../styles/globalStyles";
import { AuthContainer, AuthHeading, AuthSection } from "../auth/AuthStyles";
import {
  AccountVerificationBar,
  AccountVerificationInfo,
  Avatar,
  AvatarButton,
  AvatarGroup,
  AvatarInput,
  HeadGroup,
  SettingInputGroup,
  SettingLabelSmall,
  SettingsForm,
  SettingsInputImmutable,
  SettingsLabel,
  VerifiedButton,
} from "./SettingStyles";

export const Settings = () => {
  let {
    user,
    uplaodImageLoading,
    uploadImageError,
    dispatch,
    uploadImageSuccess,
    sendMailError,
    sendMailLoading,
    sendMailSuccess,
  } = useContext(AuthContext);

  // user control
  let navigate = useNavigate();
  useEffect(() => {
    !user && navigate("/");
  }, [user]);

  // select pp
  const fileRef = useRef();
  const [SelectedImage, setSelectedImage] = useState();
  const [preview, setPreview] = useState();
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (SelectedImage) {
      const reader = new FileReader();
      reader.readAsDataURL(SelectedImage);
      reader.onloadend = () => {
        setPreview(reader.result);
      };
    } else {
      setPreview(null);
    }
  }, [SelectedImage]);

  // file select handler
  const fileSelectedHandler = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setSelectedImage(file);
    }
  };

  // upload pp
  const handleUploadUserImage = () => {
    setSubmit(true);
    uploadUserImg(preview, dispatch);
  };
  // message after upload
  useEffect(() => {
    if (uplaodImageLoading) return;
    if (uploadImageSuccess && submit) {
      toast.success(strings.changePpsuccess);
      navigate("/");
    } else if (uploadImageError) {
      toast.error(strings.uplaodPpError);
    }
    setSubmit(false);
  }, [uploadImageSuccess, uploadImageError]);

  // send verify email
  const [sendMailSubmit, setSendMailSubmit] = useState(false);

  const handleVerify = () => {
    setSendMailSubmit(true);
    sendVerificationEmail(user._id, dispatch);
  };

  // message after send mail
  useEffect(() => {
    if (sendMailLoading) return;
    if (sendMailSuccess && sendMailSubmit) {
      toast.success(strings.accountVerifyMailSent);
      navigate("/");
    } else if (sendMailError) {
      toast.error(strings.defaultError);
    }
    setSendMailSubmit(false);
  }, [sendMailSuccess, sendMailError]);

  // loading
  if (!user || uplaodImageLoading) {
    return (
      <PageLoadingWrapper>
        <Loading />
      </PageLoadingWrapper>
    );
  }
  return (
    <AuthSection>
      <AuthContainer>
        <SettingsForm>
          <AuthHeading>{strings.updateAccount}</AuthHeading>
          <AccountVerificationBar
            verified={user.verified}
            pending={sendMailSuccess}
          >
            {sendMailSuccess ? (
              <>
                <AccountVerificationInfo>
                  {strings.accountVerifyStatusSent}
                </AccountVerificationInfo>
                <MdPending />
              </>
            ) : user.verified ? (
              <>
                <AccountVerificationInfo>
                  {strings.accountVerifyStatusVerifyed}
                </AccountVerificationInfo>
                <GiConfirmed />
              </>
            ) : (
              <>
                <AccountVerificationInfo>
                  {strings.accountVerifyStatusNotVerifyed}
                </AccountVerificationInfo>
                <MdNotInterested />
              </>
            )}
          </AccountVerificationBar>
          {!user.verified && !sendMailSuccess && (
            <VerifiedButton type="button" onClick={handleVerify}>
              {strings.resendVeriyMail}
            </VerifiedButton>
          )}

          <AvatarGroup>
            <Avatar src={preview ? preview : purifyUserImage(user.img)} />
            {preview ? (
              <>
                <DialogButton type="button" onClick={handleUploadUserImage}>
                  {strings.save}
                </DialogButton>
                <DialogButton
                  cancel={true}
                  type="button"
                  onClick={() => {
                    setPreview(null);
                    setSelectedImage(null);
                  }}
                >
                  {strings.cancel}
                </DialogButton>
              </>
            ) : (
              <AvatarButton
                type="button"
                onClick={() => fileRef.current.click()}
              >
                {strings.uploadPhoto}
              </AvatarButton>
            )}
            <AvatarInput
              ref={fileRef}
              accept="image/png, image/gif, image/jpeg"
              type="file"
              onChange={fileSelectedHandler}
            />
          </AvatarGroup>
          {/* username */}
          <SettingInputGroup>
            <HeadGroup>
              <SettingsLabel>{strings.username}</SettingsLabel>
              <SettingLabelSmall>
                {strings.settingUsernameSmall}
              </SettingLabelSmall>
            </HeadGroup>
            <SettingsInputImmutable
              name="username"
              value={user.username}
              readOnly
            />
          </SettingInputGroup>
          {/* email */}
          <SettingInputGroup>
            <HeadGroup>
              <SettingsLabel>{strings.email}</SettingsLabel>
              <SettingLabelSmall>{strings.settingEmailSmall}</SettingLabelSmall>
            </HeadGroup>
            <SettingsInputImmutable name="email" value={user.email} readOnly />
          </SettingInputGroup>
        </SettingsForm>
      </AuthContainer>
    </AuthSection>
  );
};
