import React from "react";
import { Grid } from "@material-ui/core";
import Navbar from "../../components/Navbar";
import { Switch, Route } from "react-router-dom";
import KeyQualifications from "../About/KeyQualifications";
import Work from "./Work";
import Education from "./Education";
import Skills from "./Skills";
import Others from "./Others";

export default () => {
  const navbarItems = [
    "nokkelkompetanse",
    "erfaring",
    "egenskaper",
    "utdanning",
    "annet",
  ];

  return (
    <Grid
      container
      alignContent="center"
      direction="column"
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: 920,
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <Navbar items={navbarItems} />
      <Switch>
        <Route path="/portfolio/om/erfaring" component={Work} />
        <Route path="/portfolio/om/egenskaper" component={Skills} />
        <Route path="/portfolio/om/nokkelkompetanse" component={KeyQualifications} />
        <Route path="/portfolio/om/annet" component={Others} />
        <Route path="/portfolio/om/utdanning" component={Education} />
      </Switch>
    </Grid>
  );
};
