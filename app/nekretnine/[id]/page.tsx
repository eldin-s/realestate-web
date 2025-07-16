import { rentListings } from "@/components/home/Featured";
import Features from "@/components/single/Features";
import Overview from "@/components/single/Overview";
import Tabs from "@/components/single/Tabs";
import Button from "@/components/ui/Button";
import { formatPrice } from "@/libs/lib";
import Image from "next/image";
import { PiShareFat } from "react-icons/pi";

const Nekretnine = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const property = rentListings.find((listing) => listing.id === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <>
      <div className="w-full lg:p-24 md:p-18 lg:pt-40 sm:pt-28 md:pt-40 pt-24 p-6 z-0 relative bg-black text-card">
        <div className="w-full flex flex-wrap gap-4 lg:flex-row flex-col">
          <div className="flex-[2] rounded-2xl overflow-hidden">
            <img
              src={property.images[0]}
              alt=""
              className="w-full h-full max-h-[600px] object-cover"
            />
          </div>
          <div className="flex-1 grid lg:grid-cols-2 grid-cols-4 gap-4">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={property.images[1]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={property.images[2]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={property.images[3]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={property.images[4]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="space-y-2 mt-6">
          <h1 className="text-4xl text-white font-black">{property.title}</h1>
          <p className="text-gray-400">
            {property.location}
          </p>
          <p className="text-gray-300 font-bold text-3xl">
            {property.monthly_rent && `${formatPrice(property.monthly_rent)} € / mesečno`}
            {property.price && `${formatPrice(property.price)} €`}
          </p>

          <div className="flex gap-3 text-gray-400 items-center">
            <span>{property.rooms} soba</span>
            <div className="w-1 h-1 rounded-full bg-gray-400 mt-0.5" />
            <span>{property.baths} kupatila</span>
            <div className="w-1 h-1 rounded-full bg-gray-400 mt-0.5" />
            <span>{property.square_meters} m<sup>2</sup></span>
            <Button buttonStyle="outline" size="sm" className="font-bold">Podeli <PiShareFat className="w-4 h-4" /></Button>
          </div>
        </div>
      </div>

      <Tabs description={property.description} />
      <div className="flex gap-8 lg:px-24 md:px-18 px-6 py-8 z-0 flex-wrap relative bg-foreground">
        <div className="flex-1">
            <Overview property={property} />
            <Features property={property} />
        </div>

        <div className="">
            <Image
                src={property.images[0]}
                alt="Property Image"
                width={600}
                height={600}
                className="rounded-2xl overflow-hidden mb-6"
            />
        </div>
      </div>
    </>
  );
};

export default Nekretnine;
