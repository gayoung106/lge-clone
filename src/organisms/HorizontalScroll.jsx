import React from "react";
import Draggable from "react-draggable";

import {
  Container,
  SectionWrap,
  ImageWrap,
  Image,
  ItemInfo,
  ItemName,
  ItemSku,
  PriceWrap,
  Blind,
  ItemPrice,
  Line,
  ImageSpan,
} from "../styles/Scroll";
import Item01 from "../assets/item01.avif";
import Item02 from "../assets/item02.avif";
import Item03 from "../assets/item03.webp";
import Item04 from "../assets/item04.avif";

const HorizontalScroll = () => {
  const handleDrag = (e, data) => {
    const scrollContainer = e.target.parentNode.parentNode;
    scrollContainer.scrollLeft -= data.deltaX;
  };

  const items = [
    {
      image: Item01,
      name: "LG 올레드 TV (스탠드형)",
      sku: "OLED55B3NNA",
      price: "1,990,000",
    },
    {
      image: Item02,
      name: "LG 그램 39.6cm",
      sku: "15Z90RT-GAOBK",
      price: "1,790,000",
    },
    { image: Item03, name: "LG 사운드바", sku: "S80QR", price: "849,000" },
    {
      image: Item04,
      name: "LG 휘센 제습기",
      sku: "DQ132PWXC",
      price: "389,000",
    },
    {
      image: Item01,
      name: "LG 올레드 TV (스탠드형)",
      sku: "OLED55B3NNA",
      price: "1,990,000",
    },
    {
      image: Item02,
      name: "LG 그램 39.6cm",
      sku: "15Z90RT-GAOBK",
      price: "1,790,000",
    },
    { image: Item03, name: "LG 사운드바", sku: "S80QR", price: "849,000" },
    {
      image: Item04,
      name: "LG 휘센 제습기",
      sku: "DQ132PWXC",
      price: "389,000",
    },
  ];
  return (
    <Container>
      <Draggable axis="x" onDrag={handleDrag}>
        <SectionWrap>
          {/* <div className="section-list" style={{ display: "flex" }}> */}
          {items.map((item, index) => (
            <a
              key={index}
              style={{ textDecoration: "none", color: "#000" }}
              href="/"
            >
              <ImageWrap>
                <ImageSpan>
                  <Image
                    style={{ background: "rgba(0, 0, 0, 0.035)" }}
                    src={item.image}
                    alt=""
                  />
                </ImageSpan>
              </ImageWrap>

              <ItemInfo>
                <Line />
                <ItemName>{item.name}</ItemName>
                <ItemSku>{item.sku}</ItemSku>
                <PriceWrap>
                  <Blind>판매가격</Blind>
                  <ItemPrice>
                    <span>{item.price}</span> 원
                  </ItemPrice>
                </PriceWrap>
              </ItemInfo>
            </a>
          ))}

          {/* </div> */}
        </SectionWrap>
      </Draggable>
    </Container>
  );
};

export default HorizontalScroll;
