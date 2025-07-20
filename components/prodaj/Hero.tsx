import CustomButton from "@/components/custom/CustomButton";

const Hero = () => {
  return (
    <section className="w-full z-0 relative">
      <p className="text-center py-2 font-semibold underline">
        Pronađi svoj doma iz snova
      </p>
      <div
        className="relative w-full max-h-[720px] overflow-hidden rounded-t-[3rem] flex items-center justify-center"
        style={{
          backgroundImage: "url('/img/header1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "720px",
        }}
      >
        <div className="z-10 font-[family-name:var(--font-montserrat)] flex flex-col">
          <h1 className="lg:text-7xl text-4xl font-extrabold text-center">
            Poćni prodaju sa najboljima
          </h1>
          <p className="text-center pt-4">
            Dobijte besplatnu procenu vrednosti kuće od jednog od naših stručnjaka za nekretnine.
          </p>

          <div className="mx-auto relative mt-6">
            <input
              type="text"
              placeholder="Unesi svoju kucnu adresu"
              className="min-w-96 md:min-w-[500px] lg:min-w-[750px] p-3 rounded-[4rem] border lg:py-6 py-4 px-2 bg-white placeholder:text-gray-300 pr-20 placeholder:max-w-[90%]"
            />

            <div className="absolute md:right-4 right-2 top-1/2 -translate-y-1/2 flex md:gap-4 gap-2 items-center">
              <CustomButton>Nastavi</CustomButton>
            </div>
          </div>
        </div>
        <div
          className="absolute left-0 bottom-0 w-full z-0"
          style={{
            height: "100%",
            background:
              "linear-gradient(to top,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 05%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
