import { formatPrice } from "@/libs/lib";
import React from "react";

interface PropertyCardProps {
  img: string;
  monthly_rent: number;
  rooms: number;
  location: string;
  baths: number;
  square_meters: number;
  category: string;
}

const PropertyCard = ({
  img,
  monthly_rent,
  rooms,
  location,
  baths,
  square_meters,
  category
}: PropertyCardProps) => {
  return (
    <>
      <div className="overflow-hidden group font-primary cursor-pointer relative">
        <div className="overflow-hidden rounded-lg max-h-[300px]">
          <img
            src={img}
            alt={`Slika za lokaciju ${location}`}
            className="group-hover:scale-105 transition-transform duration-300 ease-in-out w-full object-cover"
          />
        </div>
        <div className="pt-4 text-card">
          <h2 className="font-bold mb-2 text-lg">
            {formatPrice(monthly_rent)} € / mesečno
          </h2>
          <p className=" mb-2">{location}</p>
          <div className="font-bold w-full flex items-center gap-4">
            <span>
              {rooms} sob{rooms > 1 ? "e" : "a"}
            </span>
            <span>
              {baths} kupatil{baths > 1 ? "a" : "o"}
            </span>
            <span>{square_meters} m²</span>
          </div>
        </div>

        <div className="absolute top-3 left-3">
            <span className="bg-foreground/80 text-card px-3 py-1 rounded-md text-xs font-bold uppercase">
                {category}
            </span>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
