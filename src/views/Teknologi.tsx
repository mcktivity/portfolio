import React from "react";
import Page from "../components/Page/Page";
import { text_motivasjon } from "../consts";

export default () => {
  return (
    <Page id="teknologi" className="teknologi">
      <article>
        <header>teknologi</header>
        <p>
          <b>koder.</b> ReactJs, HTML, CSS/SCSS, JavaScript, TypeScript.
        </p>
        <p>
          <b>verktøy.</b> Git, DevTools, Jira, Slack, devOps, NPM, osv.
        </p>
        <p>
          <b>annet.</b> Figma, MaterialUI, responsive, Continuous
          deployment, object oriented, functional programming
        </p>
      </article>
      <article>
        <header>motivasjon</header>
        <p>{text_motivasjon}</p>
      </article>
    </Page>
  );
};
