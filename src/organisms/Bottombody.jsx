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
          <CallTag href="/">02-3777-1114</CallTag>
        </CallList>
        <CallList style={{ paddingLeft: "5px" }}>
          <span>제품/서비스 문의 : </span>
          <CallTag href="/">1544-7777</CallTag>
        </CallList>
        <CallList style={{ paddingLeft: "5px", border: "none" }}>
          <span>LGE.COM 구매 문의(가전/소모품/렌탈 신규) : </span>
          <CallTag href="/">1544-6351</CallTag>
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
          <InfoSpan>대표이사 : 조주완, 배두용</InfoSpan>
          <InfoSpan>사업자등록번호 : 107-86-14075</InfoSpan>
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
              사업자 정보확인
            </a>
          </InfoSpan>
          <InfoSpan>통신판매업신고번호 : 제1997-00084인</InfoSpan>
          <InfoSpan>주소 : 서울시 영등포구 여의대로 128 LG트윈타워</InfoSpan>
        </InfoP>
        <InfoLastP>
          본 사이트에서 게시되는 상품 중에는 타 쇼핑몰에서 판매하는 상품이
          포함되어 있습니다.
        </InfoLastP>
        <InfoLastP>
          타 쇼핑몰 판매 상품의 경우 엘지전자㈜는 통신판매의 당사자가 아니므로,
          해당 상품, 거래 정보 및 거래 등에 대해 책임을 지지 않습니다.
        </InfoLastP>
        <InfoLastP>
          본 사이트의 모든 콘텐츠는 저작권법의 보호를 받는 바, 무단 전재, 복사,
          배포 등을 금합니다.
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
