"use client";

import CountUp from "react-countup";
import { MedalIcon } from "../Icons";

const Numbers = () => {
  return (
    <div className="w-full lg:p-12 p-6 relative bg-foreground">
      <div
        style={{
          backgroundImage: "url('/img/office.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-[300px] md:h-[640px] rounded-md"
      />

      <div className="flex items-center justify-center flex-col mt-24 gap-6">
        <div>
          <MedalIcon className="w-8 h-8 text-secondary" />
        </div>

        <p className="text-center text-black">
          Najpouzdanija Real Estate Agencije u državi
        </p>

        <h4 className="w-full xl:max-w-1/2 text-card text-center text-lg md:text-3xl font-primary font-bold">
          Sa drastičnim porastom broja kupaca koji se angažuju putem društvenih
          medija, najefikasnija prodaja vašeg doma zahteva saradnju sa brendom
          koji je bio pionir u žanru sadržaja o nekretninama.
        </h4>

        <h2 className="w-full text-card text-center text-xl xl:text-5xl font-primary font-black uppercase">
          Zašto svi prodaju sa nama
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20">
        <div className="text-card border border-ring/30 p-6 py-12 rounded-md text-center">
          <CountUp
            end={480}
            enableScrollSpy
            className="lg:text-7xl text-3xl font-bold"
          />
          <span className="lg:text-6xl text-3xl font-bold">+</span>
          <p className="font-semibold mt-4">prikaza mesečno</p>
        </div>
        <div className="text-card border border-ring/30 p-6 py-12 rounded-md text-center">
          <CountUp
            end={38}
            enableScrollSpy
            className="lg:text-7xl text-3xl font-bold"
          />
          <span className="lg:text-6xl text-3xl font-bold">h+</span>
          <p className="font-semibold mt-4">pratioca</p>
        </div>
        <div className="text-card border border-ring/30 p-6 py-12 rounded-md text-center">
          <CountUp
            end={120}
            enableScrollSpy
            className="lg:text-7xl text-3xl font-bold"
          />
          <span className="lg:text-6xl text-3xl font-bold">h+</span>
          <p className="font-semibold mt-4">ukupan broj prikaza</p>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
