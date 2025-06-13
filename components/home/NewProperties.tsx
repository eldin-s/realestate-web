"use client";

import "keen-slider/keen-slider.min.css";
import "keen-slider/keen-slider.min.css";
import { RentCarousel } from "../ui/RentCraousel";

const NewProperties = () => {
  return (
    <section className="w-full z-0 relative bg-foreground">
        <div className="p-20">

      <h1 className="text-7xl font-extrabold mb-10 text-card font-primary">
        Najsmeliji novi razvoji
      </h1>
      <p>
        Istražite transformativne nove zgrade koje podižu <br /> moderan
        luksuzni život na viši nivo.
      </p>
        </div>

      <RentCarousel />
    </section>
  );
};

export default NewProperties;
