import React from "react";
import {
  BestWrap,
  SalesList,
  MainBanner,
  MainImage,
  Image,
  ItemInfo,
  ItemName,
  ItemSku,
  PriceWrap,
  Blind,
  ItemPrice,
  MainSpan,
  Atag,
} from "../styles/Best";
import best01 from "../assets/best01.avif";
import SubBest from "./SubBest";

const Best = () => {
  return (
    <BestWrap>
      <SalesList>
        <MainBanner>
          <Atag href="/">
            <MainImage>
              <MainSpan>
                <Image src={best01} alt="" />
              </MainSpan>
            </MainImage>
            <ItemInfo>
              <ItemName>LG퓨리케어 오브제컬렉션 에어로퍼니처(원형)</ItemName>
              <ItemSku>AS062PWHAR</ItemSku>
              <PriceWrap>
                <Blind>판매가격</Blind>
                <ItemPrice>
                  <em style={{ fontStyle: "normal" }}>549,000</em> 원
                </ItemPrice>
              </PriceWrap>
            </ItemInfo>
          </Atag>
        </MainBanner>
        <SubBest />
      </SalesList>
    </BestWrap>
  );
};

export default Best;
