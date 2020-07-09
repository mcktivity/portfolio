import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";

interface NavbarProps {
  items: string[];
}

export default ({ items }: NavbarProps) => {
  const history = useHistory();

  const [selectedItem, setSelected] = useState<string>(items[0]);
  function selectItem(i: string) {
    setSelected(i);
    history.push(`/om/${i}`);
  }

  return (
    <div className="navbar">
      {items.length !== 0 &&
        items.map((i, idx) => (
          <NavbarItem
            key={idx}
            text={i}
            onClick={() => selectItem(i)}
            selected={i === selectedItem}
          />
        ))}
    </div>
  );
};

interface NavbarItemProps {
  text: string;
  onClick(): void;
  selected: boolean;
}

const NavbarItem = ({ text, onClick, selected }: NavbarItemProps) => {
  const [textEffect, setTextEffect] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  function onClickTab() {
    setTextEffect("");
    onClick();
  }

  return !selected ? (
    <>
      {!isMobile && text === textEffect && (
        <div className="navbar-item-effect">{text}</div>
      )}
      <div
        className="navbar-item"
        onClick={onClickTab}
        onMouseEnter={() => setTextEffect(text)}
        onMouseLeave={() => setTextEffect("")}
      >
        {text.toUpperCase()}
      </div>
    </>
  ) : (
    <></>
  );
};
