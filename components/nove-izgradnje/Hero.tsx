import { ChevronDown } from "lucide-react";
import CustomButton from "@/components/custom/CustomButton";

const Hero = () => {
  return (
    <section className="w-full z-0 relative">
      <p className="text-center py-2 font-semibold underline">
        Pronađi svoj doma iz snova
      </p>
      <div
        className="relative w-full max-h-[820px] overflow-hidden rounded-t-[3rem] flex items-end justify-start"
        style={{
          backgroundImage: "url('/img/header1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "820px",
        }}
      >
        <div className="z-10 font-[family-name:var(--font-montserrat)] flex flex-col xl:p-20 p-10">
          <h1 className="lg:text-6xl text-4xl font-extrabold text-center uppercase">
            Force Mansion
          </h1>
          <h1 className="lg:text-6xl text-4xl font-extrabold">
            Nove izgradnje
          </h1>
          <CustomButton className="w-fit mt-4">Istraži naše nekretnine <ChevronDown className="w-4 h-4" /></CustomButton>

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
