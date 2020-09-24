import React from "react";
import Page from "../components/Page/Page";
import { text_erfaring } from "../consts";

export default () => {
  return (
    <Page id="arbeid" className="arbeid">
      <article>
        <header>relevant erfaring</header>
        <p>{text_erfaring}</p>
      </article>
      <article>
        <header>studie. emner.</header>
        <p>
          <b>OsloMet. </b>
          webapplikasjon, universell utforming og nettverk- og
          systemadministrasjon
        </p>
        <p>
          <b>H Kristiania. </b>
          forbrukeratferd, kreativitet, innovasjon og nyskapning, og mobile
          økosystemer
        </p>
      </article>
    </Page>
  );
};
