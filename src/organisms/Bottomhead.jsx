import React from "react";
import {
  BottomHead,
  DropdownWrap,
  DropDown,
  Atag,
  DropList,
  List,
  DropTag,
  Tag,
  SnsLink,
  SnsList,
  SnsTag,
  SnsImg,
  SnsTitle,
} from "../styles/Footer";

const sns = [
  {
    backgroundImage:
      "https://www.lge.co.kr/lg5-common/images/icons/icon-sns1.svg",
    title: "유튜브",
  },
  {
    backgroundImage:
      "https://www.lge.co.kr/lg5-common/images/icons/icon-sns2.svg",
    title: "인스타그램",
  },
  {
    backgroundImage:
      "https://www.lge.co.kr/lg5-common/images/icons/icon-sns3.svg",
    title: "페이스북",
  },
  {
    backgroundImage:
      "https://www.lge.co.kr/lg5-common/images/icons/icon-sns5.svg",
    title: "고객서비스 \n 블로그",
  },
  {
    backgroundImage:
      "https://www.lge.co.kr/lg5-common/images/icons/icon-sns1.svg",
    title: "고객서비스 \n 유튜브",
  },
  {
    backgroundImage:
      "https://www.lge.co.kr/lg5-common/images/icons/icon-sns4.svg",
    title: "Live LG",
  },
];

const Bottomhead = () => {
  return (
    <BottomHead>
      <DropdownWrap>
        <DropDown>
          <Atag href="/">한국/한국어</Atag>
          <DropList>
            <List>
              <DropTag href="/">한국/한국어</DropTag>
            </List>
            <List>
              <Tag href="/">Global / English</Tag>
            </List>
          </DropList>
        </DropDown>
      </DropdownWrap>
      <SnsLink>
        {sns.map((item, index) => (
          <SnsList key={index}>
            <SnsTag href="/">
              <SnsImg src={item.backgroundImage} alt="/" />
              <SnsTitle>{item.title}</SnsTitle>
            </SnsTag>
          </SnsList>
        ))}
      </SnsLink>
    </BottomHead>
  );
};

export default Bottomhead;
