'use client'

import { useState, useEffect } from "react";
import { rentListings } from "../home/Featured";
import PropertyCard from "../ui/PropertyCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PAGE_SIZE = 6;

function getPagination(current: number, total: number) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  if (current <= 3) {
    return [1, 2, 3, 4, "...", total];
  }
  if (current >= total - 2) {
    return [1, "...", total - 3, total - 2, total - 1, total];
  }
  return [1, "...", current - 1, current, current + 1, "...", total];
}

const Featured = () => {
  const [page, setPage] = useState(1);
  const [displayed, setDisplayed] = useState<typeof rentListings>([]);
  const [loading, setLoading] = useState(false);

  const totalPages = Math.ceil(rentListings.length / PAGE_SIZE);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const start = (page - 1) * PAGE_SIZE;
      setDisplayed(rentListings.slice(start, start + PAGE_SIZE));
      setLoading(false);
    }, 500); // simulate async
    return () => clearTimeout(timer);
  }, [page]);

  const pagination = getPagination(page, totalPages);

  return (
    <section className="w-full lg:p-24 md:p-18 p-6 pt-14 z-0 relative bg-foreground">
      <h1 className="lg:text-5xl text-2xl font-extrabold mb-6 text-card font-primary">Izdvojeno</h1>
      <p className="mb-8 text-card">Pogledajte neke od naših najekskluzivnijih kuća, stanova, gradskih kuća,
        <br/> penthausa i još mnogo toga.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-10 min-h-[400px]">
        {loading ? (
          <div className="col-span-3 flex justify-center items-center h-40">Učitavanje...</div>
        ) : (
          displayed.map((listing) => (
            <PropertyCard
              key={listing.id}
              id={listing.id}
              img={listing.img}
              monthly_rent={listing.monthly_rent}
              rooms={listing.rooms}
              location={listing.location}
              baths={listing.baths}
              square_meters={listing.square_meters}
              category={listing.category}
              signature={listing.signature}
            />
          ))
        )}
      </div>
      <div className="flex justify-center gap-2">
        <button
          className="px-3 md:px-5 py-0 md:py-2  rounded-full border border-gray-300 cursor-pointer text-card disabled:cursor-not-allowed"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        {pagination.map((item, idx) =>
          item === "..." ? (
            <span key={idx} className="px-2 text-gray-400 select-none">...</span>
          ) : (
            <button
              key={item}
              className={`px-4 py-2 md:px-6 md:py-4 rounded-full border cursor-pointer ${item === page ? "bg-card text-primary border border-primary " : "text-card"}`}
              onClick={() => typeof item === 'number' && setPage(item as number)}
              disabled={item === page}
            >
              {item}
            </button>
          )
        )}
        <button
          className="px-3 md:px-5 py-0 md:py-2 rounded-full border border-gray-300 cursor-pointer flex items-center justify-center text-card disabled:cursor-not-allowed"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default Featured;
