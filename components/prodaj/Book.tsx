import { Check, Download } from "lucide-react";
import CustomButton from "@/components/custom/CustomButton";

const Book = () => {
  return (
    <div className="w-full lg:p-12 p-6 relative bg-white flex justify-center">
      <div className="flex flex-col md:flex-row justify-center xl:max-w-1/2 gap-8">
        <div className="space-y-4">
          <h1 className="font-primar text-4xl font-extrabold text-card">
            Prodaj uz Zeeker
          </h1>
          <div>
            <p className="text-black flex gap-2 items-center"><Check className="w-4 h-4" /> Saznajte više o procesu prodaje</p>
            <p className="text-black flex gap-2 items-center"><Check className="w-4 h-4" /> Dobijte vredne savete i preporuke</p>
          </div>
          <CustomButton buttonStyle="light">Preuzmi <Download className="w-4 h-4 text-card ml-4" /></CustomButton>
        </div>

        <div className="max-w-56">
            <img src="/img/book-placeholder.png" alt="Book" />
        </div>
      </div>
    </div>
  );
};

export default Book;
