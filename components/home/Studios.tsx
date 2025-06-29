"use client"

import Button from "../ui/Button";
import { useState } from "react";

const cards = [
  {
    id: "1",
    title: "Studio 1",
    subtitle: "Studio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnText: "Pogledaj Studio",
  },
  {
    id: "2",
    title: "Lokal 1",
    subtitle: "Lokal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnText: "Pogledaj Lokal",
  },
  {
    id: "3",
    title: "Prostorija 1",
    subtitle: "Prostorija",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnText: "Pogledaj Prostoriju",
  },
];

const Studios = () => {
  const [hoveredCard, setHoveredCard] = useState<string>("1"); // Default to first card

  const handleCardHover = (cardId: string) => {
    setHoveredCard(cardId);
  };

  return (
    <div className="relative w-full h-[600px] xl:overflow-hidden overflow-x-auto">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videoplayback.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="relative flex flex-col items-center justify-end w-full h-full text-white text-center z-20 px-20 font-primary pb-6">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 items-end">
          {cards.map((card, index) => {
            const isExpanded = hoveredCard === card.id;
            return (
              <div
                key={index}
                className={`backdrop-blur-xs rounded-lg shadow-lg border border-b-gray-500 cursor-pointer transition-all duration-500 ease-in-out transform ${
                  isExpanded
                    ? "p-6 h-64 bg-white text-black"
                    : "p-4 h-24 hover:scale-105"
                }`}
                onMouseEnter={() => handleCardHover(card.id)}
              >
                <h3 className={`text-xl  text-left transition-all duration-500 ${
                  isExpanded ? "xl:mb-4 text-black/95" : "mb-1 text-gray-300"
                }`}>
                  {card.subtitle}
                </h3>
                <h2 className={`text-2xl font-bold text-left transition-all duration-500 ${
                  isExpanded ? "xl:mb-2 text-black/95" : "mb-0 text-gray-300"
                }`}>
                  {card.title}
                </h2>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  isExpanded ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
                }`}>
                  <p className="text-left mb-4">{card.description}</p>
                  <Button className="xl:mt-4" showArrow={true}>{card.btnText}</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Studios;
