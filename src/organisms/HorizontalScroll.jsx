import React from "react";
import {
  SectionWrap,
  SectionContent,
  ImageWrap,
  Image,
  ItemInfo,
  ItemName,
  ItemSku,
  PriceWrap,
  Blind,
  ItemPrice,
  Line,
} from "../styles/Scroll";
import Item01 from "../assets/item01.avif";
import Item02 from "../assets/item02.avif";
import Item03 from "../assets/item03.webp";
import Item04 from "../assets/item04.avif";

const HorizontalScroll = () => {
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
  ];
  return (
    <SectionWrap>
      <div className="section-list" style={{ display: "flex" }}>
        {items.map((item, index) => (
          <SectionContent key={index}>
            <a style={{ textDecoration: "none", color: "#000" }} href="/">
              <ImageWrap>
                <span
                  style={{
                    paddingTop: "100%",
                    display: "block",
                    position: "relative",
                    textAlign: "center",
                  }}
                >
                  <Image
                    style={{ background: "rgba(0, 0, 0, 0.035)" }}
                    src={item.image}
                    alt=""
                  />
                </span>
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
          </SectionContent>
        ))}
      </div>
    </SectionWrap>
  );
};

export default HorizontalScroll;
