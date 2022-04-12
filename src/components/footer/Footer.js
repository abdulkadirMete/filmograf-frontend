import React from "react";
import { footerLinks } from "../../data/item";
import { strings } from "../../data/text";
import {
  CopyRight,
  FooterContainer,
  FooterContent,
  FooterLink,
  FooterLinkGroup,
  FooterSection,
  FooterStrip,
} from "./FooterStyles";

export const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterContent>
          <FooterLinkGroup>
            {footerLinks.map((item, index) => {
              return (
                <FooterLink target="_blank" key={index} href={item.link} >
                  {item.icon}
                </FooterLink>
              );
            })}
          </FooterLinkGroup>
        </FooterContent>
        <FooterStrip />
        <FooterContent>
          <CopyRight>{strings.copyRightText}</CopyRight>
        </FooterContent>
      </FooterContainer>
    </FooterSection>
  );
};
