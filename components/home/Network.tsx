"use client";

import CountUp from "react-countup";

const Network = () => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 px-20 py-40 font-primary bg-white text-card">
      <div className="flex flex-col justify-center items-start gap-8">
        <p className="uppercase font-semibold">Nacionalni doseg</p>
        <h2 className="text-4xl font-extrabold">Dobijte pristup najboljoj mreži u Srbiji</h2>
        <p>Kupujte i prodajte kuće širom Srbije uz pomoć mreže preporuka koja obuhvata više od deset gradova i desetine pouzdanih stručnjaka za nekretnine.</p>
        <div className="grid grid-cols-2 gap-y-14 gap-x-64">
            <div>
                <CountUp end={14} enableScrollSpy className="text-6xl font-bold" />
                <p className="font-semibold mt-4">gradova</p>
            </div>
            <div>
                <CountUp end={38} enableScrollSpy className="text-6xl font-bold" /><span className="text-6xl font-bold">+</span>
                <p className="font-semibold mt-4">opština</p>
            </div>
            <div>
                <CountUp end={45} enableScrollSpy className="text-6xl font-bold" /><span className="text-6xl font-bold">+</span>
                <p className="font-semibold mt-4">agenta</p>
            </div>
            <div>
                <CountUp end={112} enableScrollSpy className="text-6xl font-bold" /><span className="text-6xl font-bold">+</span>
                <p className="font-semibold mt-4">ponuda</p>
            </div>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <img src="/img/earth2.gif" alt="" className="max-w-[38rem] max-h-[38rem]" />
      </div>
    </section>
  );
};

export default Network;
