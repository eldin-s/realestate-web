"use client";

import CountUp from "react-countup";

const Network = () => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 lg:p-24 md:p-18 p-6 lg:py-40 font-primary bg-white text-card">
      <div className="flex flex-col justify-center items-start gap-8">
        <p className="uppercase font-semibold">Nacionalni doseg</p>
        <h2 className="lg:text-4xl text-xl font-extrabold">
          Dobijte pristup najboljoj mreži u Srbiji
        </h2>
        <p>
          Kupujte i prodajte kuće širom Srbije uz pomoć mreže preporuka koja
          obuhvata više od deset gradova i desetine pouzdanih stručnjaka za
          nekretnine.
        </p>
        <div className="grid grid-cols-2 gap-y-14 lg:gap-x-64 gap-x-32">
          <div>
            <CountUp end={14} enableScrollSpy className="lg:text-6xl text-3xl font-bold" />
            <p className="font-semibold mt-4">gradova</p>
          </div>
          <div>
            <CountUp end={38} enableScrollSpy className="lg:text-6xl text-3xl font-bold" />
            <span className="lg:text-6xl text-3xl font-bold">+</span>
            <p className="font-semibold mt-4">opština</p>
          </div>
          <div>
            <CountUp end={45} enableScrollSpy className="lg:text-6xl text-3xl font-bold" />
            <span className="lg:text-6xl text-3xl font-bold">+</span>
            <p className="font-semibold mt-4">agenta</p>
          </div>
          <div>
            <CountUp end={112} enableScrollSpy className="lg:text-6xl text-3xl font-bold" />
            <span className="lg:text-6xl text-3xl font-bold">+</span>
            <p className="font-semibold mt-4">ponuda</p>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <img
          src="/img/earth2.gif"
          alt=""
          className="max-w-[38rem] max-h-[38rem]"
        />
      </div>
    </section>
  );
};

export default Network;
