import { motion } from "framer-motion";
import styled from "styled-components";
import {
  ButtonSecondary
} from "../../styles/globalStyles";
import { borders, colors } from "../../styles/variables";

export const ContactSection = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: center;
  background-color: ${colors.colorDarkTransparentBackground};
  z-index: 99;
`;

export const ContactContainer = styled(motion.div)`
  padding: 2rem;
  width: 600px;
  border-radius: ${borders.borderL};
  background-color: ${colors.colorLoginCart};
  position: relative;

  @media screen and (max-width: 668px) {
    width: 100%;
  }
`;

export const ContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const ContactInput = styled.input`
  background-color: ${colors.colorLoginInput};
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  border-radius: ${borders.borderMd};
  height: 50px;
  color: ${colors.colorWhite};
  font-size: 1.2rem;
  font-weight: 500;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  border-radius: ${borders.borderMd};
  background-color: ${colors.colorLoginInput};
  padding: 0.75rem 0.5rem;
  font-size: 1.2rem;
  height: 100px;
  font-weight: 500;
  border: none;
  resize: none;
  color: ${colors.colorWhite};

  &:focus {
    outline: none;
  }
`;

export const ContactHeading = styled.h1`
  font-size: 2rem;
  color: white;
`;

export const ContactButton = styled(ButtonSecondary)``;
