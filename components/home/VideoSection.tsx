'use client'

import { useEffect, useRef } from "react";
import CustomButton from "@/components/custom/CustomButton";

const VideoSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Try to play programmatically
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <video
      ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        id="myVideo"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videoplayback.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="relative flex flex-col items-center justify-center w-full h-full text-white text-center z-20 px-8 font-primary">
        <h1 className="xl:text-7xl md:text-3xl text-xl z-10 uppercase font-extrabold mb-2">
          Force Mansion
        </h1>
        <p className="uppercase font-semibold md:text-2xl text-base mb-4">
          Potpis
        </p>
        <p className="max-w-2xl md:text-lg text-sm leading-relaxed">
          Naša divizija za klijente sa visokom neto vrednošću i privatnim
          klijentima predstavlja najpoželjnije luksuzne nekretnine na svetu
          vredne preko 10 miliona dolara.
        </p>
        <CustomButton className="mt-6">Pogledaj Sve</CustomButton>
      </div>
    </div>
  );
};

export default VideoSection;
