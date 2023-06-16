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
// import ranks from "../data/rankItems";

const Rank = ({ data }) => {
  return (
    <RankWrap>
      {data.map((item, index) => (
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
