import React from "react";
import { strings } from "../../../../data/text";
import { NavBrandGroup, NavBrandText, NavLogo } from "./BrandStyles";

export const Brand = () => {
  return (
    <NavBrandGroup to="/">
      <NavLogo src="/images/logo2.svg" />
      <NavBrandText>{strings.brand}</NavBrandText>
    </NavBrandGroup>
  );
};
