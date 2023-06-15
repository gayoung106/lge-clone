import React from "react";
import {
  ButtonWrap,
  SlideControls,
  Constrols,
  BeforeButton,
  SlidePages,
  AfterButton,
  StopButton,
  Count,
} from "../styles/Carousel";

const SlideButton = () => {
  return (
    <ButtonWrap>
      <SlideControls>
        <Constrols>
          <BeforeButton></BeforeButton>
          <SlidePages>
            <strong></strong>
            <Count>10</Count>
          </SlidePages>
          <AfterButton></AfterButton>
        </Constrols>
      </SlideControls>
      <StopButton></StopButton>
    </ButtonWrap>
  );
};

export default SlideButton;
