import styled from "styled-components";

export const SubBanner = styled.div`
  background-color: #fff;
  overflow: hidden;
  width: calc((100% - 24px) / 2);
  height: 264px;
  margin-left: 24px;
  border-radius: 16px;
  box-shadow: 1px 1px 18px -4px rgba(0, 0, 0, 0.14);
`;

export const Atag = styled.a`
  padding: 22px 32px 21px;
  display: flex;
  color: inherit;
  text-decoration: none;
`;

export const ImageItem = styled.div`
  display: block;
`;

export const ImgSpan = styled.span`
  width: 200px;
  height: 200px;
  display: flex;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: middle;
  border: 0 none;
  overflow-clip-margin: content-box;
  overflow: clip;
`;

export const ItemInfo = styled.div`
  margin-left: 40px;
  padding-top: 39px;
  align-self: flex-start;
`;

export const ItemName = styled.div`
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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

export const Bline = styled.em`
  position: absolute;
  z-index: -10;
  width: 0 !important;
  height: 0 !important;
  overflow: hidden !important;
  font-size: medium;
  line-height: normal;
  word-break: break-all;
`;

export const ItemPrice = styled.span`
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
`;
