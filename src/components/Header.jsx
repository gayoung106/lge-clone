import React from "react";
import { HeaderWrap } from "../styles/Header";
import HeaderTop from "../organisms/HeaderTop";
import HeaderNav from "../organisms/HeaderNav";

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderTop />
      <HeaderNav />
    </HeaderWrap>
  );
};

export default Header;
