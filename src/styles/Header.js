import styled from "styled-components";

export const HeaderWrap = styled.div`
  background-color: #fff;
  max-width: 1760px;
  height: 105px;
  margin: 0 auto;
`;

export const HeaderMain = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
`;

export const HeaderUtil = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
`;

export const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  justify-content: flex-start;
  padding: 0 0 0 0;
  margin: 12px 0;
`;

export const HeaderList = styled.li`
  /* padding: 4px 5px 12px; */
  margin-right: 25px;
`;

export const HeaderAbout = styled.div`
  border-left: solid thin;
  border-color: #ddd;
  padding: 0 20px;
  justify-content: "center";
`;

export const NavList = styled.li`
  position: relative;
  display: block;
  padding: 4px 15px 4px 0;
  /* font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  padding-left: 24px; */
  /* vertical-align: top; */
`;

export const NavItemTag = styled.a`
  position: relative;
  display: block;
  padding: 4px 0 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  padding-left: 12px;
  vertical-align: top;
  color: inherit;
  text-decoration: none;
`;

export const CategoryLayer = styled.div`
  display: none;
`;

export const CategoryInner = styled.div`
  position: absolute;
  top: 105px;
  left: 0;
  right: 0;
  z-index: 103;
  border-top: 1px solid #ddd;
  background-color: #fff;
`;

export const SwiperContainer = styled.div`
  text-align: left;
  max-width: 1760px;
  margin: 0 auto 6px;
  padding: 25px 40px 0;
  touch-action: pan-y;
  position: relative;
  overflow: hidden;
  list-style: none;
  z-index: 1;
  box-shadow: none !important;
  border-radius: 0 !important;
`;

export const SwiperWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  transform: translate3d(0, 0, 0);
`;

// export const SwiperSlideOn = styled.div `
// margin-left: 0;
// flex-shrink: 0;
// display: inline-block;
// position: relative;
// width: auto;
// padding-bottom: 2px;
// transition-property: transform;
// transform: translate3d(0,0,0);
// `

export const SwiperSlide = styled.div`
  flex-shrink: 0;
  display: inline-block;
  position: relative;
  width: auto;
  margin-left: 16px;
  padding-bottom: 2px;
  transition-property: transform;
  transform: translate3d(0, 0, 0);
`;

export const SlideItemTag = styled.a`
  color: #000;
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  text-decoration: none;
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
