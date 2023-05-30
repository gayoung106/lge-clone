import React from "react";
import { RankTab, TabWrap, Tabs, TabList, TabName } from "../styles/Filter";

const Filter = () => {
  const tabItems = [
    { id: 1, name: "공기청정기" },
    { id: 2, name: "노트북" },
    { id: 3, name: "에어컨" },
    { id: 4, name: "TV" },
    { id: 5, name: "냉장고" },
    { id: 6, name: "김치냉장고" },
    { id: 7, name: "식기세척기" },
    { id: 8, name: "워시타워" },
    { id: 9, name: "청소기" },
    { id: 10, name: "AV" },
  ];
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
      {tabItems.map((item, index) => (
        <RankTab key={index}>
          <TabWrap>
            <Tabs>
              <TabList>
                <TabName href="/">
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
