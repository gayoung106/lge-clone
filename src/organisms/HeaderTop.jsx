import React from "react";
import {
  HeaderMain,
  HeaderUtil,
  HeaderMenu,
  HeaderAbout,
  HeaderList,
} from "../styles/Header";
import Logo from "../assets/lg_logo.svg";
import { SlMagnifier, SlUser, SlBasket } from "react-icons/sl";

const HeaderTop = () => {
  return (
    <HeaderMain>
      <div className="logo">
        <img
          style={{
            width: "100px",
            height: "29px",
            display: "block",
            backgroundSize: "100% 100%",
          }}
          src={Logo}
          alt="logo"
        />
      </div>
      <HeaderUtil className="utility">
        <HeaderMenu>
          <HeaderList>
            <SlMagnifier />
          </HeaderList>
          <HeaderList>
            <SlUser />
          </HeaderList>
          <HeaderList>
            <SlBasket />
          </HeaderList>
        </HeaderMenu>
        <HeaderAbout
          className="about-company"
          style={{
            marginLeft: "24px",
          }}
        >
          회사소개
        </HeaderAbout>
        <HeaderAbout
          className="b2b"
          style={{
            marginLeft: "10px",
          }}
        >
          B2B
        </HeaderAbout>
      </HeaderUtil>
    </HeaderMain>
  );
};

export default HeaderTop;
