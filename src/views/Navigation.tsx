import React from "react";
import Menu from "../components/Menu/Menu";
import MenuItem from "../components/Menu/MenuItem";
import { cvLink, srcLink } from "../consts";

export default () => {
  function sendMail() {
    window.location.href = "mailto:mronoya@hotmail.com";
  }

  return (
    <Menu>
      <MenuItem
        link="litt om mcklien"
        description="nøkkelkompetanse. litt om meg."
        onClick={() =>
          document
            .getElementById("aboutMe")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <MenuItem
        link="arbeid, studie"
        description="relevant arbeidserfaring. studie."
        onClick={() =>
          document
            .getElementById("arbeid")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <MenuItem
        link="teknologi, kunnskap"
        description="teknologi, verktøy og kunnskaper."
        onClick={() =>
          document
            .getElementById("teknologi")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <MenuItem
        link="les hele cven"
        description="oppdatert cv. åpnes i Google Docs."
        onClick={() => window.open(cvLink, "_blank")}
      />
      <MenuItem
        link="ta kontakt"
        description="send epost: mronoya@hotmail.com "
        onClick={() => sendMail()}
      />
      <MenuItem
        link="src kode"
        description="kode bak portfolio. åpnes i Github."
        onClick={() => window.open(srcLink, "_blank")}
      />
    </Menu>
  );
};
