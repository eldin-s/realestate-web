import { MapPin } from "lucide-react";
import CustomButton from "@/components/custom/CustomButton";

const newRentListings = [
  {
    id: 1,
    created_at: "2025-06-01T10:15:00Z",
    title: "Prostran dvosoban stan",
    location: "Beograd, Srbija",
    description: "Lepa kuća sa prelepim pogledom na more.",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    created_at: "2025-06-02T09:30:00Z",
    title: "Udobna garsonjera u centru",
    location: "Novi Sad, Srbija",
    description: "Idealna za jednu osobu, blizu svih sadržaja.",
    img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    created_at: "2025-06-03T08:20:00Z",
    title: "Moderna kuća sa 3 spavaće sobe i baštom",
    location: "Niš, Srbija",
    description: "Nameštena kuća sa velikom baštom, pogodna za porodicu.",
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    created_at: "2025-06-04T12:45:00Z",
    title: "Jednosoban stan blizu metroa",
    location: "Subotica, Srbija",
    description: "Odlična lokacija, pogodna za parove i samce.",
    img: "https://images.unsplash.com/photo-1730322031194-3b8003ec6a59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    created_at: "2025-06-05T14:05:00Z",
    title: "Namešten studio u podrumu",
    location: "Kragujevac, Srbija",
    description: "Pristupačan studio, idealan za studente ili samce.",
    img: "https://images.unsplash.com/photo-1592222376988-92af20d4d06c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    created_at: "2025-06-06T11:30:00Z",
    title: "Luksuzna vila sa 4 spavaće sobe",
    location: "Tivat, Crna Gora",
    description: "Prostrana i luksuzna vila u mirnom kraju.",
    img: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    created_at: "2025-06-07T13:20:00Z",
    title: "Povoljna soba za deljenje",
    location: "Zrenjanin, Srbija",
    description: "Povoljno rešenje za studente ili mlade zaposlene.",
    img: "https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    created_at: "2025-06-08T15:00:00Z",
    title: "Kuća u nizu sa garažom",
    location: "Podgorica, Crna Gora",
    description: "Porodična kuća sa garažom, spremna za useljenje.",
    img: "https://images.unsplash.com/photo-1616046619793-7e4badf3fe1f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    created_at: "2025-06-09T10:00:00Z",
    title: "Kompaktan stan za studente",
    location: "Beogad, Srbija",
    description: "Praktičan jednosoban stan u blizini univerziteta.",
    img: "https://images.unsplash.com/photo-1616486232086-81d47190669a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    created_at: "2025-06-10T09:00:00Z",
    title: "Dvosoban stan u mirnom kraju",
    location: "Čačak, Srbija",
    description: "Mirno naselje, idealno za porodice sa decom.",
    img: "https://images.unsplash.com/photo-1612132084523-f7c00377dc0b?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    created_at: "2025-06-11T10:00:00Z",
    title: "Stan sa panoramskim pogledom",
    location: "Kotor, Crna Gora",
    description: "Stan na visokom spratu sa predivnim pogledom na grad.",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    created_at: "2025-06-12T09:30:00Z",
    title: "Minimalistički studio",
    location: "Beograd, Srbija",
    description: "Savremen stil, odličan za digitalne nomade.",
    img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    created_at: "2025-06-13T12:00:00Z",
    title: "Kuća u predgrađu sa dvorištem",
    location: "Novi Sad, Srbija",
    description: "Velika terasa i privatni parking.",
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    created_at: "2025-06-14T13:15:00Z",
    title: "Stan u centru grada",
    location: "Novi Pazar, Srbija",
    description: "Blizu restorana, kafića i gradskog prevoza.",
    img: "https://images.unsplash.com/photo-1730322031194-3b8003ec6a59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    created_at: "2025-06-15T15:30:00Z",
    title: "Garsonjera u suterenu",
    location: "Beograd, Srbija",
    description: "Povoljna opcija za kratkoročno iznajmljivanje.",
    img: "https://images.unsplash.com/photo-1592222376988-92af20d4d06c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    created_at: "2025-06-16T11:20:00Z",
    title: "Vila sa bazenom",
    location: "Herceg Novi, Crna Gora",
    description: "Luksuzna vila sa bazenom i velikim dvorištem.",
    img: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 17,
    created_at: "2025-06-17T09:00:00Z",
    title: "Soba za izdavanje",
    location: "Novi Sad, Srbija",
    description: "Deli se kupatilo, pristupačna lokacija.",
    img: "https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 18,
    created_at: "2025-06-18T10:30:00Z",
    title: "Dvoetažna kuća sa garažom",
    location: "Kotor, Crna Gora",
    description: "Prostrana kuća za veće porodice.",
    img: "https://images.unsplash.com/photo-1616046619793-7e4badf3fe1f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 19,
    created_at: "2025-06-19T11:00:00Z",
    title: "Stan za dvoje studenata",
    location: "Beograd, Srbija",
    description: "Namešten stan, blizu univerziteta i biblioteke.",
    img: "https://images.unsplash.com/photo-1616486232086-81d47190669a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 20,
    created_at: "2025-06-20T14:45:00Z",
    title: "Tih stan u predgrađu",
    location: "Senta, Srbija",
    description: "Pogodan za one koji vole mir i tišinu.",
    img: "https://images.unsplash.com/photo-1612132084523-f7c00377dc0b?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 21,
    created_at: "2025-06-07T13:20:00Z",
    title: "Povoljna soba za deljenje",
    location: "Zrenjanin, Srbija",
    description: "Povoljno rešenje za studente ili mlade zaposlene.",
    img: "https://images.unsplash.com/photo-1649083048337-4aeb6dda80bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


export const NewProperties = () => {
  return (
    <div className="w-full lg:p-20 p-6 relative bg-foreground -mt-8 rounded-t-[3rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4 px-2">
        {newRentListings?.map((listing) => (
          <div
            key={listing.id}
            className="group relative h-[350px] lg:h-[600px] bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:shadow-xl"
          >
            <img
              src={listing.img}
              alt={listing.title}
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />

            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Bottom info container */}
            <div className="absolute bottom-0 left-0 text-white p-4 text-sm z-10 transition-all duration-300 group-hover:transform translate-y-4 group-hover:-translate-y-8">
              <div className="space-y-1">
                <p className="font-extrabold font-primary text-2xl transition-all">
                  {listing.title}
                </p>
                <p className="font-lg font-semibold flex items-center gap-1"><MapPin className="w-3 h-3" /> {listing.location}</p>
              </div>

              {/* Visible on hover */}
              <div className="text-white opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-4 transition-all duration-300 space-y-1 font-secondary font-lg">
                <p>
                  {listing.description || "No description available"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CustomButton showArrow={true} className="ml-auto mt-10">Pogledaj Sve</CustomButton>
    </div>
  );
};
