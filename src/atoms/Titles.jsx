import React from "react";
import Text from "./Text";

const Titles = (props) => {
  const { content, sub } = props;

  return (
    <div>
      <div>
        <Text content={content} fontSize="28px" fontWeight="bold" />
      </div>
      <div style={{ marginTop: "10px" }}>
        <Text content={sub} fontSize="20px" />
      </div>
    </div>
  );
};

export default Titles;
