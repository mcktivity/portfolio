import React from "react";

export const Sun = () => <div className="sun" />;

export const Moon = () => <div className="moon" />;

export const Wind = () => (
  <>
    <div className="wind a" />
    <div className="wind b" />
    <div className="wind c" />
  </>
);

export const Clouds = () => (
  <>
    <div className="cloud a" />
    <div className="cloud b" />
    <div className="cloud c" />
  </>
);

export const Stars = () => (
  <>
    <div className="star a" />
    <div className="star b" />
    <div className="star c" />
    <div className="star d" />
    <div className="star e" />
    <div className="star f" />
    <div className="star g" />
  </>
);

export const Cat = () => (
  <div className="cat-container">
    <div className="cat">
      <div className="head">
        <div className="ear-l">
          <div className="inner-l" />
        </div>
        <div className="ear-r">
          <div className="inner-r" />
        </div>
      </div>
      <div className="monitor">
        <div className="fish">
          <div className="body" />
          <div className="tail" />
        </div>
      </div>
      <div className="keyboard">
        <div className="ports">...</div>
      </div>
    </div>
  </div>
);
