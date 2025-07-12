import { rentListings } from '@/components/home/Featured'

const Nekretnine = ({ params }: { params: { id: string } }) => {
  const propertyId = parseInt(params.id)
  const property = rentListings.find(listing => listing.id === propertyId)

  if (!property) {
    return <div>Property not found</div>
  }

  return (
    <div>
      <h1>{property.title}</h1>
    </div>
  )
}

export default Nekretnine