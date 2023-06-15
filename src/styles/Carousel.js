import styled from "styled-components";

export const CarouselWrap = styled.div`
  width: 100%;
  height: 600px;
  overflow: hidden;
  /* top: 0; */
  left: 0;
  display: block;
  /* position: absolute; */
  /* z-index: 1; */
  margin-top: 5px;
`;

export const CarouselImg = styled.img`
  width: auto;
  height: auto;
  min-height: 100%;
  min-width: 100%;
  margin: 0;
  object-fit: contain; //

  /* @media (min-width: 2600px) {
    max-width: 2600px;
  }

  @media (max-width: 767px) {
    max-width: 767px;
  } */
`;

/** carousel button css */
export const ButtonWrap = styled.div`
  display: flex;
  bottom: 40px;
  left: 0;
  right: 0;
  max-width: 1460px;
  margin: 0 auto;
  padding: 0 40px;
  position: absolute;
  z-index: 10;
  font-size: 0;
  text-align: center;
`;

export const SlideControls = styled.div`
  position: relative;
  top: auto;
  left: auto;
  transform: none;
  max-width: none;
  margin: 0 auto;
  width: 100%;
  z-index: 10;
`;

export const Constrols = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 138px;
  height: 36px;
  border-radius: 18px;
  background-color: rgba(0, 0, 0, 0.35);
`;

export const BeforeButton = styled.button`
  display: block;
  left: 16px;
  position: absolute;
  top: 6px;
  padding: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 0;

  &::before {
    background-image: url(/lg5-common/images/icons/btn-arr-24x24-lt.svg);
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    box-shadow: none;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;

export const SlidePages = styled.span`
  padding: 0 4px;
  color: #fff;
  font-size: 16px;
  line-height: 36px;
`;

export const Count = styled.em`
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;

  &::before {
    content: "/";
    margin: 0 8px;
    color: #fff;
    box-sizing: border-box;
  }
`;
export const AfterButton = styled.button`
  display: block;
  right: 16px;
  position: absolute;
  top: 6px;
  padding: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 0;

  &::before {
    background-image: url(/lg5-common/images/icons/btn-arr-24x24-rt.svg);
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    box-shadow: none;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;

export const StopButton = styled.button`
  display: block;
  margin-left: 8px;
  width: 36px;
  height: 36px;
  position: relative;
  font-size: 0;
  text-align: center;

  &::before {
    width: 36px;
    height: 36px;
    background-size: 100% 100%;
    display: inline-block;
    content: "";

    &.play {
      background-image: url(/lg5-common/images/icons/btn-carousel-46-play.svg);
    }

    &.stop {
      background-image: url(/lg5-common/images/icons/btn-carousel-46-pause.svg);
    }
  }
`;
