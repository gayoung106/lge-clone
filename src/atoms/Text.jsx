import React, { useMemo, memo } from "react";

const Text = (props) => {
  const {
    content,
    fontSize,
    fontFamily,
    fontWeight,
    className,
    padding,
    margin,
    color,
    customStyle,
  } = props;

  const style = useMemo(() => {
    return {
      content,
      fontSize,
      fontFamily,
      fontWeight,
      className,
      color,
      padding,
      margin,
      ...customStyle,
    };
  }, [
    content,
    fontWeight,
    fontSize,
    fontFamily,
    padding,
    className,
    margin,
    color,
    customStyle,
  ]);

  return (
    <span
      content={content}
      fontFamily={fontFamily}
      fontSize={fontSize}
      style={style}
      className={className}
      padding={padding}
      margin={margin}
      color={color}
      customstyle={customStyle}
    >
      {content}
    </span>
  );
};

export default memo(Text);
