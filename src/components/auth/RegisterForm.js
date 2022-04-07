import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import {
  registerUser,
  unLockRedirect,
} from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { strings } from "../../data/text";
import { registerValidation } from "../../data/validation";
import { isEmpty } from "../../helpers/helpers";
import {
  AuthHeading,
  AuthInput,
  ButtonGroup,
  ErrorMessage,
  ErrorWrapper,
  Form,
  InputContainer,
} from "../../pages/auth/AuthStyles";
import {
  ButtonPrimary,
  ButtonSecondary,
  Loading,
  Text,
} from "../../styles/globalStyles";

export const RegisterForm = ({ toggleShowRegister }) => {
  //  form hook
  const formOptions = { resolver: yupResolver(registerValidation) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  // handle register
  const { user, registerLoading, registerError, dispatch } =
    useContext(AuthContext);

  const [isSubmit, setSubmit] = useState(false);
  const onSubmit = (user) => {
    registerUser(user, dispatch);
    setSubmit(true);
  };

  useEffect(() => {
    if (registerLoading || !isSubmit) return;
    if (user) {
      toast.success(`${strings.registerSuccess} ${user.username}`);
      toast.info(strings.registerConfirm);
      unLockRedirect(dispatch);
    } else {
      toast.error(registerError || strings.defaultError);
    }
    setSubmit(false);
  }, [user, registerError, isSubmit]);

  // Loading
  if (registerLoading) {
    return <Loading />;
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <AuthHeading>{strings.register}</AuthHeading>
      <InputContainer className={errors.username ? "invalid" : null}>
        <FaUser />
        <AuthInput
          placeholder={strings.username}
          name="username"
          type="text"
          {...register("username")}
        />
      </InputContainer>
      <InputContainer className={errors.email ? "invalid" : null}>
        <MdEmail />
        <AuthInput
          placeholder={strings.emailAdress}
          name="email"
          type="email"
          {...register("email")}
        />
      </InputContainer>
      <InputContainer className={errors.password ? "invalid" : null}>
        <FaLock />
        <AuthInput
          type="password"
          placeholder={strings.password}
          name="password"
          {...register("password")}
        />
      </InputContainer>

      <InputContainer className={errors.password ? "invalid" : null}>
        <FaLock />
        <AuthInput
          type="password"
          name="passwordConfirmation"
          {...register("passwordConfirmation")}
          placeholder={strings.passwordAgain}
        />
      </InputContainer>

      {/* errors */}
      {!isEmpty(errors) && (
        <ErrorWrapper>
          {errors.username && (
            <ErrorMessage>{errors.username.message}</ErrorMessage>
          )}
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
          {errors.passwordConfirmation && (
            <ErrorMessage>{errors.passwordConfirmation.message}</ErrorMessage>
          )}
        </ErrorWrapper>
      )}

      {/* end of errors */}

      <ButtonSecondary>{strings.register}</ButtonSecondary>
      <ButtonGroup>
        <Text grey={true}>{strings.alreadyMember}</Text>
        <ButtonPrimary type="button" onClick={toggleShowRegister}>
          {strings.loginButon}
        </ButtonPrimary>
      </ButtonGroup>
    </Form>
  );
};
