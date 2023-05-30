import React from "react";
import {
  ContentWrap,
  SlideTop,
  SlideList,
  SlideWrap,
  ItemWrap,
  Atag,
  ItemImage,
  Img,
  TextWrap,
  ItemTitle,
} from "../styles/New";
import Theme01 from "../assets/Theme01.webp";
import Theme02 from "../assets/Theme02.webp";
import Theme03 from "../assets/Theme03.avif";
import Theme04 from "../assets/Theme04.avif";

const themes = [
  { image: Theme01, title: "VR쇼룸" },
  { image: Theme02, title: "렛츠 그램" },
  { image: Theme03, title: "오브젝컬렌션 체험관" },
  { image: Theme04, title: "Jammy" },
];

const New = () => {
  return (
    <ContentWrap>
      <SlideTop>
        <SlideList>
          <SlideWrap>
            {themes.map((item, index) => (
              <ItemWrap key={index}>
                <Atag href="/">
                  <ItemImage>
                    <Img src={item.image} alt="/" />
                  </ItemImage>
                  <TextWrap>
                    <ItemTitle>{item.title}</ItemTitle>
                  </TextWrap>
                </Atag>
              </ItemWrap>
            ))}
          </SlideWrap>
        </SlideList>
      </SlideTop>
    </ContentWrap>
  );
};

export default New;
