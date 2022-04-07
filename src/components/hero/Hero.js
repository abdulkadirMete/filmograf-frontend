import React from "react";
import "slick-carousel/slick/slick-theme.css";
// slider
import "slick-carousel/slick/slick.css";
import {
  HeroContainer,
  HeroImage,
  HeroLeft,
  HeroRight,
  HeroSection,
} from "./HeroStyles";
import { Showcase } from "./subComponents/showcase/Showcase";
import { Slider } from "./subComponents/slider/Slider";

export const Hero = ({ navHideProp }) => {
  return (
    <HeroSection ref={navHideProp}>
      <HeroImage src="/images/hero.webp" />
      <HeroContainer>
        {/* left */}
        <HeroLeft>
          <Showcase />
        </HeroLeft>
        {/* right */}
        <HeroRight>
          <Slider />
        </HeroRight>
        {/* contact */}
      </HeroContainer>
    </HeroSection>
  );
};

// slider
