import styled from "styled-components";
import { ProfileImage } from "../../components/aside/subComponents/profile/ProfileStyles";
import { ContactInput } from "../../components/contact/ContactStyles";
import { ButtonSecondary, ButtonThird } from "../../styles/globalStyles";
import { borders, colors } from "../../styles/variables";
import { Form } from "../auth/AuthStyles";

export const SettingsForm = styled(Form)`
  width: 800px;
`;

// input
export const SettingsInputImmutable = styled(ContactInput)`
  cursor: no-drop;
  color: ${colors.colorNavLinks};
`;

export const SettingInputGroup = styled.div`
  display: flex;
  row-gap: 5px;
  flex-direction: column;
`;

export const SettingsInput = styled(ContactInput)``;

export const HeadGroup = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: end;
`;

export const SettingsLabel = styled.label`
  color: ${colors.colorLabel};
`;

export const SettingLabelSmall = styled.small`
  color: ${colors.colorLabelSmall};
  font-size: 10px;
`;

// verified
export const AccountVerificationBar = styled.div`
  height: 50px;
  background-color: ${({ verified }) =>
    verified ? colors.colorSuccessGreen : colors.colorFailRed};
  background-color: ${({ pending }) => pending && colors.colorPendingYellow};
  border-radius: ${borders.borderMd};
  color: white;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;

  & > svg {
    font-size: 2rem;
  }
`;

export const AccountVerificationInfo = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const VerifiedButton = styled(ButtonSecondary)`
  letter-spacing: 2px;
`;

// avatar

export const AvatarGroup = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

export const AvatarButton = styled(ButtonThird)`
  border-radius: ${borders.borderMd};
`;

export const AvatarInput = styled.input`
  display: none;
`;

export const Avatar = styled(ProfileImage)`
  width: 100px;
  height: 100px;
  border-radius: ${borders.borderMd};
`;
