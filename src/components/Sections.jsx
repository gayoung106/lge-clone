import React from "react";

import Section from "../organisms/Section";
import HorizontalScroll from "../organisms/HorizontalScroll";
// import FilterRank from "../organisms/FilterRank";
import Filter from "../organisms/Filter";
import Rank from "../organisms/Rank";
import { SectionTop, SectionRow } from "../styles/Section";
import Best from "../organisms/Best";
import New from "../organisms/New";
import Product from "../organisms/Product";
import Life from "../organisms/Life";
import Advertise from "./Advertise";
import Benefit from "../organisms/Benefit";
import Bestshop from "../organisms/Bestshop";
import FilterRank from "../organisms/FilterRank";

const Parts = () => {
  const firstAdIdx = 0;
  const firstAdEndIdx = 2;
  const secondAdIdx = 3;
  const secondAdEndIdx = 5;
  return (
    <>
      <Advertise startIndex={firstAdIdx} endIndex={firstAdEndIdx} />
      <div style={{ padding: "80px 48px" }}>
        <SectionTop>
          <Section
            content="LG 베스트 가전 추천 제품"
            sub="놓치기 아쉬운 특별한 가격"
          />
          <div
            style={{
              overflowX: "scroll",
              overflowY: "hidden",
              whiteSpace: "nowrap",
              display: "flex",
              overflowX: "auto",
            }}
          >
            <HorizontalScroll />
          </div>
        </SectionTop>
      </div>
      <div style={{ backgroundColor: "#F1F1F1", padding: "80px 48px" }}>
        <SectionTop>
          <Section content="베스트 랭킹" sub="최근 가장 많이 본 제품" />
          <FilterRank />
        </SectionTop>
      </div>
      <div style={{ padding: "80px 48px" }}>
        <SectionTop>
          <Section content="집들이 선물 추천!" sub="LGE.COM 베스트 선물 가전" />
          <Best />
        </SectionTop>
      </div>
      <div style={{ padding: "80px 48px" }}>
        <SectionTop>
          <Section
            content="가전을 만나는 새로운 경험"
            sub="LGE.COM 체험 컨텐츠"
          />
          <New />
        </SectionTop>
      </div>
      <div style={{ backgroundColor: "#F1F1F1", padding: "80px 48px" }}>
        <SectionRow>
          <Section content="최신 제품 소식" />
          <Product />
        </SectionRow>
      </div>
      <div style={{ padding: "80px 48px" }}>
        <SectionTop>
          <Section content="슬기로운 가전생활" />
          <Life />
        </SectionTop>
      </div>
      <Advertise startIndex={secondAdIdx} endIndex={secondAdEndIdx} />
      <div style={{ padding: "80px 48px" }}>
        <SectionTop>
          <Section content="놓치면 아쉬운 혜택" />
          <Benefit />
        </SectionTop>
      </div>
      <div style={{ backgroundColor: "#F1F1F1", padding: "80px 48px" }}>
        <SectionRow>
          <Section
            content="베스트샵 이용 안내"
            sub="오프라인 서비스를 더욱 간단하게"
          />
          <Bestshop />
        </SectionRow>
      </div>
    </>
  );
};

export default Parts;
