import styled from "styled-components";
import { ButtonPrimary, Loading } from "../../../../styles/globalStyles";
import { borders, colors } from "../../../../styles/variables";

export const SearchWrapper = styled.div`
  & > svg {
    width: 32px;
    height: 32px;
    display: none;

    @media screen and (max-width: 568px) {
      display: block;
    }
  }
`;

export const NavSearchGroup = styled.div`
  background-color: ${colors.colorWhiteInner};
  border-radius: ${borders.borderSm};
  display: flex;
  padding-left: 0.5rem;
  column-gap: 0.5rem;
  align-items: center;
  position: relative;
  width: 330px;

  @media screen and (max-width: 768px) {
    width: 250px;
  }

  @media screen and (max-width: 568px) {
    display: none;
  }

  & > svg {
    color: ${colors.colorNavLinks};
    cursor: pointer;
    font-size: 1rem;
  }

  //mobile search
  &.mobileSearch {
    display: flex;
    position: fixed;
    left: 0;
    top: 80px;
    width: 100%;
  }
`;

export const NavSearch = styled.input`
  background-color: transparent;
  padding: 0.5rem 0;
  border: none;
  color: ${colors.colorWhite};
  font-size: 14px;
  font-weight: 500;

  &:focus {
    outline: none;
  }
`;

//  search results
export const NavSearchResults = styled.div`
  width: 100%;
  background-color: ${colors.colorWhiteInner};
  position: absolute;
  top: 120%;
  right: 0;
  border-radius: ${borders.borderSm};
  padding: 0.5rem;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  transition: all 0.3s ease-in;

  overflow-y: scroll;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid black;
  }

  @media screen and (max-width: 768px) {
    right: 0;
    width: 330px;
  }

  &.mobileSearch {
    width: 100%;
  }
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
