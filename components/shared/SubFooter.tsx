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
              src="/logos/logoblack.svg"
              className="w-full max-w-[120px] xl:max-w-[200px] object-contain h-auto"
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
          Force Mansion je moderna agencija za nekretnine koja spaja stručnost, posvećenost i inovaciju. Naša misija je da kupcima, prodavcima i investitorima pružimo pouzdanu podršku tokom celog procesa kupovine ili prodaje nekretnine. Bez obzira da li tražite stan, kuću, poslovni prostor ili investicionu priliku – tu smo da vam pomognemo da pronađete idealno rešenje. Verujemo u transparentnost, profesionalizam i lični pristup svakom klijentu.
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
          Naša web stranica je dizajnirana da vam omogući jednostavno i brzo pretraživanje nekretnina u ponudi. Uz napredne filtere, detaljne opise i pregledne fotografije, lako možete pronaći ono što tražite – bilo da kupujete, iznajmljujete ili želite da postavite svoju nekretninu. Force Mansion platforma se redovno ažurira i prilagođava vašim potrebama, kako biste imali najbolje moguće korisničko iskustvo, bilo na računaru ili mobilnom uređaju.
        </p>
      </div>
    </div>
  );
};

export default SubFooter;
