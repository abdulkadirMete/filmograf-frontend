import styled from "styled-components";
import { Container } from "../../../../styles/globalStyles";
import { colors, shadows } from "../../../../styles/variables";

export const SubmenuContainer = styled(Container)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 4;
  background: ${colors.colorAsideTry};
  transform: translateX(-200%);
  padding: 2rem 1rem;
  transition: all 0.5s ease-in-out;

  &.active {
    transform: translateX(0%);
  }
`;

export const SubmenuContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
  height: calc(100% - 70px);
  overflow-y: auto;

  /* padding for last element */
  #container > :last-child {
    margin-bottom: 2rem;
  }

  /* hide scrollbar  */
  &::-webkit-scrollbar {
    display: none;
  }
`;

// heading
export const SubmenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubmenuHeading = styled.span`
  margin-right: auto;
  padding-bottom: 0.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-shadow: ${shadows.fancyTextshadow};
  color: ${colors.colorNavLinks};
`;
