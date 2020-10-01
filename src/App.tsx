import React from "react";
import "./css/site.scss";

import About from "./views/About";
import Banner from "./views/Banner";
import Logo from "./views/Logo";
import Navigation from "./views/Navigation";
import Arbeid from "./views/Arbeid";
import Teknologi from "./views/Teknologi";

function App() {
  return (
    <main className="App">
      <Logo />
      <Navigation />
      <section>
        <Banner />
        <About />
        <Arbeid />
        <Teknologi />
      </section>
    </main>
  );
}

export default App;
