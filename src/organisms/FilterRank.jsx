import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Rank from "./Rank";
import ranks from "../data/rankItems";

const FilterRank = () => {
  const [data, setData] = useState(ranks);
  const [menu, setMenu] = useState([
    { id: 1, name: "에어컨", category: "airconditioner" },
    { id: 2, name: "공기청정기", category: "airclean" },
    { id: 3, name: "노트북", category: "notebook" },
    { id: 4, name: "TV", category: "TV" },
    { id: 5, name: "냉장고", category: "refre" },
    { id: 6, name: "김치냉장고", category: "gimchi" },
    { id: 7, name: "식기세척기", category: "dish" },
    { id: 8, name: "워시타워", category: "tower" },
    { id: 9, name: "세탁기", category: "wash" },
    { id: 10, name: "청소기", category: "clean" },
    { id: 11, name: "AV", category: "AV" },
  ]);

  const onMenu = (category) => {
    if (category === "all") {
      setData(ranks);
    } else {
      setData(ranks.filter((item) => item.category === category));
    }
  };

  useEffect(() => {
    const initialData = ranks.filter(
      (item) => item.category === "airconditioner"
    );
    setData(initialData);
  }, []);
  return (
    <>
      <Filter menu={menu} onMenu={onMenu} />
      <Rank data={data} />
    </>
  );
};

export default FilterRank;
