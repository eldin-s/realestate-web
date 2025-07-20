import CustomButton from "@/components/custom/CustomButton";

const Company = () => {
  return (
    <section
      className="w-full pt-12 relative"
      style={{
        backgroundImage: "url('/img/kompanija.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="py-24 flex flex-col items-center justify-center text-center font-primary gap-4">
        <h1 className="xl:text-7xl md:text-2xl font-extrabold z-10">Kompanija</h1>
        <p className="uppercase z-10 text-lg font-semibold">Potpis</p>
        <p className="z-10">
          Naša divizija za klijente sa visokom neto vrednošću i privatnim
          klijentima <br /> predstavlja najpoželjnije luksuzne nekretnine u
          regionu
        </p>
        <CustomButton className={"z-10"} showArrow={false} buttonStyle="light">Pogledaj sve</CustomButton>
      </div>
      <div
        className="absolute left-0 bottom-0 w-full z-0"
        style={{
          height: "100%",
          background:
            "linear-gradient(to top,rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      />
    </section>
  );
};

export default Company;
