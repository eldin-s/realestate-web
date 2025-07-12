"use client";

import {
  ChevronDown,
  LockKeyhole,
  Menu,
  Phone,
  Search,
  SearchIcon,
  User,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import Link from "next/link";

const navItems = [
  {
    label: "Kupi",
    url: "/kupi",
  },
  {
    label: "Iznajmi",
    url: "/iznajmi",
  },
  {
    label: "Prodaj",
    url: "/prodaj",
  },
  {
    label: "Nove izgradnje",
    url: "/nove-izgradnje",
  },
  {
    label: "Agenti",
    links: [
      {
        label: "Pronađi agenta",
        url: "/timovi/",
      },
      {
        label: "Pridruži se",
        url: "/agenti/pridruzise",
      },
    ],
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  if (menuModalOpen) {
    // Disable scroll
    document.body.style.overflow = "hidden";
  } else {
    // Re-enable scroll
    document.body.style.overflow = "";
  }

  // Clean up on unmount
  return () => {
    document.body.style.overflow = "";
  };
}, [menuModalOpen]);

  return (
    <div
      className={`md:p-4 md:pt-8 pt-4 mx-2 rounded-full fixed right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "top-4 bg-card/90 shadow-lg md:py-8 py-4"
          : "top-16 bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between gap-2 font-[family-name:var(--font-quicksand)]">
        <div className="pl-8">
          <Link href="/">

            <Image
              src="/real-estate.png"
              className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] object-contain h-auto"
              alt="Logo"
              width={150}
              height={40}
            />
          </Link>
        </div>
        {/* Desktop nav */}
        <div className="flex items-center justify-between gap-4">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative hidden group font-semibold text-base xl:flex items-center"
            >
              <Link
                href={item.url || "#"}
                className="pt-2 pb-1 mx-2 text-gray-800 dark:text-white rounded-lg transition-colors relative after:bg-white after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer group"
              >
                {item.label}{" "}
                {item.links && (
                  <ChevronDown className="inline ml-1 h-4 w-4 transform rotate-0 group-hover:-rotate-180 transition-transform" />
                )}
              </Link>
              {item.links && (
                <div className="absolute left-0 top-8 hidden min-w-full group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                  {item.links.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.url}
                      className="block px-4 py-2 text-gray-800 dark:text-gray-200 rounded-lg transition-colors text-nowrap"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href={"#"}
            className="hidden xl:inline-block pt-2 pb-1 mx-2 text-gray-800 dark:text-white rounded-lg transition-colors relative after:bg-white after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer font-semibold"
          >
            1.887 Mansion
          </Link>
          <div className="hidden border border-gray-400 rounded-full px-4 py-2 xl:mr-4 sm:flex items-center justify-center gap-3">
            <span>
              <Search className="w-4 h-4" />
            </span>
            <span className="font-bold">Sve Force Mansion</span>
          </div>

          <div className="hidden border bg-white rounded-full px-4 py-2 xl:mr-4 lg:flex items-center justify-center gap-3">
            <span className="font-bold text-blue-700">Sve ostalo</span>
          </div>
          <div className="hidden border border-gray-400 rounded-full p-3 xl:mr-4 md:flex items-center justify-center gap-3">
            <User className="w-4 h-4" />
          </div>

          <div
            className="border border-gray-400 rounded-full px-4 py-2 mr-4 flex items-center justify-center gap-3 cursor-pointer"
            onClick={() => setMenuModalOpen(true)}
          >
            <span className="font-bold">Menu</span>
            <span>
              <Menu />
            </span>
          </div>
        </div>

        {/* Modal Menu */}
        {menuModalOpen && (
          <div className="fixed inset-0 z-[100] bg-background/90 h-dvh w-dvw backdrop-blur-sm flex items-start justify-center overflow-x-hidden">
            <div className="w-full bg-white rounded-xl shadow-2xl animate-fade-in xl:p-8 sm:p-4 p-2 m-4 relative text-card">
              {/* Modal content here */}
              <div className="flex items-center justify-between mb-6">
                <Image
                  src="/real-estate.png"
                  className="w-full max-w-[150px] xl:max-w-[300px] object-contain h-auto"
                  alt="Logo"
                  width={400}
                  height={50}
                />
                <div className="flex items-center justify-center gap-2">
                  <Button
                    size="rounded-sm"
                    buttonStyle="light"
                    className="border border-gray-400 hidden sm:flex"
                  >
                    1-877-FORCE <Phone className="w-4 h-4" />
                  </Button>
                  <Button size="rounded-sm">
                    <span className="hidden sm:inline-block">Pronađi dom</span>
                    <SearchIcon className="w-4 h-4" />
                  </Button>
                  <Button
                    size="rounded-sm"
                    buttonStyle="light"
                    className="border border-gray-400"
                    onClick={() => setMenuModalOpen(false)}
                  >
                    <XIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 overflow-hidden">
                <div className="py-10 xl:block hidden">
                  <Image
                    src={"/img/F.png"}
                    width={400}
                    height={400}
                    alt="Become an Agent"
                    className="-mb-20"
                  />
                </div>

                <div className="flex lg:flex-row flex-col items-start justify-start gap-12">
                  <div className="flex flex-col items-start justify-start lg:gap-4 gap-0 lg:border-r border-gray-200 pr-8">
                    {navItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.url || "#"}
                        className="pt-2 pb-1 mx-2 rounded-lg transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer xl:text-4xl text-2xl font-primary font-extrabold"
                      >
                        {item.label}{" "}
                      </Link>
                    ))}
                    <Link
                      href={"#"}
                      className="pt-2 pb-1 mx-2 rounded-lg transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer xl:text-4xl text-2xl font-primary font-extrabold"
                    >
                      Nove izgradnje
                    </Link>
                    <Link
                      href={"#"}
                      className="pt-2 pb-1 mx-2 rounded-lg transition-colors relative after:bg-card after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer xl:text-4xl text-2xl font-primary font-extrabold"
                    >
                      Agenti
                    </Link>
                  </div>

                  <div className="flex-1 pl-2">
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

                    <div className="mt-4">
                      <p className="text-ring text-sm uppercase font-bold">
                        Kompanija
                      </p>

                      <ul className="text-card text-sm uppercase font-primary font-bold mt-4 grid grid-cols-2">
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

                    <div className="mt-4">
                      <p className="text-ring text-sm uppercase font-bold">
                        Uvidi
                      </p>

                      <ul className="text-card text-sm uppercase font-primary font-bold mt-4 grid grid-cols-2">
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

                    <div className="flex items-center justify-center gap-10 lg:mt-20 mt-8">
                      <Button size="md">
                        Agent Login <LockKeyhole />
                      </Button>
                      <Button size="md"
                        showArrow={true}
                        buttonStyle="light"
                        className="border border-gray-400"
                      >
                        Pridruži se
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
