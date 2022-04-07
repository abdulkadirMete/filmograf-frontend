import React, { useContext, useState } from "react";
import { LoginForm } from "../../components/auth/LoginForm";
import { RegisterForm } from "../../components/auth/RegisterForm";
import { UtilContext } from "../../context/utilContext/UtilContext";
import { AuthContainer, AuthSection } from "./AuthStyles";

export const Auth = () => {
  // login register switch
  const { showRegister, toggleShowRegister } = useContext(UtilContext);

  return (
    <AuthSection>
      <AuthContainer>
        {showRegister ? (
          <RegisterForm toggleShowRegister={() => toggleShowRegister(false)} />
        ) : (
          <LoginForm toggleShowRegister={() => toggleShowRegister(true)} />
        )}
      </AuthContainer>
    </AuthSection>
  );
};
