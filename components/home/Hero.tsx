import { Search } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full pt-12 z-0 relative">
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
          <h1 className="text-7xl font-extrabold text-center">
            Napravi korak <br /> za svoju budućnost.
          </h1>
          <p className="text-center pt-4">
            Preko 80 iznajmljenih stanova i 150 prodaja u rekordnom roku.
          </p>

        <div className="mx-auto relative mt-6">

          <input 
            type="text"
            placeholder="Pretraži nekretnine, agenta ili lokaciju"
            className="w-full max-w-md p-3 rounded-[4rem] border py-8 px-3 bg-white placeholder:text-gray-300 min-w-[650px]"
            />

          <div className="rounded-full w-16 h-16 p-4 absolute right-4 top-1/2 -translate-y-1/2 dark:bg-secondary shadow-lg flex items-center justify-center">
            <Search className="w-full h-ull" />
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
