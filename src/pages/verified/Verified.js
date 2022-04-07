import React, { useContext, useEffect } from "react";
import { ImBlocked } from "react-icons/im";
import { MdOutlineVerified } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { logout, verifyUser } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { strings } from "../../data/text";
import { InnerHeading, Loading, LoadingDot } from "../../styles/globalStyles";
import { VerifiedContainer, VerifiedHeading } from "./VerifiedStyles";

export const Verified = () => {
  const { dispatch, verifyLoading, verifySuccess } = useContext(AuthContext);
  const { id, token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    verifyUser(id, token, dispatch);
    handleRedirect();
  }, []);

  const handleRedirect = () => {
    setTimeout(() => {
      logout(dispatch);
      navigate("/auth");
    }, 4000);
  };

  if (verifyLoading) {
    return <Loading />;
  }

  return (
    <VerifiedContainer>
      {verifySuccess ? (
        <>
          <MdOutlineVerified className="success" />
          <VerifiedHeading>{strings.accountVerify}</VerifiedHeading>
        </>
      ) : (
        <>
          <ImBlocked className="fail" />
          <VerifiedHeading>{strings.defaultError}</VerifiedHeading>
        </>
      )}
      <InnerHeading>{strings.redirectHomePage}</InnerHeading>
      <LoadingDot />
    </VerifiedContainer>
  );
};
