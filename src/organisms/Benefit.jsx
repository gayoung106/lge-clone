import React from "react";
import {
  ContentWrap,
  PromotionList,
  SlideItem,
  Atag,
  ItemImage,
  Img,
  ItemTitle,
} from "../styles/Benefit";

import benefit01 from "../assets/benefit01.avif";
import benefit02 from "../assets/benefit02.avif";
import benefit03 from "../assets/benefit03.webp";

const benefitItems = [
  { image: benefit01, title: "LGE.COM 5월의 혜택" },
  { image: benefit02, title: "요즘 시대 필수 가전 리뷰 이벤트" },
  { image: benefit03, title: "엘지전자 라이브쇼, 엘라쇼" },
];

const Benefit = () => {
  return (
    <ContentWrap>
      <PromotionList>
        {benefitItems.map((item, index) => (
          <SlideItem key={index}>
            <Atag href="/">
              <ItemImage>
                <Img src={item.image} alt="/" />
              </ItemImage>
              <ItemTitle>{item.title}</ItemTitle>
            </Atag>
          </SlideItem>
        ))}
      </PromotionList>
    </ContentWrap>
  );
};

export default Benefit;
