import styled from "styled-components";

export const ContentWrap = styled.div`
  width: calc((100%-24px) / 4 * 3);
`;

export const ShopList = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 24px;
`;

export const ShopBanner = styled.div`
  width: 495px;
  border-radius: 16px;
  background-color: #fff;
`;

export const Atag = styled.a`
  height: 200px;
  width: 495px;
  padding: 32px;
  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: inherit;
  text-decoration: none;
`;

export const ShopImage = styled.div`
  bottom: 0;
  right: 30px;
  width: 160px;
  height: 132px;
  position: absolute;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: middle;
  border: 0 none;
`;

export const TextWrap = styled.div``;

export const Desc = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #000;
  opacity: 0.7;
`;

export const Title = styled.div`
  margin-top: 4px;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
`;
