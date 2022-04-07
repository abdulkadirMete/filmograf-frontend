import styled from "styled-components";
import { FilterHeader } from "../../styles/globalStyles";
import { colors } from "../../styles/variables";

export const Sidebar = styled.aside``;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  @media screen and (max-width: 968px) {
    display: none;
  }
`;

// common header
export const CommonHeader = styled(FilterHeader)`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  .icon {
    font-size: 1.8rem;
    color: ${colors.colorLogo};
  }
`;
