import React from "react";
import {
  PopupWrap,
  TextWrap,
  Title,
  Text,
  Line,
  ButtonWrap,
  ButtonClose,
  Close,
} from "../styles/Popup";

const Popup = () => {
  return (
    <PopupWrap>
      <ButtonWrap>
        <ButtonClose>
          <Close>X</Close>
        </ButtonClose>
      </ButtonWrap>
      <TextWrap>
        <div>
          <Line>
            <Title>지금 회원 가입하고 5% 할인쿠폰 받으세요</Title>
          </Line>
          <Text>회원가입 하러가기 →</Text>
        </div>
      </TextWrap>
    </PopupWrap>
  );
};

export default Popup;
