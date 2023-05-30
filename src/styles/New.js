import styled from "styled-components";

export const ContentWrap = styled.div``;

export const SlideTop = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  user-select: none;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
  margin-top: 32px;
`;

export const SlideList = styled.div`
  margin: 0 -12px;
  transform: translate3d(0, 0, 0);
  position: relative;
  overflow: hidden;
  display: block;
  padding: 0;
`;

export const SlideWrap = styled.div`
  opacity: 1;
  width: 1388px;
  transform: translate3d(0px, 0px, 0px);
  position: relative;
  left: 0;
  top: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &::before {
    content: "";
    display: table;
    box-sizing: border-box;
  }
`;

export const ItemWrap = styled.div`
  width: 346px;
  display: block;
  padding: 0 12px;
  max-width: 25%;
  float: left;
  height: 100%;
  min-height: 1px;
`;

export const Atag = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
`;

export const ItemImage = styled.div`
  border-radius: 16px;
  position: relative;
  overflow: hidden;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  vertical-align: middle;
  border: 0 none;
`;

export const TextWrap = styled.div`
  margin-top: 16px;
  padding: 0 16px 0 8px;
`;

export const ItemTitle = styled.div`
  height: 56px;
  font-size: 20px;
  line-height: 1.43;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
