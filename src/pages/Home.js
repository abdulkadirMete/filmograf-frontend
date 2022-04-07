import React, { useContext, useEffect } from "react";
import { useInView } from "react-hook-inview";
import { Footer } from "../components/footer/Footer";
import { Hero } from "../components/hero/Hero";
import { Movies } from "../components/movies/Movies";
import { UtilContext } from "../context/utilContext/UtilContext";

export const Home = () => {
  // toggle nav
  const { toggleNav } = useContext(UtilContext);
  const [navHideRef, isVisible] = useInView({
    threshold: 0.2,
    rootMargin: "16px",
  });

  useEffect(() => {
    toggleNav(isVisible);
  }, [isVisible]);
  return (
    <>
      <Hero navHideProp={navHideRef} />
      <Movies />
      <Footer />
    </>
  );
};
