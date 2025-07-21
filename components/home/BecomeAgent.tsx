import Image from "next/image";
import CustomButton from "@/components/custom/CustomButton";

const BecomeAgent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
      {/* IMAGE */}
      <div className="py-10 xl:block hidden">
        <Image
          src={"/img/F.png"}
          width={500}
          height={500}
          alt="Become an Agent"
          className="opacity-20"
        />
      </div>
      {/* INFO */}
      <div className="space-y-8 p-4">
        <p className="uppercase text-gray-400 font-bold">Postani agent Zeeker</p>
        <h1 className="xl:text-5xl text-xl font-primary font-extrabold">Zahtevajte više <br className="hidden lg:block" /> od svog <br className="hidden lg:block" /> brokera</h1>
        <p>Razvijajte svoje poslovanje i brend uz brokersku kuću koja se ne boji da će staroj gardi stvoriti neugodnosti.</p>

        <CustomButton showArrow={true}>Pridruži se</CustomButton>
      </div>
    </div>
  );
};

export default BecomeAgent;
