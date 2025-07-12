import { Property } from "@/interfaces/property";
import React from "react";

interface OverviewProps {
  property: Property;
}

const Overview = ({ property }: OverviewProps) => {
  return (
    <section
      id="pregled"
      className="w-full z-0 relative text-card font-primary"
    >
        <div className="grid grid-cols-2 border-t border-t-gray-200 w-full">
            <p className="py-6 font-bold text-lg">Tip nekretnine</p>
            <p className="py-6 text-lg">{property.property_type}</p>
        </div>

        <div className="grid grid-cols-2 border-t border-t-gray-200 w-full">
            <p className="py-6 font-bold text-lg">Lokacija</p>
            <p className="py-6 text-lg">{property.location}</p>
        </div>

        <div className="grid grid-cols-2 border-t border-t-gray-200 w-full">
            <p className="py-6 font-bold text-lg">ID nekretnine</p>
            <p className="py-6 text-lg">{property.id}</p>
        </div>

        <div className="grid grid-cols-2 border-t border-t-gray-200 w-full">
            <p className="py-6 font-bold text-lg">Oglas ažuriran</p>
            <p className="py-6 text-lg">{property.listing_last_updated}</p>
        </div>
    </section>
  );
};

export default Overview;
