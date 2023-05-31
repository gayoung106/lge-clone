import React from "react";
import {
  ContentWrap,
  SlideTop,
  SlideList,
  Slide,
  CategoryWrap,
  Atag,
  LifeItemImg,
  LifeImg,
  TextWrap,
  ItemTitle,
  ItemCategory,
} from "../styles/New";
import life01 from "../assets/life01.jpeg";
import life02 from "../assets/life02.jpeg";
import life03 from "../assets/life03.jpeg";
import life04 from "../assets/life04.jpeg";

const themes = [
  {
    image: life01,
    title: "세상에 없던 기술의 시작, LG OLED 10년의 역사",
    category: "Only & Best",
  },
  {
    image: life02,
    title: "LG 퓨리케어 에어로퍼니처 인테리어 200% 활용 팁",
    category: "고객 리뷰",
  },
  {
    image: life03,
    title: "대세들의 만남, 그램 Style과 뉴진스! ",
    category: "트렌드",
  },
  {
    image: life04,
    title: "터치만으로 분위기를 바꾸는 무드업 냉장고",
    category: "사용가이드",
  },
];

const Life = () => {
  return (
    <ContentWrap>
      <SlideTop>
        <SlideList>
          <Slide>
            {themes.map((item, index) => (
              <CategoryWrap key={index}>
                <Atag href="/">
                  <LifeItemImg>
                    <LifeImg src={item.image} alt="/" />
                  </LifeItemImg>
                  <TextWrap>
                    <ItemCategory>{item.category}</ItemCategory>
                    <ItemTitle>{item.title}</ItemTitle>
                  </TextWrap>
                </Atag>
              </CategoryWrap>
            ))}
          </Slide>
        </SlideList>
      </SlideTop>
    </ContentWrap>
  );
};

export default Life;
