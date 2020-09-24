import React from "react";

interface PageProps {
  id: string;
  className: string;
  children: any;
}
export default ({ id, children, className }: PageProps) => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  let debounceResize: any;
  const recalculate = (vh: number) =>
    document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    clearTimeout(debounceResize);
    setTimeout(() => recalculate(vh), 800);
  });

  let pageClass: string = "page";
  if (className) pageClass += ` ${className}`;

  function slideDown(e: any) {
    // get offset to determine "top" target
    let self = e.target.parentElement;
    if (!self) return;
    var offset = self.getBoundingClientRect();
    var scroll = self.offsetTop;

    //smooth slide.
    window.scrollTo({ top: offset.height + scroll, behavior: "smooth" });
  }

  function slideTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section id={id} className={pageClass}>
      {children}
      <button className="next-button" onClick={(e) => slideDown(e)}>
        &#8595;
      </button>
      <button className="slide-top-button" onClick={() => slideTop()}>
        &#10514;
      </button>
    </section>
  );
};
