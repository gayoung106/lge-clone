import React from "react";
import {
  HeaderMenu,
  NavList,
  NavItemTag,
  CategoryLayer,
  CategoryInner,
  SwiperContainer,
  SwiperWrap,
  SwiperSlide,
  SlideItemTag,
} from "../styles/Header";
import Signiture from "../assets/logo-signature.svg";
import ObjetLg from "../assets/logo-objet-collection.svg";
import ThinkQ from "../assets/logo-thinq.svg";
import Gram from "../assets/logo-lets-gram.svg";

const HeaderNav = () => {
  // const navlist = [
  //   {name:"제품/소모품", tagName:["TV/AV", "PC/모니터", "주방가전", "생활가전", "에어컨/에어케어", "뷰티/의료기기", "로봇", "LG SIGNATURE", "LG Objet Collection", "LG UP 가전", "케어용품/소모품"], },
  //   {name:"제품/소모품", tagName:["TV/AV", "PC/모니터", "주방가전", "생활가전", "에어컨/에어케어", "뷰티/의료기기", "로봇", "LG SIGNATURE", "LG Objet Collection", "LG UP 가전", "케어용품/소모품"], },
  // ]
  const navlist = [
    { name: "제품/소모품" },
    { name: "렌탈/케어" },
    { name: "이벤트/멤버십" },
    { name: "스토리" },
    { name: "베스트샵" },
  ];
  return (
    <HeaderMenu>
      {/* <NavList style={{ paddingLeft: "15px" }}>제품/소모품</NavList> */}
      {navlist.map((item, index) => (
        <NavList key={index}>
          <NavItemTag href="/">{item.name}</NavItemTag>
          <CategoryLayer>
            <CategoryInner>
              <SwiperContainer>
                <SwiperWrap>
                  <SwiperSlide>
                    <SlideItemTag href="/">TV/AV</SlideItemTag>
                  </SwiperSlide>
                </SwiperWrap>
              </SwiperContainer>
            </CategoryInner>
          </CategoryLayer>
        </NavList>
      ))}

      <div
        style={{
          top: "0",
          borderRadius: "20px",
          backgroundColor: "#F4F4F4",
          margin: "5px 20px",
          justifyContent: "space-around",
        }}
      >
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            padding: "5px 0",
            // justifyContent: "space-around",
          }}
        >
          <li style={{ marginLeft: "20px" }}>
            <img src={Signiture} alt="" />
          </li>
          <li style={{ marginLeft: "20px" }}>
            <img src={ObjetLg} alt="" />
          </li>
          <li style={{ marginLeft: "20px" }}>
            <img src={ThinkQ} alt="" />
          </li>
          <li style={{ marginLeft: "20px", marginRight: "20px" }}>
            <img src={Gram} alt="" />
          </li>
        </ul>
      </div>
    </HeaderMenu>
  );
};

export default HeaderNav;
