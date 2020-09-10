import React from "react";
import ProfilePic from "./../images/profile-picture.jpg";

export default () => {
  return (
    <main className="container">
      <section>
        <article>
          <header>&#60;relevant erfaring &#47;&#62;</header>
          <p>
            Hovedansvarlig for frontend utviklingen hos en startup. Jobbet med
            React, HTML, CSS, JS og TypeScript. Varierte arbeidsoppgaver som å
            implementere nye design, responsivt designing som kan brukes på alle
            flater, vedlikehold, testing, osv.
          </p>
        </article>
      </section>
      <section>
        <article>
          <img src={ProfilePic} className="profile-pic" alt="profile" />
          <header>&#60;om mcklien &#47;&#62;</header>
          <p>
            Jeg kommer fra filippinene og har bodd i Norge
            siden 2012. Jeg er en frontend utvikler med bakgrunn i
            webapplikasjon. Jeg er nysgjerrig på nye moderne teknologi og
            brenner for å ta den i bruk i å skape noe som virkelig betyr noe og
            skape en bedre fremtid.
          </p>
        </article>
      </section>
      <section>
        <article>
          <header>&#60;motivasjon &#47;&#62;</header>
          <p>
            Jeg er dypt motivert i å jobbe med gode digitale tjenester og
            utvikling for mobile plattform. Jeg er interessert i å jobbe med nye
            og spennende prosjekter med stor samfunnsbetydning og stor
            offentlige interesse som gir gode mulighet for faglig og personlig
            utvikling.
          </p>
        </article>
      </section>
      <section>
        <article>
          <header>&#60;Nøkkel kompetanse &#47;&#62;</header>
          <ul>
            <li>HTML, SCSS, JavaScript, TypeScript og React.</li>
            <li>Læringsvillig, engasjert og faglig nysgjerrig </li>
            <li>Fleksibel og trives med varierte arbeidsoppgaver </li>
            <li>Lagspiller som også evner å jobbe selvstendig</li>
            <li> God kommunikasjon</li>
            <li>Jobber strukturert, målbevisst og med stor arbeidskapasitet</li>
          </ul>
        </article>
      </section>
      <section>
        <article>
          <header>&#60;studiet &#47;&#62;</header>
          <p>
            <b>OsloMet.</b> <br /> webapplikasjon, universell utforming og
            nettverk- og systemadministrasjon
          </p>
          <p>
            <b>Kristiania.</b>
            <br /> forbrukeratferd, kreativitet, innovasjon og nyskapning, og
            mobile økosystemer
          </p>
        </article>
      </section>
      <section>
        <article>
          <header>&#60;teknologi &#47;&#62;</header>
          <p>
            <b>koder.</b> React, HTML, SCSS, JavaScript, TypeScript.
          </p>
          <p>
            <b>verktøy.</b> Git, DevTools, Jira, Slack, devOps, NPM, osv.
          </p>
          <p>
            <b>annet.</b> Figma, MaterialUI, responsive, Scrum, Continuous
            deployment
          </p>
        </article>
      </section>
    </main>
  );
};
