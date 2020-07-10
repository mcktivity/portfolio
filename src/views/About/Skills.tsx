import React, { CSSProperties } from "react";

export default () => {
  const sectionStyle: CSSProperties = {
    backgroundColor: "#ffffff",
    margin: 4,
    borderRadius: 4,
    padding: "1.5em",
  };

  return (
    <main aria-label="egenskaper">
      <section style={sectionStyle} aria-label="it kunnskaper">
        <h2>IT KUNNSKAPER</h2>
        <ul className="colored-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>SASS/SCSS</li>
          <li>React</li>
          <li>Sprint</li>
          <li>Continuous Delivery</li>
          <li>Jira</li>
          <li>Slack</li>
          <li>Azure DevOps</li>
          <li>Figma</li>
          <li>LogRocket</li>
          <li>Universell utforming</li>
          <li>Responsivt design</li>
        </ul>
      </section>
      <section style={sectionStyle} aria-label="personlige egenskaper">
        <h2>PERSONLIGE EGENSKAPER</h2>
        <ul className="colored-list">
          <li>Læringsvillig, engasjert og faglig nysgjerrig</li>
          <li>Liker å dele kunnskap</li>
          <li>Løsningsorientert</li>
          <li>Fleksibel</li>
          <li>Jobber nøyaktig og med stor arbeidskapasitet</li>
          <li>Tillitsfull, lojal og til å stole på</li>
          <li>Lagspiller som også evner å jobbe selvstendig</li>
          <li>Initiativrik og ressurssterk</li>
          <li>Ansvarlig og målbevisst</li>
          <li>Løsningsorientert</li>
          <li>Godt humør </li>
        </ul>
      </section>
      <section style={sectionStyle} aria-label="språk">
        <h2>SPRÅK </h2>
        <ul className="colored-list">
          <li>
            <b>Norsk</b> (Muntlig - God, Skriftlig - God)
          </li>
          <li>
            <b>Engelsk</b> (Muntlig - Meget God, Skriftlig - Meget God)
          </li>
          <li>
            <b>Filippinsk</b> (Muntlig - Meget God, Skriftlig - Meget God)
          </li>
        </ul>
      </section>
    </main>
  );
};
