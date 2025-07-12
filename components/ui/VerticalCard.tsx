"use client"

import { formatPrice } from "@/libs/lib";
import { useRouter } from "next/navigation";

interface VerticalCardProps {
  id: number;
  img: string;
  monthly_rent: number;
  rooms: number;
  location: string;
  baths: number;
  square_meters: number;
  category: string;
}

const VerticalCard = ({
  id,
  img,
  monthly_rent,
  rooms,
  location,
  baths,
  square_meters,
  category,
}: VerticalCardProps) => {
  const router = useRouter();

  const handleClick = (listingId: number) => {
    router.push(`/nekretnine/${listingId}`);
  }

  return (
    <div
      onClick={() => handleClick(id)}
      className="w-full h-full rounded-lg shadow-md overflow-hidden group cursor-pointer font-primary relative min-h-[650px] flex flex-col justify-end group transition-all"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div
        className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1)",
        }}
      />
      <div className="p-4 mt-full z-20 relative">
        <h2 className="mb-1 text-base">
          {formatPrice(monthly_rent)} € / mesečno
        </h2>
        <p className="text-xs">{location}</p>
        <div className="text-xs w-full flex items-center gap-4">
          <span>
            {rooms} sob{rooms > 1 ? "e" : "a"}
          </span>
          <span>
            {baths} kupatil{baths > 1 ? "a" : "o"}
          </span>
          <span>{square_meters} m²</span>
        </div>
      </div>
      <div className="absolute top-0 -left-2 z-20">
        <span className="bg-foreground/80 text-card px-6 py-2 rounded-md text-xs font-bold uppercase rounded-br-full">
          {category}
        </span>
      </div>
      <div className="absolute left-0 bottom-0 w-full h-full z-0">
        {/* Default gradient */}
        <div className="absolute inset-0 transition-opacity duration-300 opacity-100 bg-[linear-gradient(to_top,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.6)_25%,transparent_100%)]" />

        {/* Hover gradient */}
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-[linear-gradient(to_top,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.6)_25%,rgba(0,0,0,0.6)_100%)]" />
      </div>
    </div>
  );
};

export default VerticalCard;
