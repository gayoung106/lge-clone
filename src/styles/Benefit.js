import styled from "styled-components";

export const ContentWrap = styled.div``;

export const PromotionList = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-top: 32px;
  column-gap: 24px;
`;

export const SlideItem = styled.div`
  width: calc((100%-48px) / 3);
`;

export const Atag = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
`;

export const ItemImage = styled.div`
  border-radius: 16px;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: middle;
  border: 0 none;
`;

export const ItemTitle = styled.p`
  margin-top: 16px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
