import React from "react";
import { SectionWrap, Sections } from "../styles/Section";
import Titles from "../atoms/Titles";

const Section = (props) => {
  const { content, sub } = props;
  return (
    <SectionWrap>
      <Sections>
        <Titles content={content} sub={sub} />
      </Sections>
    </SectionWrap>
  );
};

export default Section;
