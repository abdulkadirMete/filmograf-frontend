import React from "react";
import { strings } from "../../../../data/text";
import {
  Container,
  SectionHeading,
  SectionSlight,
} from "../../../../styles/globalStyles";

export const SectionDivider = ({ scrollRef }) => {
  return (
    <SectionSlight ref={scrollRef} id="divider">
      <Container>
        <SectionHeading>{strings.movies}</SectionHeading>
      </Container>
    </SectionSlight>
  );
};
