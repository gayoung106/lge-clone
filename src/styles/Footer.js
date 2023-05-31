import styled from "styled-components";

export const FooterModule = styled.div`
  padding: 0 40px 48px;
  background-color: #f4f4f4;
`;

export const FooterContent = styled.div`
  width: 100%;
  height: 281px;
`;

export const FooterArea = styled.div`
  max-width: 1284px;
  margin: 0 auto;
`;

export const DownDrop = styled.div`
  display: none;
  position: relative;
  padding-bottom: 136px;
`;

export const LinkWrap = styled.ul`
  display: none;
  margin: -12px -6px -20px;
  padding-bottom: 16px;
  font-size: 0;
  list-style: none;
`;

export const BottomHead = styled.div`
  position: relative;
  padding: 16px 0;
  margin-bottom: 32px;
`;

export const DropdownWrap = styled.div`
  float: left;
`;

export const DropDown = styled.div`
  display: inline-block;
  position: relative;
  margin-right: 24px;
  padding: 8px 0;
  vertical-align: top;
`;

export const Atag = styled.a`
  display: inline-block;
  color: #000;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  vertical-align: top;
  text-decoration: none;

  &::after {
    content: " ";
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 0 0 4px;
    background: url(/lg5-common/images/icons/btn-down-16-black.svg) center
      no-repeat;
    vertical-align: top;
    transition: all 0.3s;
  }
`;

export const DropList = styled.ul`
  display: none;
  position: absolute;
  top: 33px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  padding: 4px 0;
  border-radius: 4px;
  background: #fff;
  box-shadow: 2px 4px 12px 0 rgba(0, 0, 0, 0.16);
  list-style: none;
`;

export const List = styled.li`
  list-style: none;
`;

export const DropTag = styled.a`
  background: #f4f4f4;
  display: block;
  padding: 0 20px;
  color: #000;
  font-size: 12px;
  line-height: 40px;
  text-align: center;
  font-weight: 500;
  white-space: nowrap;
  text-decoration: none;
`;

export const Tag = styled.a`
  display: block;
  padding: 0 20px;
  color: #000;
  font-size: 12px;
  line-height: 40px;
  text-align: center;
  font-weight: 500;
  white-space: nowrap;
  text-decoration: none;
`;

export const SnsLink = styled.ul`
  display: flex;
  float: right;
  font-size: 0;
  list-style: none;
  column-gap: 24px;
`;

export const SnsList = styled.li`
  list-style: none;
  margin-left: 0;
`;

export const SnsTag = styled.a`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #666;
  text-decoration: none;

  /* &::before {
    background-image: url(/lg5-common/images/icons/icon-sns1.svg);
    display: inline-block;
    margin-right: 4px;
    width: 28px;
    height: 28px;
    background: no-repeat center center;
    background-size: 100%;
    content: "";
  } */
`;

export const SnsImg = styled.img`
  display: inline-block;
  margin-right: 4px;
  width: 28px;
  height: 28px;
  background: no-repeat center center;
  background-size: 100%;
  content: "";
`;
export const SnsTitle = styled.span`
  max-width: 56px;
`;

export const BottomBodyWrap = styled.div`
  position: relative;
  padding-top: 16px;
  border-top: 1px solid #ddd;
`;

export const BottomLink = styled.ul`
  padding: 0;
  font-size: 0;
  list-style: none;
`;

export const BottomLinkList = styled.li`
  margin-right: 12px;
  margin-left: 0;
  display: inline-block;
  vertical-align: top;
  list-style: none;
`;

export const BottomLinkTag = styled.a`
  display: inline-block;
  color: #000;
  font-size: 12px;
  line-height: 16px;
  text-decoration: none;
`;

export const CallTo = styled.ul`
  margin-top: 8px;
  font-size: 0;
  list-style: none;
  padding: 0;
`;

export const CallList = styled.li`
  display: inline-block;
  font-size: 12px;
  line-height: 16px;
  color: #666;
  list-style: none;

  height: 10px;
  align-items: center;
  border-right: solid #aaa thin;
  padding-right: 5px;
`;

export const CallTag = styled.a`
  color: #000;
  cursor: text;
  text-decoration: none;
`;

export const TimeTo = styled.ul`
  margin-top: 8px;
  font-size: 0;
  padding: 0;
  list-style: none;
`;

export const TimeList = styled.li`
  display: inline-block;
  font-size: 12px;
  line-height: 16px;
  color: #666;
  list-style: none;
`;

export const InfoWrap = styled.div`
  margin-top: 16px;
  padding-right: 220px;
`;

export const InfoP = styled.p`
  margin-bottom: 12px;
  margin-top: 4px;
  color: #767676;
  font-size: 12px;
  line-height: 16px;
`;

export const InfoSpan = styled.span`
  display: inline-block;
  margin-right: 16px;
  vertical-align: top;
`;

export const InfoLastP = styled.p`
  margin-top: 4px;
  color: #767676;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 2px;
`;
