import React, { CSSProperties } from "react";
import ProfilePic from "../images/profile-picture.jpg";

export default () => {
  let currentYear = new Date().getFullYear();
  const baseStyle: CSSProperties = {
    maxWidth: 900,
    margin: "0 auto",
    textAlign: "center",
  };
  return (
    <main style={baseStyle}>
      <section aria-label="introduction">
        <picture aria-label="profile-photo">
          <img src={ProfilePic} alt="avatar" className="profile-pic" />
        </picture>
        <h2 style={{ letterSpacing: -1 }}>Hei. Mitt navn er Mcklien Ross.</h2>
        <p style={{ marginTop: 20, letterSpacing: 0.3 }}>
          Konverterer kaffe til koder siden 2018. Jeg er en {currentYear - 1993}
          -år gammel Frontend-utvikler som bor i Lørenskog. Jeg har diverse
          ferdigheter, fra HTML + CSS, JavaScript til TypeScript, strategisk
          innhold og responsiv design, og helt til rammeverke som React og Vue.
        </p>
        <br />
      </section>
    </main>
  );
};
