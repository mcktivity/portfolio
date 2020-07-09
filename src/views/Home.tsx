import React from "react";
import Page from "../components/Page";
import ProfilePic from "../images/profile-picture.jpg";

export default () => {
  let currentYear = new Date().getFullYear();
  return (
    <Page style={{ textAlign: "center", marginTop: 150 }}>
      <picture>
        <img src={ProfilePic} alt="avatar" className="profile-pic" />
      </picture>
      <section>
        <h2 style={{ letterSpacing: -1 }}>
          Hello. I'm Mcklien Ross. Nice to meet you.
        </h2>
        <p style={{ marginTop: 20, letterSpacing: 0.3 }}>
          Converting coffee into codes since 2018. I'm a {currentYear - 1993}
          -year old Frontend developer located in Lørenskog, Norway. I have
          diverse skills, from HTML + CSS, JavaScript to TypeScript, to
          strategic content and responsive design, and all the way to frameworks
          like React and Vue.
          {/* I have experience in strategic content design and worked on
          implementation and establishment of a design concept. I have a curious
          mind and motivated by new technologies and exciting projects. As a
          person I am honest, hardworking, trustworthy and always do my best to
          meet my deadlines. I have a good sense of humor paired with
          unparalleled grilling skills. */}
        </p>
      </section>
    </Page>
  );
};
