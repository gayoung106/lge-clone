import React from "react";
import { RankTab, TabWrap, Tabs, TabList, TabName } from "../styles/Filter";

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
        <RankTab key={item.id}>
          <TabWrap>
            <Tabs>
              <TabList>
                <TabName
                  onClick={() => onMenu(item.category)}
                  className={
                    selectedCategory === item.category ? "selected" : ""
                  }
                >
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
