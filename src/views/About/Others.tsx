import React from "react";
import travel1 from "./../../images/travel-1.jpg";
import travel2 from "./../../images/travel-2.jpg";
import travel3 from "./../../images/travel-3.jpg";
import travel4 from "./../../images/travel-4.jpg";
import travel5 from "./../../images/travel-5.jpg";
import travel6 from "./../../images/travel-6.jpg";
import mat1 from "./../../images/mat-1.jpg";
import mat2 from "./../../images/mat-2.jpg";
import cat1 from "./../../images/hugs-1.jpg";
import cat2 from "./../../images/hugs-2.jpg";
import spill1 from "./../../images/spill-1.jpg";
import spill2 from "./../../images/spill-2.jpg";
import spill3 from "./../../images/spill-3.jpg";

export default () => {
  return (
    <main>
      <section aria-label="travel-and-food">
        <h2>REISE + MAT</h2>
        <p>
          Min interesse for reising har vært med meg så lenge jeg kan huske. Å
          reise til andre steder gir nye kunnskap, opplevelse, gode minner og
          appetittvekkende <b>mat</b>. Jeg har vært i mange steder i landet og
          innenfor EU og Asia sammen med kona. Et utvalg av mine reiser med
          kona:
        </p>
        <figure role="group" aria-label="travel-and-food-images">
          <img className="travel" src={travel1} alt="Windmill in Copenhagen" />
          <img
            className="travel"
            src={travel2}
            alt="Northern lights in iceland"
          />
          <img
            className="travel"
            src={travel3}
            alt="Changdeukgung palace in South Korea"
          />
          <img
            className="travel"
            src={travel4}
            alt="La Sagrada de Familia in Spain"
          />
          <img
            className="travel"
            src={travel5}
            alt="WindMills in Netherlands"
          />
          <img className="travel" src={travel6} alt="Gondola ride in Venice" />
          <img className="travel" src={mat1} alt="koreansk vafler i pinner" />
          <img className="travel" src={mat2} alt="tailormade donuts" />
        </figure>
      </section>
      <section aria-label="games">
        <h2>SPILL</h2>
        <p>
          Når det gjelder spill så liker jeg mest de strategiske og{" "}
          <i>designing</i>.
        </p>
        <figure role="group" aria-label="games-images">
          <img className="travel" src={spill1} alt="dota2 logo" />
          <img
            className="travel"
            src={spill2}
            alt="animal crossing: new horizons logo"
          />
          <img
            className="travel"
            src={spill3}
            alt="Zelda: breath of the wild logo"
          />
        </figure>
      </section>
      <section aria-label="games">
        <h2>KATT, KATT, KATT</h2>
        <p>
          Møt katten min, Hugs. Hugs er ikke en typisk katt. Han er{" "}
          <i>sweet but psycho</i>. Han er kosete men aldri glemmer å jakte etter
          **** ute og få den byttet til godteri.
        </p>
        <figure role="group" aria-label="cat-images">
          <img className="travel" src={cat1} alt="katt ute i gress" />
          <img className="travel" src={cat2} alt="katt i brille" />
        </figure>
      </section>
    </main>
  );
};
