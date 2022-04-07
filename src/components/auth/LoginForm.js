import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";
import { login, unLockRedirect } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { strings } from "../../data/text";
import { loginValidation } from "../../data/validation";
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

export const LoginForm = ({ toggleShowRegister }) => {
  // form hook
  const formOptions = { resolver: yupResolver(loginValidation) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  // handle login
  const { user, loginLoading, error, dispatch } = useContext(AuthContext);

  const [isSubmit, setSubmit] = useState(false);
  const onSubmit = (user) => {
    login(user, dispatch);
    setSubmit(true);
  };

  useEffect(() => {
    if (loginLoading || !isSubmit) return;
    if (user) {
      toast.success(`${strings.loginSuccess}${user.username}`);
      unLockRedirect(dispatch);
    } else {
      toast.error(error || strings.defaultError);
    }
    setSubmit(false);
  }, [user, error, isSubmit]);

  // Loading
  if (loginLoading) {
    return <Loading />;
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <AuthHeading>{strings.login}</AuthHeading>
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

      {/* errors */}
      {!isEmpty(errors) && (
        <ErrorWrapper>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </ErrorWrapper>
      )}
      {/* end of errors */}

      <ButtonSecondary type="submit">{strings.loginButon}</ButtonSecondary>
      <ButtonGroup>
        <Text grey={true}>{strings.notMember}</Text>
        <ButtonPrimary type="button" onClick={toggleShowRegister}>
          {strings.register}
        </ButtonPrimary>
      </ButtonGroup>
    </Form>
  );
};
