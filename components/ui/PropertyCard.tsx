"use client"

import { formatPrice } from "@/libs/lib";
import { useRouter } from "next/navigation";

interface PropertyCardProps {
  id: number;
  img: string;
  monthly_rent: number;
  rooms: number;
  location: string;
  baths: number;
  square_meters: number;
  category: string;
  signature?: boolean;
}

const PropertyCard = ({
  id,
  img,
  monthly_rent,
  rooms,
  location,
  baths,
  square_meters,
  category,
  signature,
}: PropertyCardProps) => {
  const router = useRouter();

  const handleClick = (listingId: number) => {
    router.push(`/nekretnine/${listingId}`);
  }

  return (
    <div onClick={() => handleClick(id)} className="w-full" role="button">
      <div className="overflow-hidden group font-primary cursor-pointer relative">
        <div className="overflow-hidden rounded-lg max-h-[300px] relative">
          <img
            src={img}
            alt={`Slika za lokaciju ${location}`}
            className="group-hover:scale-105 transition-transform duration-300 ease-in-out w-full object-cover"
          />
          {signature && (
            <div className="absolute bottom-0 translate-y-1/2 left-0 bg-black rounded-r-full h-14">
              <span className="text-white px-3 py-1 pr-8 text-base font-bold uppercase">
                Force Mansion
              </span>
            </div>
          )}
        </div>
        <div className="pt-4 text-card">
          <h2 className="font-bold lg:mb-2 mb-1 lg:text-lg text-sm">
            {formatPrice(monthly_rent)} € / mesečno
          </h2>
          <p className="lg:mb-2 mb-1">{location}</p>
          <div className="font-bold w-full flex items-center gap-4 text-sm lg:text-base">
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
          <span className="bg-foreground/80 text-card px-3 py-1 rounded-md text-xs lg:text-sm font-bold uppercase">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
