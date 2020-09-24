import React from "react";

export default () => {
  return (
    <main className="scenery">
      <section className="sky">
        <div className="wind a" />
        <div className="wind b" />
        <div className="wind c" />
      </section>
      <section className="ground">
        <div className="mountain--medium" />
        <div className="mountain--huge" />
        <div className="mountain--large" />
        <div className="mountain--low" />
        <div className="tree tree_1" />
        <div className="tree tree_2" />
        <div className="tree tree_3" />
        <div className="tree tree_4" />
        <div className="tree tree_5" />
      </section>
      <div className="lake" />
      {/* <hr className="grass" /> */}
    </main>
  );
};
