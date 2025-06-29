"use client";

import { ChevronDown, Menu, Search, User } from "lucide-react";
import React, { useEffect } from "react";

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
    label: "Agenti",
    links: [
      {
        label: "Pronađi agenta",
        url: "/agenti/pronađi",
      },
      {
        label: "Pridruži se",
        url: "/agenti/pridruzise",
      },
    ],
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`p-4 pt-10 mx-2 rounded-full fixed right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "top-4 bg-card/90 shadow-lg md:py-8 py-4"
          : "top-16 bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between gap-2 font-[family-name:var(--font-quicksand)]">
        <div className="pl-8">
          <img
            src="/real-estate.png"
            className="max-h-6 w-full object-cover"
            alt="Logo"
          />
        </div>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center justify-between gap-6">
          {navItems.map((item, index) => (
            <div key={index} className="relative hidden group font-semibold text-base xl:flex items-center">
              <a
                href={item.url || "#"}
                className="pt-2 pb-1 mx-2 text-gray-800 dark:text-white rounded-lg transition-colors relative after:bg-white after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer group"
              >
                {item.label}{" "}
                {item.links && (
                  <ChevronDown className="inline ml-1 h-4 w-4 transform rotate-0 group-hover:-rotate-180 transition-transform" />
                )}
              </a>
              {item.links && (
                <div className="absolute left-0 hidden min-w-full group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                  {item.links.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.url}
                      className="block px-4 py-2 text-gray-800 dark:text-gray-200 rounded-lg transition-colors text-nowrap"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href={"#"}
            className="pt-2 hidden md:inline-block pb-1 mx-2 text-gray-800 dark:text-white rounded-lg transition-colors relative after:bg-white after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer font-semibold"
          >
            1.887 Mansion
          </a>
          <div className="border border-gray-400 rounded-full px-4 py-2 mr-4 flex items-center justify-center gap-3">
            <span>
              <Search className="w-4 h-4" />
            </span>
            <span className="font-bold">Sve Force Mansion</span>
          </div>

          <div className="border bg-white rounded-full px-4 py-2 mr-4 flex items-center justify-center gap-3">
            <span className="font-bold text-blue-700">Sve ostalo</span>
          </div>
          <div className="border border-gray-400 rounded-full p-3 mr-4 flex items-center justify-center gap-3">
            <User className="w-4 h-4" />
          </div>

          <div className="border border-gray-400 rounded-full px-4 py-2 mr-4 flex items-center justify-center gap-3">
            <span className="font-bold">Menu</span>
            <span>
              <Menu />
            </span>
          </div>
        </div>
        {/* Mobile hamburger */}
        {/* Mobile menu */}
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 bg-card/95 shadow-lg rounded-b-xl flex flex-col items-center py-4 z-50 animate-fade-in">
            {navItems.map((item, index) => (
              <div key={index} className="w-full text-center mb-2">
                <a
                  href={item.url || "#"}
                  className="block py-2 px-4 text-gray-800 dark:text-gray-200 font-semibold text-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
                {item.links && (
                  <div className="flex flex-col">
                    {item.links.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.url}
                        className="block py-1 px-6 text-gray-700 dark:text-gray-300 text-base"
                        onClick={() => setMobileOpen(false)}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
