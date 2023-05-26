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
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  padding-left: 24px;
  /* vertical-align: top; */
`;
