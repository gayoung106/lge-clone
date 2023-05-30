import styled from "styled-components";

export const BestWrap = styled.div`
  margin-top: 32px;
  padding: 0;
  word-break: break-all;
  width: 1380px;
`;

export const SalesList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 552px;
`;

export const MainBanner = styled.div`
  height: 552px;
  width: calc((100% - 24px) / 2);
  border-radius: 16px;
  box-shadow: 1px 1px 18px -4px rgba(0, 0, 0, 0.14);
  background-color: #fff;
  overflow: hidden;

  &:first-child {
    margin-left: 0;
  }
`;

export const Atag = styled.a`
  color: inherit;
  text-decoration: none;
  padding: 0;
  flex-direction: column;
  display: flex;
`;

export const MainImage = styled.div`
  display: block;
`;

export const MainSpan = styled.span`
  width: 100%;
  height: 358px;
  position: relative;
  display: flex;
`;

export const Image = styled.img`
  max-width: 678px;
  max-height: 358px;
`;

export const ItemInfo = styled.div`
  margin-left: 0;
  padding: 29px 32px 32px;
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
  font-size: 16px;
  margin-top: 2px;
  display: block;
  line-height: 1.43;
  color: #666;
`;

export const PriceWrap = styled.div`
  margin-top: 22px;
`;

export const Blind = styled.em`
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

export const ItemPrice = styled.span`
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
`;
