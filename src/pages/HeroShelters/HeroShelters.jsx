import React from "react";

import { BubbleText } from "./BubbleText";
import stylesHero from "./HeroShelters.module.css";

const HeroShelters = () => {
  return (
    <div className={stylesHero.heroShelters}>
      <div className={stylesHero.heroContent}>
        <BubbleText />
      </div>
    </div>
  );
};

export default HeroShelters;
