import React from "react";
import { movieBottomGuide } from "../../../../data/options";
import {
  AltInfo,
  AltInfoContainer,
  AltInfoGroup,
  AltInfoHeading,
  BottomInfo,
  Summary,
  SummaryContainer,
} from "./MovieBottomInfoStyles";

export const MovieBottomInfo = (prop) => {
  return (
    <BottomInfo>
      <SummaryContainer>
        <Summary>
          {prop.desc?.map((item) => {
            return item;
          })}
        </Summary>
      </SummaryContainer>
      {movieBottomGuide.map((field, index) => {
        return (
          <AltInfoContainer key={index}>
            <AltInfoGroup>
              <AltInfoHeading>{field.heading}</AltInfoHeading>
              {field.isArray ? (
                <AltInfo>
                  {prop[field.title]?.map((item) => {
                    return `${item} , `;
                  })}
                </AltInfo>
              ) : (
                <AltInfo>{prop[field.title]}</AltInfo>
              )}
            </AltInfoGroup>
          </AltInfoContainer>
        );
      })}
    </BottomInfo>
  );
};
