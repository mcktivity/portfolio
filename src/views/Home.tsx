import React from "react";
import ProfilePic from "../images/profile-picture.jpg";

export default () => {
  let currentYear = new Date().getFullYear();
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#ffffff",
        maxWidth: 900,
        margin: "0 auto",
        marginTop: 150,
        padding: 40,
        borderRadius: "0.5em",
      }}
    >
      <picture>
        <img src={ProfilePic} alt="avatar" className="profile-pic" />
      </picture>
      <section>
        <h2 style={{ letterSpacing: -1 }}>Hei. Mitt navn er Mcklien Ross.</h2>
        <p style={{ marginTop: 20, letterSpacing: 0.3 }}>
          Konverterer kaffe til koder siden 2018. Jeg er en {currentYear - 1993}
          -år gammel Frontend-utvikler som bor i Lørenskog. Jeg har diverse
          ferdigheter, fra HTML + CSS, JavaScript til TypeScript, strategisk
          innhold og responsiv design, og helt til rammeverke som React og Vue.
        </p>
      </section>
    </div>
  );
};
