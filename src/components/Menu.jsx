import React from "react";
import { MenuWrap, MenuUl, MenuText, IconWrap } from "../styles/Menu";
import Delivery from "../assets/mo_icon_shopping.svg";
import Promotion from "../assets/icon-home-promotion-event.svg";
import Rental from "../assets/icon-home-rental-02.svg";
import Filter from "../assets/02_icon_home_cleaning_filter_64.svg";
import Live from "../assets/icon-home-liveshow.svg";
import Academy from "../assets/icon-home-academy-store.svg";
import Event from "../assets/icon-home-event.svg";
import BestShop from "../assets/icon-home-bestshop.svg";
import Solution from "../assets/icon-home-solution.svg";
import Customer from "../assets/icon-home-customer.svg";

const menuItems = [
  { image: Delivery, text: "내일배송" },
  { image: Promotion, text: "기획전" },
  { image: Rental, text: "렌탈" },
  { image: Filter, text: "소모품" },
  { image: Live, text: "엘라쇼" },
  { image: Academy, text: "아카데미\n스토어" },
  { image: Event, text: "고객\n이벤트" },
  { image: BestShop, text: "베스트샵\n이벤트" },
  { image: Solution, text: "제품\n문제 해결" },
  { image: Customer, text: "고객지원" },
];

const Menu = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MenuWrap>
        <MenuUl>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href="/">
                <IconWrap>
                  <img src={item.image} alt="" />
                </IconWrap>
              </a>
              <MenuText>{item.text}</MenuText>
            </li>
          ))}
        </MenuUl>
      </MenuWrap>
    </div>
  );
};

export default Menu;
