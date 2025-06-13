import Company from "@/components/home/Company";
import Featured from "@/components/home/Featured";
import Hero from "@/components/home/Hero";
import NewProperties from "@/components/home/NewProperties";
import Regions from "@/components/home/Regions";
import VerticalProperties from "@/components/home/VerticalProperties";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-quicksand)]">
      <Hero />
      <Regions />
      <Featured />
      <Company />
      <VerticalProperties />
      <NewProperties />
    </div>
  );
}
