import { Property } from "@/interfaces/property";

interface FeaturesProps {
  property: Property;
}

const Features = ({ property }: FeaturesProps) => {
  return (
    <section id="karakteristike" className="w-full text-card font-primary">
      <h1 className="text-xl md:text-2xl lg:text-5xl font-black py-10">
        Karakteristike i sadržaj nekretnine
      </h1>

      <h2 className="text-xl lg:text-3xl font-extrabold pt-2 pb-8">Interior</h2>

      <div className="grid grid-cols-2 space-y-1.5 w-full">
        <div className="flex gap-2 items-center text-lg font-medium"><div className="w-2 h-2 rounded-full bg-card" />Ukupno kupatila</div>
        <p className="font-bold text-lg">{property.baths}</p>
      </div>

      <div className="grid grid-cols-2 space-y-1.5 w-full">
        <div className="flex gap-2 items-center text-lg font-medium"><div className="w-2 h-2 rounded-full bg-card" />Ukupno soba</div>
        <p className="font-bold text-lg">{property.rooms}</p>
      </div>

      <div className="grid grid-cols-2 space-y-1.5 w-full">
        <div className="flex gap-2 items-center text-lg font-medium"><div className="w-2 h-2 rounded-full bg-card" />Spratova</div>
        <p className="font-bold text-lg">{property.interior.stories}</p>
      </div>

      <div className="grid grid-cols-2 space-y-1.5 w-full">
        <div className="flex gap-2 items-center text-lg font-medium"><div className="w-2 h-2 rounded-full bg-card" />Sadržaj</div>
        <p className="font-bold text-lg space-x-1">
        {property.interior.appliances.map((value, index) => (
            <span key={index}>
            {value}
            {index < property.interior.appliances.length - 1 && ","}
            </span>
        ))}
        </p>
      </div>

      <div className="grid grid-cols-2 space-y-1.5 w-full">
        <div className="flex gap-2 items-center text-lg font-medium"><div className="w-2 h-2 rounded-full bg-card" />Ostale karakteristike</div>
        <p className="font-bold text-lg space-x-1">{property.interior.other_features.map((value, index) => (
            <span key={index}>{value}{index < property.interior.other_features.length - 1 && ","}</span>
        ))}</p>
      </div>

      <h2 className="text-xl lg:text-3xl font-extrabold pt-2 pb-8">Exteriror</h2>

      <div className="grid grid-cols-2 space-y-1.5 w-full">
        <div className="flex gap-2 items-center text-lg font-medium"><div className="w-2 h-2 rounded-full bg-card" />Mesto garaže</div>
        <p className="font-bold text-lg">{property.exterior.garage_spaces}</p>
      </div>

      <div className="grid grid-cols-2 space-y-1.5 w-full">
        <div className="flex gap-2 items-center text-lg font-medium"><div className="w-2 h-2 rounded-full bg-card" />Izvor vode</div>
        <p className="font-bold text-lg">{property.exterior.water_source}</p>
      </div>

      <div className="grid grid-cols-2 space-y-1.5 w-full">
        <div className="flex gap-2 items-center text-lg font-medium"><div className="w-2 h-2 rounded-full bg-card" />Komunalne usluge</div>
        <p className="font-bold text-lg">{property.exterior.utilities}</p>
      </div>

      <div className="grid grid-cols-2 space-y-1.5 w-full">
        <div className="flex gap-2 items-center text-lg font-medium"><div className="w-2 h-2 rounded-full bg-card" />Grejanje</div>
        <p className="font-bold text-lg">{property.exterior.heat_type}</p>
      </div>

      <div className="grid grid-cols-2 space-y-1.5 w-full">
        <div className="flex gap-2 items-center text-lg font-medium"><div className="w-2 h-2 rounded-full bg-card" />Klima</div>
        <p className="font-bold text-lg">{property.exterior.air_conditioning}</p>
      </div>
    </section>
  );
};

export default Features;
