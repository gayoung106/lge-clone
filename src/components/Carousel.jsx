import React from "react";
import { CarouselWrap, CarouselImg } from "../styles/Carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../assets/Banner1.avif";
import Banner2 from "../assets/Banner2.avif";
import Banner3 from "../assets/Banner3.avif";
import Banner4 from "../assets/Banner4.avif";
import Banner5 from "../assets/Banner5.avif";
import Banner6 from "../assets/Banner6.jpeg";
import Banner7 from "../assets/Banner7.avif";
import Banner8 from "../assets/Banner8.gif";
import Banner9 from "../assets/Banner9.avif";
import Banner10 from "../assets/Banner10.avif";

// import SlideButton from "../organisms/SlideButton";
const banners = [
  { image: Banner1 },
  { image: Banner2 },
  { image: Banner3 },
  { image: Banner4 },
  { image: Banner5 },
  { image: Banner6 },
  { image: Banner7 },
  { image: Banner8 },
  { image: Banner9 },
  { image: Banner10 },
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      {banners.map((item, index) => (
        <CarouselWrap key={index}>
          {/* <SlideButton /> */}
          <CarouselImg src={item.image} alt="" />
        </CarouselWrap>
      ))}
    </Slider>
  );
};

export default Carousel;
