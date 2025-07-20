"use client";

import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import CustomButton from "../custom/CustomButton";

const newRentListings = [
  {
    id: 1,
    created_at: "2025-06-01T10:15:00Z",
    title: "Spacious 2BHK Apartment",
    category: "Na prodaju",
    monthly_rent: 1200,
    rooms: 2,
    baths: 2,
    square_meters: 78,
    location: "New York, NY",
    furnished: true,
    available_from: "2025-07-01",
    contact_email: "owner1@example.com",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    created_at: "2025-06-02T09:30:00Z",
    title: "Cozy Studio in Downtown",
    category: "Na prodaju",
    monthly_rent: 850,
    rooms: 1,
    baths: 1,
    square_meters: 35,
    location: "Chicago, IL",
    furnished: false,
    available_from: "2025-06-15",
    contact_email: "owner2@example.com",
    img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    created_at: "2025-06-03T08:20:00Z",
    title: "Modern 3BHK House with Garden",
    category: "Iznajmi",
    monthly_rent: 2000,
    rooms: 3,
    baths: 3,
    square_meters: 120,
    location: "Austin, TX",
    furnished: true,
    available_from: "2025-08-01",
    contact_email: "owner3@example.com",
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    created_at: "2025-06-04T12:45:00Z",
    title: "1BHK Condo Near Metro",
    category: "Pod ugovorom",
    monthly_rent: 1000,
    rooms: 1,
    baths: 1,
    square_meters: 48,
    location: "San Francisco, CA",
    furnished: false,
    available_from: "2025-07-10",
    contact_email: "owner4@example.com",
    img: "https://images.unsplash.com/photo-1730322031194-3b8003ec6a59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    created_at: "2025-06-05T14:05:00Z",
    title: "Furnished Basement Studio",
    category: "Unajmi",
    monthly_rent: 750,
    rooms: 1,
    baths: 1,
    square_meters: 28,
    location: "Denver, CO",
    furnished: true,
    available_from: "2025-06-20",
    contact_email: "owner5@example.com",
    img: "https://images.unsplash.com/photo-1592222376988-92af20d4d06c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    created_at: "2025-06-06T11:30:00Z",
    title: "Luxury 4BHK Villa",
    category: "Na prodaju",
    monthly_rent: 3500,
    rooms: 4,
    baths: 3,
    square_meters: 210,
    location: "Los Angeles, CA",
    furnished: true,
    available_from: "2025-09-01",
    contact_email: "owner6@example.com",
    img: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    created_at: "2025-06-07T13:20:00Z",
    title: "Affordable Shared Room",
    category: "Pod ugovorom",
    monthly_rent: 500,
    rooms: 1,
    baths: 1,
    square_meters: 18,
    location: "Boston, MA,",
    furnished: false,
    available_from: "2025-06-25",
    contact_email: "owner7@example.com",
    img: "https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    created_at: "2025-06-08T15:00:00Z",
    title: "Townhouse with Garage",
    category: "Na prodaju",
    monthly_rent: 1800,
    rooms: 3,
    baths: 2,
    square_meters: 95,
    location: "Seattle, WA",
    furnished: false,
    available_from: "2025-07-15",
    contact_email: "owner8@example.com",
    img: "https://images.unsplash.com/photo-1616046619793-7e4badf3fe1f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    created_at: "2025-06-09T10:00:00Z",
    title: "Compact 1BHK for Students",
    category: "Na prodaju",
    monthly_rent: 950,
    rooms: 1,
    baths: 1,
    square_meters: 32,
    location: "Philadelphia, PA",
    furnished: true,
    available_from: "2025-06-18",
    contact_email: "owner9@example.com",
    img: "https://images.unsplash.com/photo-1616486232086-81d47190669a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    created_at: "2025-06-10T09:00:00Z",
    title: "2BHK in Quiet Suburb",
    category: "Izanajmi",
    monthly_rent: 1300,
    rooms: 2,
    baths: 2,
    square_meters: 68,
    location: "Portland, OR",
    furnished: false,
    available_from: "2025-07-05",
    contact_email: "owner10@example.com",
    img: "https://images.unsplash.com/photo-1612132084523-f7c00377dc0b?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const RentCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = 300; // pixels
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        ref={containerRef}
        className="flex overflow-x-auto space-x-4 py-4 px-2 scrollbar-hide lg:min-h-[600px]"
      >
        {newRentListings.map((listing) => (
          <div
            key={listing.id}
            className="flex-shrink-0 group relative h-[300px] lg:h-[480px] w-58 hover:w-[530px] hover:h-[530px] transition-all duration-300 ease-in-out bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={listing.img}
              alt={listing.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Bottom info (always visible) */}
            <div className="absolute bottom-0 w-full text-white p-4 text-sm z-10">
              <p className="font-semibold truncate group-hover:text-xl transition-all">
                {listing.title}
              </p>
              <p className="truncate">{listing.location}</p>

              <div className="text-white opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-screen transition-all duration-300 flex flex-col z-20">
                <p>
                  <strong>Soba:</strong> {listing.rooms}
                </p>
                <p>
                  <strong>Kupatila:</strong> {listing.baths}
                </p>
                <p>
                  <strong>Kvadratura:</strong> {listing.square_meters} m²
                </p>
                <p>
                  <strong>Dostupno od:</strong>{" "}
                  {listing.available_from}
                </p>
              </div>
            </div>
            <div className="absolute left-0 bottom-0 w-full h-full z-0">
              {/* Default gradient */}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-100 bg-[linear-gradient(to_top,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.6)_25%,transparent_100%)]" />

              {/* Hover gradient */}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-[linear-gradient(to_top,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.6)_25%,rgba(0,0,0,0.6)_100%)]" />
            </div>
          </div>
        ))}
      </div>
      {/* Arrows */}
      <div className="text-card px-20 flex gap-4 items-center justify-between">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => scroll("left")}
            className="bg-white/80 w-14 h-14 flex items-center justify-center border border-gray-300 hover:bg-white rounded-full p-2 shadow-md cursor-pointer"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className=" bg-white/80 w-14 h-14 flex items-center justify-center border border-gray-300 hover:bg-white rounded-full p-2 shadow-md cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
        <CustomButton buttonStyle="primary" showArrow={true}>
          Pogledaj sve
        </CustomButton>
      </div>
    </>
  );
};
