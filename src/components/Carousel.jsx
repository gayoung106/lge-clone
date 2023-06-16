import React, { useState } from "react";
import {
  CarouselWrap,
  CarouselImg,
  ButtonWrap,
  SlideControls,
  Controls,
  BeforeButton,
  SlidePages,
  Count,
  AfterButton,
  StopButton,
  InfoWrap,
  InfoBox,
  LogoWrap,
  LogoImg,
  PText,
  PSmall,
  LinkWrap,
} from "../styles/Carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { banners } from "../data/carouselItem";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (currentSlide) => {
    setCurrentSlide(currentSlide);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (oldIndex, newIndex) => handleSlideChange(newIndex),
  };

  return (
    <Slider style={{ position: "relative", opacity: "1" }} {...settings}>
      {banners.map((item, index) => (
        <CarouselWrap key={index}>
          <CarouselImg src={item.image} alt="" />
          {currentSlide === index && (
            <InfoWrap>
              <InfoBox>
                <LogoWrap>
                  <LogoImg src={item.logo} alt="/" />
                </LogoWrap>
                <PText>{item.text}</PText>
                <PSmall>{item.desc}</PSmall>
                <LinkWrap></LinkWrap>
              </InfoBox>
            </InfoWrap>
          )}
        </CarouselWrap>
      ))}

      {/* <ButtonWrap>
        <SlideControls>
          <Controls>
            <BeforeButton></BeforeButton>
            <SlidePages>
              <Count>1</Count>/10
            </SlidePages>
            <AfterButton></AfterButton>
          </Controls>
          <StopButton></StopButton>
        </SlideControls>
      </ButtonWrap> */}
    </Slider>
  );
};

export default Carousel;
