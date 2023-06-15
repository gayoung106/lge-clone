import styled from "styled-components";

export const RankTab = styled.div`
  overflow: hidden;

  &.selected {
    background: #303030;
    color: #fff;
    font-weight: 500;
  }

  @media screen and (min-width: 768px) {
    /* margin-top: 24px; */
  }
`;

export const TabWrap = styled.div`
  position: relative;
  display: block;
  text-align: center;
  /* @media screen and (min-width: 768px) {
    overflow: visible !important;
  } */
`;

export const Tabs = styled.ul`
  display: inline-block;
  /* max-width: 100%; */
  position: relative;
  /* margin: 0 -2px; */
  padding: 0 4px;

  font-size: 0;
  vertical-align: top;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;

  /* @media screen and (min-width: 768px) {
    white-space: normal;
    transform: none !important;
    transition: none !important;
    margin-top: -8px;
  } */
`;

export const TabList = styled.li`
  /* margin-top: 8px;
  margin-left: 0;
  margin-right: 8px; */
  display: inline-block;
  padding: 2px 0;
  vertical-align: top;
  list-style: none;
`;

export const TabName = styled.a`
  background: #e2e2e2;
  color: #000;
  font-weight: 500;
  padding: 10px 24px;
  font-size: 14px;
  line-height: 40px;
  border-radius: 40px;
  text-decoration: none;
  cursor: pointer;

  /* display: block;
color: #000;
background: #e2e2e2;
font-weight: 400;
display: block;
position: relative; */
`;
