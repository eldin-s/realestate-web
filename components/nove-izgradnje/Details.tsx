import { MedalIcon } from "@/components/Icons";

const Details = () => {
  return (
    <div className="w-full lg:p-12 p-6 relative bg-foreground">
      <div
        style={{
          backgroundImage: "url('/img/office.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-[640px] rounded-md"
      />

      <div className="flex items-center justify-center flex-col mt-24 gap-6">
        <div>
          <MedalIcon className="w-8 h-8 text-secondary" />
        </div>

        <p className="text-center text-black">
          Najpouzdanija Real Estate Agencije u državi
        </p>

        <h4 className="w-full xl:max-w-1/2 text-card text-center text:lg xl:text-3xl font-primary font-bold">
          Sa drastičnim porastom broja kupaca koji se angažuju putem društvenih
          medija, najefikasnija prodaja vašeg doma zahteva saradnju sa brendom
          koji je bio pionir u žanru sadržaja o nekretninama.
        </h4>

        <h2 className="w-full text-card text-center text-xl xl:text-4xl font-primary font-black uppercase">
          Zašto svi prodaju sa nama
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-20 xl:max-w-[60%] mx-auto">
        <div className="text-card border border-ring/30 px-10 py-12 rounded-md text-center">
          <h3 className="font-primary font-extrabold text-xl xl:text-5xl text-card">Sveobuhvatna prodavnica za programere</h3>
        </div>
        <div className="text-card border border-ring/30 px-10 py-12 rounded-md text-center">
          <h3 className="font-primary font-extrabold text-xl xl:text-5xl text-card">Uspeh sa dokazanim timom</h3>
        </div>
      </div>
    </div>
  );
};

export default Details;
