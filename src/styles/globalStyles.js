import { borders, colors, shadows } from "./variables";
import styled, { createGlobalStyle, css, keyframes } from "styled-components";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

const GlobalStyle = createGlobalStyle`

/* scrollbar */

*::-webkit-scrollbar {
    width: 7px;
    height: 7px;
}

*::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
}

*::-webkit-scrollbar-thumb {
    background: ${colors.colorWhiteInnerLight};
    border: 1px solid ${colors.colorWhiteInnerLight};
    /* border-radius:${borders.borderSm}; */
    transition: .5s;
}

*::-webkit-scrollbar-thumb:hover {
    background: ${colors.colorWhiteInner};
}

*::-webkit-scrollbar-thumb:active {
    background: ${colors.colorWhiteInner};
}

*::-webkit-scrollbar-track {
    background: ${colors.colorNavLinks};
    border-left: 1px solid ${colors.colorWhiteInnerLight};
    border-radius: 0;
}

*::-webkit-scrollbar-track:hover {
    background: #d9d9d9;
}

*::-webkit-scrollbar-track:active {
    background: #d9d9d9;
}

*::-webkit-scrollbar-corner {
    background: transparent;
}

/* end of scroolbar */

/* chrome auto fill problem */
/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px ${colors.colorLoginInput} inset;
  box-shadow: 0 0 0px 1000px ${colors.colorLoginInput} inset;
  -webkit-text-size-adjust: 1.2rem;
  transition: background-color 5000s ease-in-out 0s;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
}

body{
  background-color:${colors.colorMainBg} ;
  max-width: 1680px;
  margin: 0 auto;
}

a{
    text-decoration: none;
}
ul{
    list-style: none;
}

svg{
  cursor: pointer;
}

// aside close icon
.close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: ${colors.colorsAsideText};
  font-size: 2rem;
}


`;
// container
export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 70px;
  @media screen and (max-width: 968px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 25px;
  }

  @media screen and (max-width: 468px) {
    padding: 0 1rem;
  }
`;

// section
export const Section = styled.div`
  padding: 90px 0px;

  @media screen and (max-width: 968px) {
    padding: 70px 0px;
  }

  @media screen and (max-width: 768px) {
    padding: 40px 0px;
  }

  @media screen and (max-width: 468px) {
    padding: 20px 0px;
  }
`;

// heading
export const Heading = styled.h1`
  font-size: clamp(2rem, 6.5vw, 4rem);
  color: #c8c8c8;
  font-family: Arial, Helvetica, sans-serif;
`;

export const InnerHeading = styled.span`
  color: ${colors.colorWhite};
  letter-spacing: 2px;
  font-size: 1.2rem;
`;

export const SectionHeading = styled.h3`
  color: ${colors.colorSlightSectionTexts};
  letter-spacing: 2px;
`;

export const SectionSlight = styled.div`
  height: 55px;
  background-color: ${colors.colorScreenSlightBox};
  width: 100%;
  margin: 40px 0;
  box-shadow: ${shadows.shadow3d};
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-size: ${({ showcase }) => (showcase ? "18px" : "15px")};
  color: ${({ grey }) => (grey ? "#626881" : "#fff")};
  letter-spacing: 1px;
  margin: 0.5rem 0;
`;

// buttons

export const ButtonPrimary = styled.button`
  background-color: ${colors.colorButton};
  border: none;
  color: ${colors.colorButtonText};
  padding: 0.5rem 0.75rem;
  letter-spacing: 1px;
  border-radius: ${borders.borderSm};

  &:hover {
    background-color: ${colors.colorButtonHover};
  }
`;

export const ButtonSecondary = styled.button`
  color: ${colors.colorButtonText};
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: transparent;
  border-radius: ${borders.borderSm};
  border: ${borders.secondaryButtonBorder};

  &:hover {
    background-color: ${colors.colorMainBgButtonHover};
  }
