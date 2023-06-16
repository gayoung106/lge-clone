import styled from "styled-components";

export const SlideContent = styled.div`
  overflow: hidden;
`;

export const SlideUl = styled.ul`
  opacity: 1;
  width: 1360px;
  transform: translate3d(-1360px, 0, 0);
  height: 600px;
  overflow: hidden;
  list-style: none;
`;
export const SlideList = styled.li`
  float: left;
  width: 1360px;
  position: relative;
  height: 600px;
  list-style: none;
`;

export const Atag = styled.a`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  color: inherit;
  text-decoration: none;
`;

export const ImageWrap = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  max-width: none;
  vertical-align: middle;
`;

export const InfoWrap = styled.div`
  left: 0;
  max-width: 1460px;
  margin: 0 auto;
  padding: 0 48px;
  z-index: 2;
  pointer-events: none;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export const InfoBox = styled.div`
  display: inline-block;
`;

export const LogoWrap = styled.div`
  display: none;
  margin-bottom: 12px;
  height: 16px;
`;
export const LogoImg = styled.img`
  width: auto;
  height: 100%;
  vertical-align: middle;
`;

export const PText = styled.p`
  color: inherit;
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
`;

export const PSmall = styled.p`
  margin-top: 16px;
  font-size: 24px;
  line-height: 32px;
  opacity: 0.7;
`;

export const LinkWrap = styled.div`
  display: inline-block;
  margin-top: 42px;
`;
export const CarouselWrap = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  /* top: 0; */
  left: 0;
  display: block;
  /* position: absolute; */
  /* z-index: 1; */
  margin-top: 5px;
  margin-bottom: 0;
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

export const Controls = styled.div`
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
