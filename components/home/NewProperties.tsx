"use client";

import "keen-slider/keen-slider.min.css";
import "keen-slider/keen-slider.min.css";
import { RentCarousel } from "../ui/RentCraousel";

const NewProperties = () => {
  return (
    <section className="w-full z-0 relative bg-foreground pb-20">
        <div className="p-20">

      <h1 className="xl:text-7xl md:text-3xl text-xl font-extrabold mb-10 text-card font-primary">
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
