import React from "react";

interface MenuItemProps {
  link: string;
  description: string;
  onClick(): void;
}

export default ({ link, description, onClick }: MenuItemProps) => {
  function closeMenu() {
    const menuBtn = document.getElementById("menu-button");
    const overlay = document.getElementById("menu-overlay");
    if (menuBtn && overlay) {
      menuBtn.classList.remove("active");
      overlay.style.height = "0%";
    }

    setTimeout(() => onClick(), 400);
    return;
  }

  return (
    <li key={link} className="menu-item" onClick={() => closeMenu()}>
      <h3 className="item-link">{link}</h3>
      <p className="item-description">{description}</p>
    </li>
  );
};
