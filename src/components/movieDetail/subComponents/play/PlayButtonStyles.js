import styled, { keyframes } from "styled-components";
import { borders, colors, shadows } from "../../../../styles/variables";

// pulse key frame
export const pulse = keyframes`
0% {
		transform: scale(0.98);
		box-shadow: ${shadows.playButtonShadow2}
	}

	70% {
		transform: scale(1);
		box-shadow: ${shadows.playButtonShadow}
	}

	100% {
		transform: scale(0.98);
		box-shadow: ${shadows.playButtonShadow2}
	}

`;

export const PlayButtonContainer = styled.div`
  position: fixed;
  bottom: 1.5rem;
  right: 2.5rem;
  z-index: 5;
  background-color: ${colors.colorLogo};
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: ${borders.itemBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation: ${pulse} 2s infinite;

  & > svg {
    font-size: 2rem;
    color: ${colors.colorWhite};
    margin-left: 5px;
  }

  &:hover {
    animation: none;
    box-shadow: ${shadows.playButtonHover};
  }

  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
    right: 1.5rem;
  }
`;
