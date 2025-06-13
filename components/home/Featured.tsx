import Button from "../ui/Button";
import PropertyCard from "../ui/PropertyCard";

export const rentListings = [
  {
    id: 1,
    created_at: "2025-06-01T10:15:00Z",
    title: "Spacious 2BHK Apartment",
    category: "Na prodaju",
    monthly_rent: 1200,
    rooms: 2,
    baths: 2,
    square_meters: 78,
    location: "New York, NY, 123 Main St",
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
    location: "Chicago, IL, 456 Oak Ave",
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
    location: "Austin, TX, 789 Maple Dr",
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
    location: "San Francisco, CA, 321 Pine St",
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
    location: "Denver, CO, 654 Cedar Rd",
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
    location: "Los Angeles, CA, 987 Palm Blvd",
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
    location: "Boston, MA, 222 Willow Ln",
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
    location: "Seattle, WA, 333 Birch Ct",
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
    location: "Philadelphia, PA, 444 Spruce St",
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
    location: "Portland, OR, 555 Elm St",
    furnished: false,
    available_from: "2025-07-05",
    contact_email: "owner10@example.com",
    img: "https://images.unsplash.com/photo-1612132084523-f7c00377dc0b?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Featured = () => {
  return (
    <section className="w-full p-20 z-0 relative bg-foreground">
      <h1 className="text-7xl font-extrabold mb-10 text-card font-primary">Izdvojeno</h1>
      <p className="mb-8 text-card">Pogledajte neke od naših najekskluzivnijih kuća, stanova, gradskih kuća,
        <br/> penthausa i još mnogo toga.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-10">
        {rentListings.slice(0, 6).map((listing) => (
          <PropertyCard
            key={listing.id}
            img={listing.img}
            monthly_rent={listing.monthly_rent}
            rooms={listing.rooms}
            location={listing.location}
            baths={listing.baths}
            square_meters={listing.square_meters}
            category={listing.category}
          />
        ))}
      </div>
      <Button buttonStyle="primary">Pogledaj više</Button>
    </section>
  );
};

export default Featured;
