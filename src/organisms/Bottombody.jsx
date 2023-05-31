import React from "react";
import {
  BottomBodyWrap,
  BottomLink,
  BottomLinkList,
  BottomLinkTag,
  CallTo,
  CallList,
  CallTag,
  TimeTo,
  TimeList,
  InfoWrap,
  InfoP,
  InfoSpan,
  InfoLastP,
} from "../styles/Footer";

const bottoms = [
  { title: "사이트맵" },
  { title: "개인정보처리방침" },
  { title: "이벤트 개인정보처리방침" },
  { title: "영상정보처리기기운영관리방침" },
  { title: "이용약관" },
  { title: "임직원 등록" },
  { title: "이메일 무단수집 거부" },
  { title: "정보 경영 사이버 신문고" },
];
const Bottombody = () => {
  return (
    <BottomBodyWrap>
      <BottomLink>
        {bottoms.map((item, index) => (
          <BottomLinkList key={index}>
            <BottomLinkTag href="/">{item.title}</BottomLinkTag>
          </BottomLinkList>
        ))}
      </BottomLink>
      <CallTo>
        <CallList>
          <span>대표번호: </span>
          <CallTag href="/">02-0000-0000</CallTag>
        </CallList>
        <CallList style={{ paddingLeft: "5px" }}>
          <span>제품/서비스 문의 : </span>
          <CallTag href="/">0000-0000</CallTag>
        </CallList>
        <CallList style={{ paddingLeft: "5px", border: "none" }}>
          <span>LGE.COM 구매 문의(가전/소모품/렌탈 신규) : </span>
          <CallTag href="/">0000-0000</CallTag>
        </CallList>
      </CallTo>
      <TimeTo>
        <TimeList>
          <p style={{ margin: "0" }}>
            모든 전화상담 시간은 평일 09:00 ~ 18:00 (주말, 공휴일 휴무) 입니다.
            (통화요금 : 발신자부담)
          </p>
          <p style={{ margin: "0" }}>
            제품 및 서비스 문의는 긴급 문의 건에 한해 24시간 운영합니다.{" "}
          </p>
        </TimeList>
      </TimeTo>
      <InfoWrap>
        <InfoP>
          <InfoSpan>대표이사 : 송가영</InfoSpan>
          <InfoSpan>사업자등록번호 : 000-00-0000</InfoSpan>
          <InfoSpan
            style={{
              color: "#fff",
              backgroundColor: "#777",
              width: "100px",
              textAlign: "center",
              borderRadius: "8px",
            }}
          >
            <a style={{ color: "inherit", textDecoration: "none" }} href="/">
              LGE CloneCoding
            </a>
          </InfoSpan>
          <InfoSpan>통신판매업신고번호 : 제2023-00000인</InfoSpan>
          <InfoSpan>주소 : 서울시 우리집</InfoSpan>
        </InfoP>
        <InfoLastP>
          본 사이트는 LGE(LG전자 홈페이지)를 클론코딩한 사이트 입니다.
        </InfoLastP>
        <InfoLastP>
          본 쇼핑몰에서는 상품을 주문할 수 없으며, 해당 기능 또한 존재하지
          않습니다.
        </InfoLastP>
        <InfoLastP>
          본 사이트는 상업 목적이 아님을 다시 명시드리며, 해당 저작권은 LG
          Electronics에 있음을 분명히 밝힙니다.
        </InfoLastP>
        <InfoLastP>
          Copyright © 2022 LG Electronics. All Rights Reserved.
        </InfoLastP>
      </InfoWrap>
      <div>
        <a href="/">
          <dl>
            <dt></dt>
            <dd></dd>
          </dl>
          <dl>
            <dt></dt>
            <dd></dd>
          </dl>
        </a>
      </div>
    </BottomBodyWrap>
  );
};

export default Bottombody;
