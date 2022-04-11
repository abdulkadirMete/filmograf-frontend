import React, { useContext, useEffect, useState } from "react";
import { BsCalendarDateFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { setRobotFilter } from "../../../../context/movieContext/apiCalls";
import { MovieContext } from "../../../../context/movieContext/MovieContext";
import { UtilContext } from "../../../../context/utilContext/UtilContext";
import {
  releaseLimitFilter,
  scrollSettings,
  years,
} from "../../../../data/options";
import { strings } from "../../../../data/text";
import { scrollToDivider } from "../../../../helpers/helpers";
import { SectionHeading } from "../../../../styles/globalStyles";
import { CommonHeader } from "../../FiltersStyles";
import { DropDown } from "../dropdown/DropDown";
import { ReleaseContainer, ReleaseItem, ReleaseSection } from "./ReleaseStyles";

export const Release = ({ mobileMenuMode }) => {
  const { dispatch: movieDispatch } = useContext(MovieContext);
  const { toggleAside } = useContext(UtilContext);
  const { release } = useParams();

  const handleReleaseClick = (e) => {
    setRobotFilter(false, movieDispatch);
    toggleAside(false);
    scrollToDivider();
  };

  // drop
  const [drop, setDrop] = useState(false);
  return (
    <ReleaseSection mobileMenuMode={mobileMenuMode}>
      {!mobileMenuMode && (
        <CommonHeader>
          <BsCalendarDateFill className="icon" />
          <SectionHeading>{strings.releaseTitle}</SectionHeading>
        </CommonHeader>
      )}
      <ReleaseContainer mobileMenuMode={mobileMenuMode}>
        {(drop ? years : years.slice(0, releaseLimitFilter)).map((year) => {
          return (
            <Link to={`/filter/release/${year}`} key={year}>
              <ReleaseItem
                mobileMenuMode={mobileMenuMode}
                className={year == release && "active"}
                onClick={handleReleaseClick}
              >
                {year}
              </ReleaseItem>
            </Link>
          );
        })}
      </ReleaseContainer>
      <DropDown
        mobileMenuMode={mobileMenuMode}
        drop={drop}
        setDrop={setDrop}
      ></DropDown>
    </ReleaseSection>
  );
};