`;

export const ButtonThird = styled.button`
  text-transform: uppercase;
  padding: 1rem 4rem;
  background-color: ${colors.colorButton};
  letter-spacing: 2px;
  font-size: 0.7rem;
  border: none;
  color: ${colors.colorWhite};
  font-weight: 600;
  border-radius: 9rem;
  transition: all 0.1s linear;
  &:hover {
    color: ${colors.colorMobileBlue};
    box-shadow: ${shadows.rateButtonShadow};
  }
`;

// filter header
export const FilterHeader = styled.header`
  height: 40px;
  background-color: ${colors.colorScreenSlightBox};
  width: 100%;
  margin-bottom: 3px;
  border-radius: ${borders.borderMd};
`;

// loading
export const PageLoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.div`
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  border-radius: 50%;
  border: 3px solid #1d1d1d;
  border-top-color: ${colors.colorLogo};
  animation: spinner 0.6s linear infinite;

  @media screen and (max-width: 768px) {
    width: 4rem;
    height: 4rem;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

// loading dot
export const LoadingDot = styled.div`
  margin: 0 auto;
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ secondary }) =>
    secondary ? colors.colorLogo : colors.colorMobileBlue};

  color: ${({ secondary }) =>
    secondary ? colors.colorLogo : colors.colorMobileBlue};
  animation: dotElastic 1s infinite linear;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &::before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${({ secondary }) =>
      secondary ? colors.colorLogo : colors.colorMobileBlue};
    color: ${({ secondary }) =>
      secondary ? colors.colorLogo : colors.colorMobileBlue};
    animation: dotElasticBefore 1s infinite linear;
  }

  &::after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${({ secondary }) =>
      secondary ? colors.colorLogo : colors.colorMobileBlue};
    color: ${({ secondary }) =>
      secondary ? colors.colorLogo : colors.colorMobileBlue};
    animation: dotElasticAfter 1s infinite linear;
  }

  @keyframes dotElasticBefore {
    0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1.5);
    }
    50% {
      transform: scale(1, 0.67);
    }
    75% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  @keyframes dotElastic {
    0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1, 1.5);
    }
    75% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  @keyframes dotElasticAfter {
    0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1, 0.67);
    }
    75% {
      transform: scale(1, 1.5);
    }
    100% {
      transform: scale(1, 1);
    }
  }
`;

export const DialogButton = styled.button`
  font-family: "Open Sans";
  color: ${colors.colorWhite};
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${borders.borderMd};
  border: none;
  line-height: 40px;
  transition: ease-in-out 0.2s;
  padding: 0 1.2rem;
  background-color: ${({ cancel }) =>
    cancel ? colors.colorFailRed : colors.colorSuccessGreen};
  opacity: 0.8;

  &:hover {
    transform: scale(1.02);
    opacity: 1;
  }
`;

// active box
export const ActiveBoxStyle = css`
  background: ${colors.colorLogo};
  color: ${colors.colorPaginateItemActive};
  font-weight: 600;
`;

// custom toast
export const CustomToast = styled(ToastContainer)`
  .Toastify__toast {
    background-color: ${colors.colorWhiteInner};
  }

  .Toastify__progress-bar {
    background-color: ${({ isSecondary }) =>
      isSecondary ? colors.colorMobileBlue : colors.colorLogo};
  }
`;

// hr
export const Strip = styled.hr`
  border: none;
  height: 1px;
  background: ${colors.colorAsideBorder};
  margin: 20px 0;
  /* margin-top: 1rem; */
`;

// animation wrapper
export const AnimationWrapper = styled(motion.div)`
  margin-right: auto;
`;

// skeleton image box

export const Shimmer = keyframes`
    100% {
      transform: translateX(100%);
    } 
`;

export const SkeletonImage = styled.span`
  display: inline-block;
  height: 1em;
  position: relative;
  overflow: hidden;
  background-color: #dddbdd;

  @keyframes load {
    from {
      left: -150px;
    }
    to {
      left: 100%;
    }
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(
      to right,
      transparent 0%,
      #2d313d 50%,
      transparent 100%
    );
    animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

export default GlobalStyle;
