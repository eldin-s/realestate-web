import CustomButton from "@/components/custom/CustomButton";
import PropertyCard from "@/components/ui/PropertyCard";
import { readProperties } from "@/libs/actions/readProperties";
import { Property } from "@/interfaces/property";

const Featured = async () => {
  // Fetch properties from database
  const result = await readProperties();
  let properties: Property[] = [];

  if (result && typeof result === 'object' && 'data' in result && result.data && !result.error) {
    properties = result.data;
  } else if (Array.isArray(result)) {
    // Handle the case where it returns an empty array
    properties = result;
  }

  // If no properties from database, show a fallback message
  if (properties.length === 0) {
    return (
      <section className="w-full lg:p-24 md:p-18 p-6 pt-14 z-0 relative bg-foreground">
        <h1 className="lg:text-5xl text-2xl font-extrabold mb-6 text-card font-primary">
          Izdvojeno
        </h1>
        <p className="mb-8 text-card">
          Trenutno nema dostupnih nekretnina u bazi podataka.
        </p>
      </section>
    );
  }
  return (
    <section className="w-full lg:p-24 md:p-18 p-6 pt-14 z-0 relative bg-foreground">
      <h1 className="lg:text-5xl text-2xl font-extrabold mb-6 text-card font-primary">
        Izdvojeno
      </h1>
      <p className="mb-8 text-card">
        Pogledajte neke od naših najekskluzivnijih kuća, stanova, gradskih kuća,
        <br /> penthausa i još mnogo toga.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-10">
        {properties.slice(0, 6).map((listing: Property) => (
          <PropertyCard
            key={listing.id}
            id={listing.id}
            img={listing.images}
            monthly_rent={listing?.monthly_rent}
            price={listing?.price}
            rooms={listing.rooms}
            location={listing.location}
            baths={listing.baths}
            square_meters={listing.square_meters}
            category={listing.category}
            signature={listing.signature}
          />
        ))}
      </div>
      <CustomButton buttonStyle="primary" showArrow={true}>
        Pogledaj više
      </CustomButton>
    </section>
  );
};

export default Featured;
