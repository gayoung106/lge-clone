import React from "react";
import { Banner, Image, TextWrap, Title, Text } from "../styles/Advertise";
import { bannerItems } from "../data/bannerItems";

const Advertise = ({ startIndex, endIndex }) => {
  return (
    <Banner>
      {bannerItems.slice(startIndex, endIndex + 1).map((item, index) => (
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
