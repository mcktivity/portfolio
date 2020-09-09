import React from "react";
import "./css/site.scss";

import About from "./views/About";
import Navbar from "./components/NavBar/Navbar";
import Banner from "./views/Banner";
import Logo from "./views/Logo";
import SocialMedia from "./views/SocialMedia";

function App() {
  // Under arbeid
  //
  // const hour = () => {
  //   if (new Date().getHours() > 16) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  // const [isNight, setNight] = useState(true);

  return (
    <main className="App">
      <Logo />
      <Navbar>
        <p>
          <a
            href="https://docs.google.com/document/d/1w7j3xbgvnlE5JDx7bVEQ4pzm30AxFr-n07321r5k5Kk/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Les CVen
          </a>
          Fullt cv på Google Docs. Åpnes i nytt vindu.
          <a
            href="https://github.com/mcktivity/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Src kode
          </a>
          Source kode i Github. Åpnes i nytt vindu.
        </p>
        <SocialMedia />
        <p>nye og spennende prosjekter kommer senere.</p>
      </Navbar>
      <Banner />
      <section className="about">
        <About />
      </section>
    </main>
  );
}

export default App;
