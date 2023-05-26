import React from "react";
import { Banner, Image, TextWrap, Title, Text } from "../styles/Advertise";
import Banner01 from "../assets/banner01.avif";
import Banner02 from "../assets/banner02.avif";
import Banner03 from "../assets/banner03.avif";

const bannerItems = [
  {
    image: Banner01,
    title: "푸르른 가정의 달 LGE.COM 단독 구매 혜택",
    text: "기획전 더 알아보기",
  },
  {
    image: Banner02,
    title: "100% 당첨 행운의 룰렛 이벤트",
    text: "이벤트 참여하기",
  },
  {
    image: Banner03,
    title: "타워에어컨 2023 미리 구매 기획전",
    text: "기획전 더 알아보기",
  },
];

const Advertise = () => {
  return (
    <Banner style={{ marginTop: "0" }}>
      {bannerItems.map((item, index) => (
        <a
          key={index}
          style={{
            color: "inherit",
            textDecoration: "none",
            position: "relative",
          }}
          href="/"
        >
          <Image>
            <img
              style={{ verticalAlign: "middle", borderRadius: "15px" }}
              src={item.image}
              alt=""
            />
          </Image>
          <TextWrap>
            <Title>{item.title}</Title>
            <Text>{item.text}</Text>
          </TextWrap>
        </a>
      ))}
    </Banner>
  );
};

export default Advertise;
