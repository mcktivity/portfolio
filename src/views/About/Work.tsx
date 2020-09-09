import React from "react";

export default () => {
  return (
    <main style={{ width: "100%" }}>
      <section>
        <h2>RELEVANT ERFARING</h2>
        <a
          className="size-24 weight-bold"
          href="https://www.gamefraym.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          GameFraym
        </a>
        <p className="size-12 uppercase">FEB 2019 - PRESENT</p>
        <ul style={{ listStyleType: "square", marginLeft: 30, marginTop: 15 }}>
          <li>Implementert nye design fra konsept til etablering.</li>
          <li>
            Implementert responsivt design slik at appen kan brukes alle flater
          </li>
          <li>Tilpasning av brukeropplevelse med strategisk innholdsdesign </li>
          <li>Vedlikehold og oppdatering av web komponenter</li>
          <li>Testing av web appen for stabilitet </li>
        </ul>
      </section>
    </main>
  );
};
