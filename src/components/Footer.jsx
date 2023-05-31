import React from "react";
import { FooterModule, FooterContent, FooterArea } from "../styles/Footer";
import Downdrop from "../organisms/Downdrop";
import Footbottom from "../organisms/Footbottom";

const Footer = () => {
  return (
    <FooterModule>
      <FooterContent>
        <FooterArea>
          <Downdrop />
          <Footbottom />
        </FooterArea>
      </FooterContent>
    </FooterModule>
  );
};

export default Footer;
