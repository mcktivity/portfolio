import React, { useState } from "react";

export default ({ children }: { children: any }) => {
  const [open, setOpen] = useState(false);
  let height = "0";
  let iconClass = "menu-btn";

  if (open) {
    height = "100%";
    iconClass += " active";
  }

  return (
    <>
      <div className="menu-icon">
        <div className={iconClass} onClick={() => setOpen(!open)}>
          <ul>
            <li className="line"></li>
            <li className="line"></li>
            <li className="line"></li>
          </ul>
          <div className="menu-txt">meny</div>
        </div>
      </div>

      <div className="overlay" style={{ height: height }}>
        <div className="overlay-content">{children}</div>
      </div>
    </>
  );
};
