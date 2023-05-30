import React from "react";

import Section from "../organisms/Section";
import HorizontalScroll from "../organisms/HorizontalScroll";
import Filter from "../organisms/Filter";
import Rank from "../organisms/Rank";
import { SectionTop } from "../styles/Section";

const Parts = () => {
  return (
    <>
      <div style={{ padding: "80px 48px" }}>
        <SectionTop>
          <Section
            content="LG 베스트 가전 추천 제품"
            sub="놓치기 아쉬운 특별한 가격"
          />

          <HorizontalScroll />
        </SectionTop>
      </div>
      <div style={{ backgroundColor: "#F1F1F1", padding: "80px 48px" }}>
        <SectionTop>
          <Section content="베스트 랭킹" sub="최근 가장 많이 본 제품" />
          <div>
            <Filter />
            <Rank />
          </div>
        </SectionTop>
      </div>

      <Section content="집들이 선물 추천!" sub="LGE.COM 베스트 선물 가전" />
      <Section content="가전을 만나는 새로운 경험" sub="LGE.COM 체험 컨텐츠" />
      <Section content="최신 제품 소식" />
      <Section content="슬기로운 가전생활" />
    </>
  );
};

export default Parts;
