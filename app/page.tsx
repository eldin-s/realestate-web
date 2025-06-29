import BecomeAgent from "@/components/home/BecomeAgent";
import Contact from "@/components/home/Contact";
import Featured from "@/components/home/Featured";
import Hero from "@/components/home/Hero";
import Network from "@/components/home/Network";
import NewBuilding from "@/components/home/NewBuilding";
import NewProperties from "@/components/home/NewProperties";
import Partners from "@/components/home/Partners";
import Regions from "@/components/home/Regions";
import Studios from "@/components/home/Studios";
import VerticalProperties from "@/components/home/VerticalProperties";
import VideoSection from "@/components/home/VideoSection";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-quicksand)]">
      <Hero />
      <Regions />
      <Featured />
      <NewBuilding />
      <VideoSection />
      <VerticalProperties />
      <NewProperties />
      <BecomeAgent />
      <Studios />
      <Network />
      <Partners />
      <Contact />
    </div>
  );
}
