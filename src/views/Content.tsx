import React from "react";
import ProfilePic from "./../images/profile-picture.jpg";

export default () => {
  return (
    <main className="content">
      <section>
        <img className="profile-pic" src={ProfilePic} />
        <header>&#60;om mcklien &#47;&#62;</header>
        <article>
          <p>
            Jeg er en front end utvikler med bakgrunn i web applikasjon. Jeg har
            tatt datastudiet ved OsloMet. I februar 2019 begynte jeg å jobbe hos
            en startup. Der var jeg hovedansvarlig for frontend utvikling og
            jobbet hovedsakelig med HTML, CSS, JavaScript og React TypeScript.
          </p>
        </article>
      </section>
      <section>
        <header>&#60;mer erfaring &#47;&#62;</header>
        <article>
          <p>
            Som frontend utvikler, min hovedrolle er å implementere nye design
            og sørg for at designet er responsivt og ser bra ut for ulike
            flater. I tillegg gir jeg min beste å gi en helhetlig
            brukeropplevelse for brukerne. Jeg har erfaring med å jobbe i
            skjæringsunkt mellom designere og backend-utviklere for å skape de
            beste løsninger.
          </p>
        </article>
      </section>
    </main>
  );
};
