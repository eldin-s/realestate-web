'use client'

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`p-2 mx-2 rounded-full fixed right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "top-4 bg-card/90 shadow-lg py-8" : "top-16 bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between gap-2 font-[family-name:var(--font-quicksand)]">
        <div className="pl-8">
          <img src="/logo.png" className="max-h-14 w-full" alt="Logo" />
        </div>
        <div className="flex items-center">
          {navItems.map((item, index) => (
            <div key={index} className="relative group font-semibold text-lg">
              <a
                href={item.url || "#"}
                className="pt-2 pb-1 mx-2 text-gray-800 dark:text-gray-200 rounded-lg transition-colors relative after:bg-white after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              >
                {item.label}
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
        </div>
        <div className="border border-gray-400 rounded-full px-4 py-1 mr-4">
          <span>Menu</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
