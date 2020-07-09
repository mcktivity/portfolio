import React, { CSSProperties } from "react";

interface PageProps {
  children: any;
  style?: CSSProperties;
}

export default ({ children, style }: PageProps) => {
  let baseCss = style || { margin: 0, padding: 20 };

  return (
    <div className="page" style={baseCss}>
      {children}
    </div>
  );
};
