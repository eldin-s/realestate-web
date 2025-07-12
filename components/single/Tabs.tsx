"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<"#pregled" | "#karakteristike">(
    "#pregled"
  );

  const tabs = [
    { id: "#pregled", label: "Pregled" },
    { id: "#karakteristike", label: "Karakteristike i sadržaj" },
  ];

  return (
    <div className="w-full lg:px-24 md:px-18 px-6 z-0 relative bg-foreground text-card pt-8">
      <div className="flex border-b border-gray-200 justify-between">
        <div className="lg:flex hidden">
          {tabs.map((tab) => (
            <Link
              href={tab.id}
              key={tab.id}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(tab.id as "#pregled" | "#karakteristike");
                const element = document.querySelector(tab.id);
                if (element) {
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className={`px-14 py-8 text-sm font-medium transition-colors duration-200 border-b-2 hover:border-card cursor-pointer ${
                activeTab === tab.id
                  ? "border-card text-card"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button buttonStyle="outline" className="!text-card text-lg">
            Kontaktiraj
          </Button>
          <Button className="text-lg">Zakaži termin</Button>
        </div>
      </div>

      <h1 className="text-xl md:text-2xl lg:text-5xl font-black py-10">
        Opis nekretnine
      </h1>
      <p className="py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        quibusdam veritatis, veniam iure necessitatibus magni aspernatur sequi
        expedita perspiciatis, nesciunt corrupti ipsum ut! Sequi amet fugiat,
        totam a, odit aliquid mollitia placeat perferendis quasi itaque modi
        nostrum, tenetur fugit similique ipsum magnam temporibus iure. Fugit
        corrupti quod, alias nesciunt, est ipsum dolor beatae temporibus
        explicabo asperiores veritatis odio aspernatur excepturi?
      </p>
    </div>
  );
};

export default Tabs;
