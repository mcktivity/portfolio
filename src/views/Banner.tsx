import React from "react";
import Page from "../components/Page/Page";
import { text_banner as banner, text_aboutMe } from "../consts";

export default () => {
  return (
    <Page id="banner" className="banner">
      <header>&#60;frontend utvikler &#47;&#62;</header>
      <p>{banner}</p>
    </Page>
  );
};
