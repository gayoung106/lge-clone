import React from "react";
import { CarouselWrap, CarouselImg } from "../styles/Carousel";
import Carousel01 from "../assets/carousel01.avif";

const Carousel = () => {
  return (
    <CarouselWrap>
      <CarouselImg src={Carousel01} alt="" />
    </CarouselWrap>
  );
};

export default Carousel;
