import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { dropdownScrollAmount } from "../../../../data/options";
import { DropDownIconWrapper } from "./DropDownStyles";
const Scroll = require("react-scroll");
const scroll = Scroll.animateScroll;

export const DropDown = ({ drop, setDrop, mobileMenuMode }) => {
  // drop down scroll
  const handleDrop = () => {
    setDrop(!drop);

    // if not mobile menu then scroll
    if (!mobileMenuMode) {
      drop
        ? scroll.scrollMore(-dropdownScrollAmount)
        : scroll.scrollMore(dropdownScrollAmount);
    }
  };

  return (
    <DropDownIconWrapper
      animate={{
        rotate: drop ? 180 : 0,
      }}
      transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
      onClick={() => handleDrop()}
    >
      <FaChevronDown />
    </DropDownIconWrapper>
  );
};
