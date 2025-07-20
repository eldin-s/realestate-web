"use client";

import { useState } from "react";
import Link from "next/link";
import CustomButton from "@/components/custom/CustomButton";

const Tabs = ({description}: {description: string}) => {
  const [activeTab, setActiveTab] = useState<"#pregled" | "#karakteristike">(
    "#pregled"
  );

  const tabs = [
    { id: "#pregled", label: "Pregled" },
    { id: "#karakteristike", label: "Karakteristike i sadržaj" },
  ];

  return (
    <div className="w-full lg:px-24 md:px-18 px-6 z-0 relative bg-foreground text-card pt-8">
      <div className="flex border-b pb-8 lg:pb-0 border-gray-200 justify-between">
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
          <CustomButton buttonStyle="outline" className="!text-card text-lg">
            Kontaktiraj
          </CustomButton>
          <CustomButton className="text-lg">Zakaži termin</CustomButton>
        </div>
      </div>

      <h1 className="text-xl md:text-2xl lg:text-5xl font-black py-10">
        Opis nekretnine
      </h1>
      <p className="py-4">
        {description}
      </p>
    </div>
  );
};

export default Tabs;
