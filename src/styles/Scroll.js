import styled from "styled-components";

export const SectionWrap = styled.div`
  max-width: 1380px;
  height: 500px;
  display: flex;
  gap: 0 24px;
`;

export const ImageWrap = styled.div`
  position: relative;
  border-radius: 12px 12px 0 0;
  width: 327px;

  /* @media screen and (min-width: 768px) {
    padding: 12px 33px 12px 34px;
    background: rgba(0, 0, 0, 0.035);
  } */
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  max-width: 260px;
  height: auto;
  transform: translate(-50%, -50%);
  margin: 0;
  vertical-align: middle;
  overflow-clip-margin: content-box;
  overflow: clip;
  background-color: rgba(0, 0, 0, 0.035);
`;

export const ItemInfo = styled.div`
  padding: 24px 32px 32px;
  flex: 1;
  position: relative;
  background: rgba(0, 0, 0, 0.035);
  border-radius: 0 0 12px 12px;
`;

export const ItemName = styled.div`
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemSku = styled.div`
  margin-top: 2px;
  font-size: 16px;
  display: block;
  line-height: 1.43;
  color: #666;
`;

export const PriceWrap = styled.div`
  margin-top: 16px;
`;

export const Blind = styled.div`
  position: absolute;
  z-index: -10;
  width: 0 !important;
  height: 0 !important;
  overflow: hidden !important;
  font-size: medium;
  line-height: normal;
  word-break: break-all;
  font-style: normal;
`;

export const ItemPrice = styled.div`
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
`;

export const Line = styled.div`
  left: 24px;
  right: 24px;
  height: 2px;
  content: "";
  display: block;
  position: absolute;
  top: 0;
  background: #ddd;
`;

export const ImageSpan = styled.span`
  padding-top: 100%;
  display: block;
  position: relative;
  text-align: center;
  &::before {
    z-index: 1;
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.035);
  }
`;
