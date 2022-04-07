import styled from "styled-components";
import {
  ButtonSecondary,
  SkeletonImage,
} from "../../../../styles/globalStyles";
import { borders, colors, shadows } from "../../../../styles/variables";

export const DetailImgGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    margin-top: 40px;
  }
`;

export const DetailImgWrapper = styled.div`
  margin: 0 auto;
  position: relative;

  & > svg {
    font-size: 2.5rem;
    position: absolute;
    top: 10px;
    left: 0.5rem;
    color: ${colors.colorWhite};

    &.active {
      color: ${colors.colorMobileBlue};
    }
  }
`;

export const DetailImg = styled.img`
  height: 375px;
  border: ${borders.itemBorder};
  border-radius: ${borders.borderMd};
  box-shadow: ${shadows.shadow3d};
  margin: 0 auto;
  display: ${({ imageLoaded }) => (imageLoaded ? "block" : "none")};
`;

export const SkeletonPlaceHolder = styled(SkeletonImage)`
  border-radius: ${borders.borderMd};
  background-color: ${colors.colorLastCommentsBg};
  width: 240px;
  height: 365px;
  display: ${({ imageLoaded }) => (!imageLoaded ? "block" : "none")};
`;

export const BookmarkButton = styled(ButtonSecondary)`
  border-radius: ${borders.borderMd};
  border: ${borders.heroSignUpButtonBorder};
  color: ${colors.colorHeroSignUpButton};
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 18px;

  &:hover {
    background-color: ${colors.colorHeroSignUpButtonHover};
  }
  &.active {
    color: ${colors.colorWhite};
    background-color: ${colors.colorImdbBox};

    &:hover {
      background-color: ${colors.colorLogo};
    }
  }
`;
