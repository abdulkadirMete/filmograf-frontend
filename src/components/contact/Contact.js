import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import { UtilContext } from "../../context/utilContext/UtilContext";
import { mountAnimation } from "../../data/animation";
import { strings } from "../../data/text";
import { contactValidation } from "../../data/validation";
import { isEmpty } from "../../helpers/helpers";
import { ErrorMessage, ErrorWrapper } from "../../pages/auth/AuthStyles";
import { Loading } from "../../styles/globalStyles";
import {
  ContactButton,
  ContactContainer,
  ContactForm,
  ContactHeading,
  ContactInput,
  ContactSection,
  TextArea
} from "./ContactStyles";


export const Contact = () => {
  // show contact
  const {
    toggleContact,
    sendMailSuccess,
    sendMailError,
    sendMail,
    sendMailLoading,
  } = useContext(UtilContext);

  const modalRef = useRef();

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      toggleContact(false);
    }
  };

  // form hook
  const [isSubmit, setSubmit] = useState(false);

  const formOptions = { resolver: yupResolver(contactValidation) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (message) => {
    sendMail(message);
    setSubmit(true);
  };

  useEffect(() => {
    if (sendMailLoading || !isSubmit) return;
    if (sendMailSuccess) {
      toast.success(strings.messageSuccess);
    } else {
      toast.error(sendMailError || strings.defaultError);
    }
    toggleContact(false);
    setSubmit(false);
  }, [isSubmit, sendMailError, sendMailLoading]);

  return (
    <ContactSection onClick={closeModal} ref={modalRef}>
      {sendMailLoading ? (
        <Loading />
      ) : (
        <ContactContainer
          variants={mountAnimation}
          animate="animate"
          initial="initial"
        >
          <MdClose className="close" onClick={() => toggleContact(false)} />
          <ContactForm onSubmit={handleSubmit(onSubmit)}>
            <ContactHeading>Bize Ulaş</ContactHeading>
            <ContactInput
              placeholder="İsim"
              name={strings.name}
              type="text"
              {...register("name")}
            ></ContactInput>
            <ContactInput
              placeholder={strings.email}
              name="email"
              type="email"
              {...register("email")}
            ></ContactInput>
            <ContactInput
              placeholder={strings.header}
              name="subject"
              type="text"
              {...register("subject")}
            ></ContactInput>
            <TextArea
              placeholder={strings.message}
              name="message"
              {...register("message")}
            ></TextArea>

            {/* errors */}
            {!isEmpty(errors) && (
              <ErrorWrapper>
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
                {errors.subject && (
                  <ErrorMessage>{errors.subject.message}</ErrorMessage>
                )}
                {errors.message && (
                  <ErrorMessage>{errors.message.message}</ErrorMessage>
                )}
              </ErrorWrapper>
            )}
            {/* end of errors */}

            <ContactButton type="submit">{strings.send}</ContactButton>
          </ContactForm>
        </ContactContainer>
      )}
    </ContactSection>
  );
};
