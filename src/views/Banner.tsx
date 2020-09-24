import React from "react";
import Page from "../components/Page/Page";
import { text_banner } from "../consts";
import ProfilePic from "./../images/profile-picture.jpg";

export default () => {
  return (
    <Page id="banner" className="banner">
      <img src={ProfilePic} />
      <h2>&#60;navn: mcklien &#47;&#62;</h2>
      <h3>{text_banner}</h3>
    </Page>
  );
};
