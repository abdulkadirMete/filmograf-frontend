import React from "react";
import { Container, Heading, Section } from "../styles/globalStyles";
import styled from "styled-components";

export const NotFound = () => {
  return (
    <NotFoundSection>
      <NotFoundContainer>
        <ContentWrapper>
          <NotFoundImg src="https://media.giphy.com/media/A9EcBzd6t8DZe/giphy.gif" />
        </ContentWrapper>
        <ContentWrapper>
          <NotFoundHeading>ARADIĞINIZ SAYFA BULUNAMADI!!</NotFoundHeading>
        </ContentWrapper>
      </NotFoundContainer>
    </NotFoundSection>
  );
};

export const NotFoundSection = styled(Section)`
  height: calc(100vh - 80px);
  margin-top: 80px;
`;

export const NotFoundContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  row-gap: 40px;
`;

export const NotFoundImg = styled.img`
  width: 320px;
  margin-left: auto;
  margin-right: 100px;

  @media screen and (max-width: 1068px) {
    margin-right: 0px;
  }

  @media screen and (max-width: 568px) {
    margin-top: auto;
    width: 180px;
    height: 170px;
  }
`;

export const NotFoundHeading = styled(Heading)`
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;
