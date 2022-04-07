import styled from "styled-components";
import { ButtonPrimary, Loading, Text } from "../../../../styles/globalStyles";
import { borders, colors } from "../../../../styles/variables";

export const UserProfilGroup = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
  padding: 0.3rem 0.5rem;
  border-radius: ${borders.borderMd};
  position: relative;

  @media screen and (max-width: 968px) {
    display: none;
  }

  svg {
    font-size: 1rem;
  }

  &:hover {
    background-color: ${colors.colorProfilHover};
    & #menu {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &::after {
    content: "";
    top: 100%;
    left: 0;
    width: 100%;
    height: 5px;
    position: absolute;
  }
`;

export const UserPhoto = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserName = styled(Text)`
  color: ${colors.colorNavLinks};
`;

export const ProfileMenu = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 5px;
  top: 100%;
  left: 0;
  padding: 0.75rem 1rem;
  background-color: ${colors.colorWhiteInner};
  border-radius: ${borders.borderSm};
  display: none;
  row-gap: 1rem;
  flex-direction: column;
  transition: all 0.3s ease-in;
  cursor: pointer;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    display: flex;
  }
`;

export const ProfileMenuGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  column-gap: 0.5rem;
`;

export const ProfileMenuText = styled.span`
  color: ${colors.colorNavLinks};
`;

export const NavButton = styled(ButtonPrimary)`
  @media screen and (max-width: 968px) {
    display: none;
  }
`;

export const SearchLoading = styled(Loading)`
  width: 2rem;
  height: 2rem;
`;
