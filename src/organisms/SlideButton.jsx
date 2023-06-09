import React from "react";

import {
  ButtonWrap,
  SlideControls,
  Controls,
  BeforeButton,
  SlidePages,
  AfterButton,
  StopButton,
  Strong,
  Count,
} from "../styles/Carousel";

const SlideButton = ({
  currentSlide,
  handlePrev,
  handleNext,
  handleStop,
  autoplay,
  sliderRef,
}) => {
  const handlePlay = () => {
    handleStop();
  };
  return (
    <ButtonWrap>
      <SlideControls>
        <Controls>
          <BeforeButton onClick={handlePrev}></BeforeButton>
          <SlidePages>
            <Strong>{currentSlide + 1}</Strong>
            <Count>10</Count>
          </SlidePages>
          <AfterButton onClick={handleNext}></AfterButton>
        </Controls>
      </SlideControls>
      <StopButton
        onClick={handlePlay}
        className={autoplay ? "" : "play"}
      ></StopButton>
    </ButtonWrap>
  );
};

export default SlideButton;
