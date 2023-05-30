import React from "react";
import {
  SubBanner,
  Atag,
  ImageItem,
  ImgSpan,
  Image,
  ItemInfo,
  ItemName,
  ItemSku,
  PriceWrap,
  Bline,
  ItemPrice,
} from "../styles/SubBest";
import sub01 from "../assets/sub01.avif";
import sub02 from "../assets/sub02.webp";

const bests = [
  {
    image: sub01,
    name: "LG 스탠바이미",
    sku: "27ART10AKPL",
    price: "1,090,000",
  },
  {
    image: sub02,
    name: "LG 디오스 오브제컬렉션 와인셀러",
    sku: "W0082GLE",
    price: "379,000",
  },
];

const SubBest = () => {
  return (
    <>
      {bests.map((item, index) => (
        <SubBanner key={index}>
          <Atag href="/">
            <ImageItem>
              <ImgSpan>
                <Image src={item.image} alt="" />
              </ImgSpan>
            </ImageItem>
            <ItemInfo>
              <ItemName>{item.name}</ItemName>
              <ItemSku>{item.sku}</ItemSku>
              <PriceWrap>
                <Bline>판매가격</Bline>
                <ItemPrice>
                  <em style={{ fontStyle: "normal" }}>{item.price}</em> 원
                </ItemPrice>
              </PriceWrap>
            </ItemInfo>
          </Atag>
        </SubBanner>
      ))}
    </>
  );
};

export default SubBest;
