import React, { useState, useRef } from "react";
import {
  CarouselWrap,
  CarouselImg,
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
import SlideButton from "../organisms/SlideButton";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const sliderRef = useRef(null);

  const handlePrev = () => {
    sliderRef.current.slickPrev();
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
    setCurrentSlide((preSlide) => preSlide + 1);
  };

  const handleStop = () => {
    setAutoplay((prevAutoplay) => !prevAutoplay);
    if (!autoplay) {
      sliderRef.current.slickPlay();
    } else {
      sliderRef.current.slickPause();
    }
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 2000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div style={{ position: "relative" }}>
      <Slider {...settings} ref={sliderRef}>
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
      </Slider>
      <SlideButton
        currentSlide={currentSlide}
        handlePrev={handlePrev}
        handleNext={handleNext}
        handleStop={handleStop}
        autoplay={autoplay}
        sliderRef={sliderRef}
      />
    </div>
  );
};

export default Carousel;
