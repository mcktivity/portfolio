import React from "react";

export default ({ children }: { children: any }) => {
  //   const [open, setOpen] = useState<boolean>(false);

  function openMenu() {
    const menuBtn = document.getElementById("menu-button");
    const overlay = document.getElementById("menu-overlay");

    if (menuBtn?.classList.contains("active")) {
      menuBtn.classList.remove("active");
      if (overlay) overlay.style.height = "0%";
    } else {
      menuBtn?.classList.add("active");
      if (overlay) overlay.style.height = "100%";
    }
  }

  return (
    <>
      <button
        id="menu-button"
        className="menu-btn"
        name="menu-icon"
        onClick={() => openMenu()}
      >
        <ul>
          <li className="line"></li>
          <li className="line"></li>
          <li className="line"></li>
        </ul>
      </button>

      <main className="menu-overlay" id="menu-overlay">
        <ul>{children}</ul>
      </main>
    </>
  );
};
