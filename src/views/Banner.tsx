import React from "react";
import Button from "../components/Button";
import { useHistory, useLocation } from "react-router-dom/";

export default () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <div style={{ textAlign: "center", marginTop: 100, color: "#ffffff" }}>
      <p className="size-56 weight-light uppercase white">
        <b>Frontend</b> Utvikler
      </p>
      <p className="size-24 weight-light white" style={{ padding: "0px 15px" }}>
        Skriver koder som gir liv til vakre designkonsepter
      </p>
      <div
        style={{
          display: "flex",
          maxWidth: "fit-content",
          margin: "70px auto 100px",
        }}
      >
        {!location.pathname.includes("/portfolio/om") && (
          <Button
            color="white"
            title="Om meg"
            onClick={() => history.push("/portfolio/om/nokkelkompetanse")}
          />
        )}
        {location.pathname.includes("/portfolio/om") && (
          <Button
            color="white"
            title="Hjem"
            onClick={() => history.push("/portfolio")}
          />
        )}
        <Button
          color="white"
          title="Sjekk CV"
          onClick={() =>
            window.open(
              `https://docs.google.com/document/d/1w7j3xbgvnlE5JDx7bVEQ4pzm30AxFr-n07321r5k5Kk/edit?usp=sharing`
            )
          }
        />
      </div>
    </div>
  );
};
