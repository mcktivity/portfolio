import React from "react";
import Menu from "../components/Menu/Menu";
import MenuItem from "../components/Menu/MenuItem";
import { cvLink } from "../consts";

export default () => {
  return (
    <Menu>
      <MenuItem
        link="les cven"
        description="oppdatert cv. åpnes i Google Docs."
        onClick={() => window.open(cvLink, "_blank")}
      />
      <MenuItem
        link="om mcklien"
        description="nøkkelkompetanse. litt om meg."
        onClick={() =>
          document
            .getElementById("omMeg")
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
        link="src kode"
        description="kode bak portfolio. åpnes i Github."
        onClick={() => alert("")}
      />
    </Menu>
  );
};
