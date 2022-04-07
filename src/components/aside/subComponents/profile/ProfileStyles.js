import styled from "styled-components";
import { colors } from "../../../../styles/variables";

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  color: ${colors.colorsAsideText};

  @media screen and (max-width: 468px) {
    flex-direction: column;
    row-gap: 1rem;
    text-align: center;
  }
`;

export const ProfileImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  border: 2px solid ${colors.colorWhite};
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const UserName = styled.span`
  text-transform: capitalize;
  font-weight: 600;
  color: white;
  font-size: 1.4rem;
`;

export const UserEmail = styled.span``;
