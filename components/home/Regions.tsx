'use client'

import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

const cities = [
  { name: "Beograd", image: "/img/cities/beograd.jpg" },
  { name: "Novi Sad", image: "/img/cities/novi-sad.jpg" },
  { name: "Niš", image: "/img/cities/nis.jpg" },
  { name: "Kragujevac", image: "/img/cities/kragujevac.jpg" },
  { name: "Subotica", image: "/img/cities/subotica.jpg" },
  { name: "Zrenjanin", image: "/img/cities/zrenjanin.jpg" },
  { name: "Čačak", image: "/img/cities/cacak.jpg" },
  { name: "Leskovac", image: "/img/cities/leskovac.jpg" },
];

const Regions = () => {
  const [hoveredCity, setHoveredCity] = useState(cities[0].image);
  return (
    <section className="w-full h-full -mt-8 rounded-t-[3rem] bg-foreground relative overflow-hidden">
      <div className="flex lg:gap-20 md:gap-14 gap-10 lg:p-24 md:p-18 p-6 pt-14 flex-wrap flex-col lg:flex-row items-start justify-between relative z-10">
        <div className="">
          <h2 className="lg:text-5xl text-2xl lg:mb-6 mb-2 font-extrabold text-secondary font-primary">
            Naši regioni
          </h2>
          <p className="text-card">Pronađi dom o kome sanjaš</p>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full flex-1">
          {cities.map((city, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden rounded-md lg:p-4 p-2 shadow-sm lg:mb-4 bg-white flex justify-between items-center text-card hover:bg-secondary hover:text-white transition-colors duration-300 ease-in-out cursor-pointer z-20"
              onMouseEnter={() => setHoveredCity(city.image)}
              onMouseLeave={() => setHoveredCity("")}
            >
              <h3 className="lg:text-xl font-semibold">{city.name}</h3>
              <ChevronRight className="w-4 h-4" />
            </div>
          ))}
        </div>
      </div>
      <div className="md:block hidden absolute top-0 bottom-0 right-0 w-1/2 h-auto pointer-events-none">
        {cities.map((city) => (
          <div
            key={city.name}
            className="bg-center h-full w-full absolute transition-opacity duration-500"
            style={{
              backgroundImage: `url(${city.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: hoveredCity === city.image ? 1 : 0,
            }}
          />
        ))}
        <div
          className="absolute left-0 bottom-0 w-full z-0"
          style={{
            height: "100%",
            background:
              "linear-gradient(100deg,rgb(248, 250, 252) 0%, rgb(248, 250, 252) 20%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
};

export default Regions;
