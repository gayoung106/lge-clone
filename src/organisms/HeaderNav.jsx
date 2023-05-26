import React from "react";
import { HeaderMenu, NavList } from "../styles/Header";
import Signiture from "../assets/logo-signature.svg";
import ObjetLg from "../assets/logo-objet-collection.svg";
import ThinkQ from "../assets/logo-thinq.svg";
import Gram from "../assets/logo-lets-gram.svg";

const HeaderNav = () => {
  return (
    <HeaderMenu>
      <NavList style={{ paddingLeft: "15px" }}>제품/소모품</NavList>
      <NavList>고객지원</NavList>
      <NavList>렌탈/케어</NavList>
      <NavList>이벤트/멤버십</NavList>
      <NavList>스토리</NavList>
      <NavList>베스트샵</NavList>
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
