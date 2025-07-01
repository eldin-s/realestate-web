import React from "react";
import Button from "../ui/Button";

const Contact = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 lg:px-28 lg:py-20 p-6 relative overflow-hidden">
      <div className="flex items-center lg:justify-end relative">
        <h1 className="lg:text-5xl text-2xl font-primary font-bold lg:text-right text-left mr-0 lg:mr-20 p-4">
          Stupi u kontakt
        </h1>

        <div className="absolute top-24 right-10 w-full h-full opacity-20 rounded-lg max-w-[36rem]">
          <img src="/img/F.png" alt="" />
        </div>
      </div>

      {/* FORM */}
      <form className="w-full max-w-xl bg-white lg:p-12 p-6 rounded-lg text-card z-10">
        <div className="flex flex-col lg:space-y-10 space-y-4">
          <input
            type="text"
            placeholder="Ime i prezime"
            className="px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <input
            type="email"
            placeholder="Email adresa"
            className="px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <input
            type="tel"
            placeholder="Broj telefona"
            className="px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <select className="px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">Izaberite naslov</option>
            <option value="stan">Prodaja</option>
            <option value="kuca">Iznajmljivanje</option>
            <option value="poslovni-prostor">Kupovina</option>
            <option value="plac">Zapošljavanje</option>
          </select>

          <textarea
            rows={4}
            placeholder="Vaša poruka..."
            className="px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
          />

          <Button className="w-fit">Pošalji poruku</Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
