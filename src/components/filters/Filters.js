import React from "react";
import { Sidebar, SidebarContainer } from "./FiltersStyles";
import { LastComments } from "./subComponents/lastComments/LastComments";
import { Release } from "./subComponents/release/Release";
import { Robot } from "./subComponents/robot/Robot";
import { Type } from "./subComponents/type/Type";

export const Filters = () => {
  return (
    <Sidebar>
      <SidebarContainer>
        <LastComments />
        <Robot />
        <Type />
        <Release />
      </SidebarContainer>
    </Sidebar>
  );
};
