import React from "react";

const Partners = () => {
  return (
    <section className="flex items-center gap-8 bg-white text-card overflow-hidden">
      <p className="font-bold font-primary uppercase text-sm whitespace-nowrap z-20 p-20 bg-white">
        Istaknuti u
      </p>

      {/* LOGOS */}
      <div className="w-full inline-flex flex-nowrap">
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          x-ref="logos"
        >
          {Array(2)
            .fill([
              "/logos/1.png",
              "/logos/2.png",
              "/logos/3.png",
              "/logos/4.png",
              "/logos/5.png",
              "/logos/6.png",
              "/logos/7.png",
            ])
            .flat()
            .map((src, i) => (
              <li key={i}>
                <img
                  src={src}
                  alt={`logo-${i}`}
                  className="w-20 h-auto flex-shrink-0"
                />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Partners;
