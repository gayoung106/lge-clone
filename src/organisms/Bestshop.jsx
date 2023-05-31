import React from "react";
import {
  ContentWrap,
  ShopList,
  ShopBanner,
  Atag,
  ShopImage,
  Img,
  TextWrap,
  Desc,
  Title,
} from "../styles/Bestshop";

import shop01 from "../assets/shop01.svg";
import shop02 from "../assets/shop02.svg";
import shop03 from "../assets/shop03.svg";
import shop04 from "../assets/shop04.svg";

const shops = [
  {
    image: shop01,
    desc: "방문 전 매장 위치를 찾을 수 있는",
    title: "매장 찾기",
  },
  {
    image: shop02,
    desc: "QR 스캔으로 손쉽게 제품 비교와 \n 혜택을 내 손안의 베스트샵",
    title: "포켓 베스트샵",
  },
  {
    image: shop03,
    desc: "바쁜 일상에서 야간을 이용해 \n 제품을 체험하는 ",
    title: "야간 무인 매장",
  },
  {
    image: shop04,
    desc: "사전에 예약하고 편하게 방문하는",
    title: "매장 상담 예약",
  },
];

const Bestshop = () => {
  return (
    <ContentWrap>
      <ShopList>
        {shops.map((item, index) => (
          <ShopBanner key={index}>
            <Atag href="/">
              <ShopImage>
                <Img src={item.image} alt="/" />
              </ShopImage>
              <TextWrap>
                <Desc>{item.desc}</Desc>
                <Title>{item.title}</Title>
              </TextWrap>
            </Atag>
          </ShopBanner>
        ))}
      </ShopList>
    </ContentWrap>
  );
};

export default Bestshop;
