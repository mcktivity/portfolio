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
          <b>verktøy.</b> Git, DevTools, Jira, Slack, devOps, node, osv.
        </p>
        <p>
          <b>annet.</b> responsive design, continuous deployment, object oriented,
          functional programming
        </p>
      </article>
      <article>
        <header>motivasjon</header>
        <p>{text_motivasjon}</p>
      </article>
    </Page>
  );
};
