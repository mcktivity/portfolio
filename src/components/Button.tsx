import React, { CSSProperties } from "react";

type ButtonColor = "white" | "black" | undefined;

interface ButtonProps {
  title: string;
  onClick(): void;
  color: ButtonColor;
  style?: CSSProperties;
}

export default ({ title, onClick, color, style }: ButtonProps) => {
  let className = `button`;
  let baseStyle: CSSProperties = {
    margin: "5px 20px",
    position: "relative",
    zIndex: 2,
    ...style,
  };

  return (
    <button className={className} style={baseStyle} onClick={onClick}>
      {title}
      <div className="button__horizontal"></div>
      <div className="button__vertical"></div>
    </button>
  );
};
