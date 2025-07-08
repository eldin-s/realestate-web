import React from "react";
import Button from "../ui/Button";

const Footer = () => {
  return (
    <footer className="grid xl:grid-cols-5 lg:grid-cols-4 grid-cols-2 lg:p-20 md:p-8 p-4 bg-white">
      <div className="flex lg:flex-col items-start justify-start gap-8 w-full col-span-2 lg:col-span-1">
        <Button showArrow={true}>Pridruži se</Button>
        <Button
          showArrow={true}
          buttonStyle="light"
          className="border border-gray-400"
        >
          Agent Login
        </Button>
      </div>

      <div className="mt-4 lg:mt-0">
        <ul className="flex flex-col items-start justify-start lg:gap-4 gap-1 font-primary text-card font-extrabold">
          <li>
            <p className="lg:text-2xl text-lg transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Kupi
            </p>
          </li>
          <li>
            <p className="lg:text-2xl text-lg transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Prodaj
            </p>
          </li>
          <li>
            <p className="lg:text-2xl text-lg transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Izajmi
            </p>
          </li>
          <li>
            <p className="lg:text-2xl text-lg transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Izdaj
            </p>
          </li>
          <li>
            <p className="lg:text-2xl text-lg transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Nove izgradnje
            </p>
          </li>
          <li>
            <p className="lg:text-2xl text-lg transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Agenti
            </p>
          </li>
          <li>
            <p className="lg:text-2xl text-lg transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Kontakt
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-4 lg:mt-0">
        <p className="text-ring text-sm uppercase font-bold">
          Marketing & Dostignuće
        </p>

        <ul className="text-card text-sm uppercase font-primary font-bold flex flex-col items-start justify-start mt-4">
          <li>
            <p className="transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Studio
            </p>
          </li>
          <li>
            <p className="transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Biznis prostor
            </p>
          </li>
          <li>
            <p className="transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Kuće
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-4 lg:mt-0">
        <p className="text-ring text-sm uppercase font-bold">Kompanija</p>

        <ul className="text-card text-sm uppercase font-primary font-bold flex flex-col items-start justify-start mt-4">
          <li>
            <p className="transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              O nama
            </p>
          </li>
          <li>
            <p className="transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Kancelarije
            </p>
          </li>
          <li>
            <p className="transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Karijera
            </p>
          </li>
          <li>
            <p className="transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Štampa
            </p>
          </li>
          <li>
            <p className="transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Katalog
            </p>
          </li>
          <li>
            <p className="transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Godišnji izveštaj
            </p>
          </li>
          <li>
            <p className="transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Poduhvati
            </p>
          </li>
          <li>
            <p className="transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Mansion
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-4 lg:mt-0">
        <p className="text-ring text-sm uppercase font-bold">Uvidi</p>

        <ul className="text-card text-sm uppercase font-primary font-bold flex flex-col items-start justify-start mt-4">
          <li>
            <p className="transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Tržišno znanje
            </p>
          </li>
          <li>
            <p className="transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Blog
            </p>
          </li>
          <li>
            <p className="transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Vodiči
            </p>
          </li>
          <li>
            <p className="transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Edukacija
            </p>
          </li>
          <li>
            <p className="transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Pro trening
            </p>
          </li>
          <li>
            <p className="transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
              Knjige
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
