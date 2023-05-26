import React from "react";
import { TextWrap, Title, Text, Line, ButtonWrap } from "../styles/Popup";

const Popup = () => {
  return (
    <div
      style={{
        left: "0",
        width: "100%",
        height: "100px",
        backgroundColor: "#F4FBED",
        zIndex: "1",
      }}
    >
      <TextWrap>
        <div>
          <Line>
            <Title>Welcome to LGE.COM</Title>
          </Line>
          <Text>지금 회원 가입하고 5% 할인쿠폰 받으세요!</Text>
        </div>
        <ButtonWrap>
          <span>X</span>
        </ButtonWrap>
      </TextWrap>
    </div>
  );
};

export default Popup;
