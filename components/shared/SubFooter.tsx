import { FacebookIcon, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import { TikTokIcon, TwitterXIcon } from "../Icons";
import Link from "next/link";

const socials = [
  { name: "Facebook", icon: <FacebookIcon className="w-4 h-4" /> },
  { name: "Instagram", icon: <Instagram className="w-4 h-4" /> },
  { name: "LinkedIn", icon: <Linkedin className="w-4 h-4" /> },
  { name: "Twitter", icon: <TwitterXIcon className="w-4 h-4" /> },
  { name: "Tiktok", icon: <TikTokIcon className="w-4 h-4" /> },
  { name: "YouTube", icon: <Youtube className="w-4 h-4" /> },
];

const links = [
  { name: "Politika privatnosti", href: "#" },
  { name: "Uslovi korišćenja", href: "#" },
  { name: "Izjava o pravednom stanovanju", href: "#" },
  { name: "Standardne operativne procedure", href: "#" },
  { name: "Obaveštenje o pravednom stanovanju", href: "#" },
  {
    name: "Obaveštenje o razumnim prilagođavanjima za potencijalne zakupce",
    href: "#",
  },
  { name: "Obaveštenje o borbi protiv diskriminacije", href: "#" },
  { name: "Upozorenja o prevari", href: "#" },
];

const SubFooter = () => {
  return (
    <div className="w-full bg-white lg:px-20 md:px-8 px-4 text-card pb-10">
      <div className="border-y border-gray-200 py-12">
        <div className="flex items-start justify-between gap-4 flex-1 flex-col lg:flex-row ">
          <div className="flex items-center justify-between gap-4 flex-1">
            <Image
              src="/real-estate.png"
              className="w-full max-w-[150px] xl:max-w-[250px] object-contain h-auto"
              alt="Logo"
              width={250}
              height={70}
            />

            <span className="text-xs ml-auto mr-10 font-primary">
              &#169; 2025 Force Mansion Real Estate. Sva prava rezervisana.
            </span>
          </div>

          <ul className="flex items-center justify-end gap-4 flex-1 flex-wrap">
            {socials.map((social, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-ring transition-colors md:p-5 p-3 rounded-full border border-gray-200 hover:border-ring"
              >
                {social.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-8">
        <p className="text-sm text-gray-500 font-primary italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, at?
          Quibusdam, quo odit, esse expedita debitis pariatur aliquid quaerat
          nam rem possimus tempore repellendus asperiores molestias, nostrum
          illo repudiandae blanditiis optio mollitia ducimus necessitatibus
          rerum!
        </p>

        <div className="flex flex-col lg:flex-row gap-2 my-4">
          <ul className="flex items-start justify-start gap-x-4 gap-y-1 flex-wrap">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm text-muted font-primary hover:underline font-bold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </ul>

        </div>

        <p className="text-sm text-gray-500 font-primary italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, at?
          Quibusdam, quo odit, esse expedita debitis pariatur aliquid quaerat
          nam rem possimus tempore repellendus asperiores molestias, nostrum
          illo repudiandae blanditiis optio mollitia ducimus necessitatibus
          rerum!
        </p>
      </div>
    </div>
  );
};

export default SubFooter;
