import React from "react";

export default () => {
  return (
    <main aria-label="education">
      <section>
        <h2>UTDANNING</h2>
        <a
          className="size-24 weight-bold"
          href="https://www.oslomet.no"
          rel="noopener noreferrer"
          target="_blank"
        >
          OsloMet Storbyuniversitetet
        </a>
        <p className="size-12 uppercase">AUGUST 2014 - JANUAR 2019</p>
        <p className="weight-bold">Bachelorstudium i ingeniørfag - data</p>
        <p>
          Vanlig studielæreplan med valgte emner: Webapplikasjoner, Universell
          utforming, Nettverk- og systemadministrasjon og Teknologiledelse
        </p>
        <a
          className="size-24 weight-bold"
          href="https://elvebakken.vgs.no/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Elvebakken VGS, Oslo
        </a>
        <p className="size-12 uppercase">AUGUST 2014 - JANUAR 2019</p>
        <p className="weight-bold">Studiespesialisering</p>
        <p>
          Ett årig komprimert studiespesialisering for minoritetsspråklige og
          ett år realfag i Matematikk og Fysikk
        </p>
      </section>
    </main>
  );
};
