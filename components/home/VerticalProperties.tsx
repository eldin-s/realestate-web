
import { rentListings } from './Featured'
import VerticalCard from '../ui/VerticalCard'

const VerticalProperties = () => {
  return (
    <section className="w-full p-6 md:p-12 lg:p-20 z-0 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {rentListings.slice(4, 10).map((listing) => (
          <VerticalCard
            key={listing.id}
            id={listing.id}
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
    </section>
  )
}

export default VerticalProperties