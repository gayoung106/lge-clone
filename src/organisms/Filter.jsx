import React from "react";
import { RankTab, TabWrap, Tabs, TabList, TabName } from "../styles/Filter";
// import ranks from "../data/rankItems";

// const tabItems = [
//   { id: 1, name: "에어컨", category: "airconditioner" },
//   { id: 2, name: "공기청정기", category: "airclean" },
//   { id: 3, name: "노트북", category: "notebook" },
//   { id: 4, name: "TV", category: "TV" },
//   { id: 5, name: "냉장고", category: "refre" },
//   { id: 6, name: "김치냉장고", category: "gimchi" },
//   { id: 7, name: "식기세척기", category: "dish" },
//   { id: 8, name: "워시타워", category: "tower" },
//   { id: 9, name: "세탁기", category: "wash" },
//   { id: 10, name: "청소기", category: "clean" },
//   { id: 11, name: "AV", category: "AV" },
// ];

const Filter = ({ menu, onMenu, selectedCategory }) => {
  return (
    <div
      style={{
        width: "1380px",
        height: "44px",
        display: "flex",
        // margin: "0 260px",
        // padding: "0 10% 20px 10%",
        marginTop: "24px",
      }}
      className="ranking_content"
    >
      {menu.map((item) => (
        <RankTab
          key={item.id}
          className={selectedCategory === item.category ? "selected" : ""}
        >
          <TabWrap>
            <Tabs>
              <TabList>
                <TabName onClick={() => onMenu(item.category)}>
                  <span>{item.name}</span>
                </TabName>
              </TabList>
            </Tabs>
          </TabWrap>
        </RankTab>
      ))}
    </div>
  );
};

export default Filter;
