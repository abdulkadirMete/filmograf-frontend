import React from "react";
import { strings } from "../../../../data/text";
import { NavBrandGroup, NavBrandText, NavLogo } from "./BrandStyles";

export const Brand = () => {
  return (
    <NavBrandGroup to="/">
      <NavLogo src="/images/logo2.svg" alt="logo" />
      <NavBrandText>{strings.brand}</NavBrandText>
    </NavBrandGroup>
  );
};
