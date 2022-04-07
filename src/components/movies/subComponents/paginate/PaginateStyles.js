import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { ActiveBoxStyle, ButtonPrimary } from "../../../../styles/globalStyles";
import { borders, colors, shadows } from "../../../../styles/variables";

//pages reactpaginate
export const Pages = styled(ReactPaginate)`
  display: flex;
  color: white;
  cursor: pointer;
  margin: 70px 0;
  column-gap: 0.5rem;
  justify-content: center;
  align-items: center;

  /* previous next */
  .previous,
  .next {
    background: ${colors.colorPaginateItem};
    border: none;
    color: ${colors.colorButtonText};
    padding: 0.5rem 0.75rem;
    letter-spacing: 1px;
    border-radius: ${borders.borderSm};
    box-shadow: ${shadows.shadow3d};

    &.disabled {
      opacity: 0.6;
      color: ${colors.colorNavLinks};
      box-shadow: none;
    }

    &:hover {
      background-color: ${colors.colorButtonHover};
    }
  }
  /* page item */
  .pageItem {
    background: ${colors.colorPaginateItem};
    border-radius: ${borders.borderMd};
    box-shadow: ${shadows.shadow3d};
    width: 50px;
    height: 45px;

    &:hover {
      transform: scale(1.2);
    }

    &.active {
      color: black;
      font-weight: 600;
      background: ${colors.colorLogo};
    }

    /* handle length for responsive */

    @media screen and (max-width: 768px) {
      display: none;
      &.active {
        display: block;
      }
    }
  }

  .break {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  /* links */
  .link {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// next and previous buttons
export const NavigationGroup = styled.div`
  display: flex;
  column-gap: 0.5rem;
  margin: 70px auto;
  align-items: center;
`;

export const NavigationButton = styled(ButtonPrimary)`
  background: ${colors.colorPaginateItem};
  border: none;
  color: ${colors.colorButtonText};
  padding: 0.5rem 0.75rem;
  letter-spacing: 1px;
  border-radius: ${borders.borderSm};
  box-shadow: ${shadows.shadow3d};
  &.disabled {
    opacity: 0.6;
    color: ${colors.colorNavLinks};
    box-shadow: none;
  }
`;

export const CurrentPage = styled.span`
  ${ActiveBoxStyle}
  box-shadow: ${shadows.shadow3d};
  padding: 0.75rem 1rem;
  border-radius: ${borders.borderMd};
`;
