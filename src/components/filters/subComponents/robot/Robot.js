import React, { useContext, useState } from "react";
import { AiFillRobot } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  setRobotFilter,
  setRobotFilterValues,
} from "../../../../context/movieContext/apiCalls";
import { MovieContext } from "../../../../context/movieContext/MovieContext";
import { TypeContext } from "../../../../context/typeContext/TypeContext";
import { imdbOptions, years } from "../../../../data/options";
import { strings } from "../../../../data/text";
import { scrollToDivider } from "../../../../helpers/helpers";
import { SectionHeading } from "../../../../styles/globalStyles";
import { CommonHeader } from "../../FiltersStyles";
import {
  ButtonGroup,
  RobotButton,
  RobotContainer,
  RobotOption,
  RobotSection,
  RobotSelect,
} from "./RobotStyles";

export const Robot = () => {
  const { types } = useContext(TypeContext);
  const { dispatch: movieDispatch } = useContext(MovieContext);
  const [robotType, setRobotType] = useState("");
  const [robotRelease, setRobotRelease] = useState("");
  const [robotImdb, setRobotImdb] = useState("");
  const navigate = useNavigate();

  const handleRobotReset = (e) => {
    setRobotType("");
    setRobotRelease("");
    setRobotImdb("");
  };

  const handleRobotSubmit = () => {
    setRobotFilter(true, movieDispatch);
    setRobotFilterValues(
      { type: robotType, release: robotRelease, imdb: robotImdb },
      movieDispatch
    );
    navigate(
      `/filter/robot/?type=${robotType}&release=${robotRelease}&imdb=${robotImdb}`
    );
    scrollToDivider();
  };

  return (
    <RobotSection>
      <CommonHeader>
        <AiFillRobot className="icon" />
        <SectionHeading>{strings.searchRobot}</SectionHeading>
      </CommonHeader>
      <RobotContainer>
        <RobotSelect
          name="type"
          value={robotType}
          onChange={(e) => setRobotType(e.target.value)}
        >
          <RobotOption value={""}>{strings.robotTypeTitle}</RobotOption>

          {types.map((item) => {
            return (
              <RobotOption key={item._id} value={item._id}>
                {item.title}
              </RobotOption>
            );
          })}
        </RobotSelect>

        <RobotSelect
          name="release"
          value={robotRelease}
          onChange={(e) => setRobotRelease(e.target.value)}
        >
          <RobotOption value={""}>{strings.robotReleaseTitle}</RobotOption>

          {years.map((item) => {
            return (
              <RobotOption key={item} value={item}>
                {item}
              </RobotOption>
            );
          })}
        </RobotSelect>

        <RobotSelect
          name="imdb"
          value={robotImdb}
          onChange={(e) => setRobotImdb(e.target.value)}
        >
          <RobotOption value={""}>{strings.robotImdbTitle}</RobotOption>

          {imdbOptions.map((item, index) => {
            return (
              <RobotOption key={index} value={item.value}>
                {item.label}
              </RobotOption>
            );
          })}
        </RobotSelect>
        <ButtonGroup>
          <RobotButton onClick={handleRobotSubmit}>
            {strings.robotGetButton}
          </RobotButton>
          <RobotButton onClick={handleRobotReset}>
            {strings.robotResetButton}
          </RobotButton>
        </ButtonGroup>
      </RobotContainer>
    </RobotSection>
  );
};
