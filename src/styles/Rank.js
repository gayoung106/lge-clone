import styled from "styled-components";

export const RankWrap = styled.ol`
  width: 1380px;
  height: 470px;
  margin-top: 32px;
  padding: 0;
  display: flex;
  column-gap: 24px;
`;

export const RankList = styled.li`
  list-style: none;
  position: relative;
  border-radius: 0 16px 16px 16px;
  background-color: #fff;
  width: 444px;
  height: 470px;
  padding: 40px 32px 32px;

  &::before {
    top: 0;
    left: 0;
    width: 36px;
    height: 36px;
    font-size: 18px;
    line-height: 36px;
    content: counter(rank-counter);
    counter-reset: rank-counter 1;
    display: block;
    position: absolute;
    text-align: center;
    color: #fff;
    font-weight: 500;
    background: #ea1917;
  }
`;

export const Atag = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;
export const ItemImage = styled.div`
  position: relative;
  margin: 0 65px;
  /* padding-top: 65.699%; */
`;

export const Img = styled.img`
  /* position: absolute; */
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  border: 0 none;
  width: 250px;
  height: 250px;
  justify-content: center;
`;

export const ItemInfo = styled.div``;

export const ItemName = styled.strong`
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ItemSku = styled.span`
  margin-top: 2px;
  font-size: 16px;
  display: block;
  line-height: 1.43;
  color: #666;
`;
export const PriceWrap = styled.div`
  margin-top: 16px;
`;

export const Blind = styled.span`
  position: absolute;
  z-index: 0 !important;
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
