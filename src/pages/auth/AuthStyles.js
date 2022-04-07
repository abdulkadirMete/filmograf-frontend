import styled from "styled-components";
import { Container, Section } from "../../styles/globalStyles";
import { borders, colors } from "../../styles/variables";

export const AuthSection = styled(Section)`
  height: 100vh;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.95)),
    url("/images/login2.webp");
  background-position: center;
  background-size: cover;
`;

export const AuthContainer = styled(Container)`
  padding-top: 80px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// form
export const Form = styled.form`
  display: flex;
  border-radius: ${borders.borderMd};
  flex-direction: column;
  row-gap: 1.5rem;
  width: 500px;
  background-color: ${colors.colorLoginCart};
  padding: 2rem;

  @media screen and (max-width: 568px) {
    width: 100%;
    row-gap: 1rem;
  }
`;

export const AuthHeading = styled.h1`
  margin-right: auto;
  font-size: 2rem;
  color: white;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid ${colors.colorNavLinks};
`;

// input
export const InputContainer = styled.div`
  background-color: ${colors.colorLoginInput};
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  border-radius: ${borders.borderMd};
  height: 50px;
  svg {
    color: ${colors.colorNavLinks};
    font-size: 1.5rem;
  }

  &.invalid {
    border: 2px solid ${colors.colorError};
  }

  @media screen and (max-width: 568px) {
    height: 40px;
  }
`;

export const AuthInput = styled.input`
  flex: 1;
  height: 100%;
  background-color: transparent;
  border: none;
  color: ${colors.colorWhite};
  font-size: 1.2rem;
  font-weight: 500;
  padding-left: 0.5rem;
  &:focus {
    outline: none;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  column-gap: 1rem;
`;

// errors
export const ErrorMessage = styled.span`
  color: ${colors.colorError};
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

export const ErrorWrapper = styled.div`
  span {
    display: none;
    transition: all 0.5s linear;
  }
  & span:first-child {
    display: block;
  }
`;
