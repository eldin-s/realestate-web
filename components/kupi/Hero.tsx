import { ChevronDown } from "lucide-react";
import Button from "../ui/Button";


const Hero = () => {
  return (
    <section className="w-full z-0 relative">
      <p className="text-center py-2 font-semibold underline">
        Pronađi svoj doma iz snova
      </p>
      <div
        className="relative w-full max-h-[720px] overflow-hidden rounded-t-[3rem] flex items-center justify-center"
        style={{
          backgroundImage: "url('/img/iznajmi-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
      >
        <div className="z-10 font-[family-name:var(--font-montserrat)] flex flex-col items-center gap-4">
          <h1 className="lg:text-7xl text-4xl font-extrabold text-center">
            Vaš dom vas čeka
          </h1>

          <Button className="w-fit">Istraži naše nekretnine <ChevronDown className="w-4 h-4" /></Button>
        </div>
        <div
          className="absolute left-0 bottom-0 w-full z-0"
          style={{
            height: "100%",
            background:
              "linear-gradient(to top,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 1%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
