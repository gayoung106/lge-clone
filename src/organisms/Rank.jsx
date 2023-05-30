import React from "react";
import {
  RankWrap,
  RankList,
  ItemImage,
  Img,
  ItemInfo,
  ItemName,
  PriceWrap,
  Blind,
  ItemPrice,
  ItemSku,
  Atag,
} from "../styles/Rank";
import rankitem01 from "../assets/rankitem01.avif";
import rankitem02 from "../assets/rankitem02.avif";
import rankitem03 from "../assets/rankitem03.avif";

const ranks = [
  {
    image: rankitem01,
    name: "LG 퓨리케어 360˚ 공기청정기 Hit",
    sku: "AS183HWWA",
    price: "319,000",
  },
  {
    image: rankitem02,
    name: "LG 퓨리케어 오브제컬렉션 360˚ 알파UP (G 필터)",
    sku: "AS353NS3A",
    price: "1,890,000",
  },
  {
    image: rankitem03,
    name: "LG 퓨리케어 360˚ 공기청정기 Hit",
    sku: "AS183HWWA",
    price: "479,000",
  },
];

const Rank = () => {
  return (
    <RankWrap>
      {ranks.map((item, index) => (
        <RankList key={index + 1}>
          <Atag href="/">
            <ItemImage>
              <Img src={item.image} alt="" />
            </ItemImage>
            <ItemInfo>
              <ItemName>{item.name}</ItemName>
              <ItemSku>{item.sku}</ItemSku>
              <PriceWrap>
                <Blind>판매가격</Blind>
                <ItemPrice>
                  <em style={{ fontStyle: "normal" }}>{item.price}</em> 원
                </ItemPrice>
              </PriceWrap>
            </ItemInfo>
          </Atag>
        </RankList>
      ))}
    </RankWrap>
  );
};

export default Rank;
