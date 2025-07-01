import { MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function NewBuilding() {
  return (
    <div className='w-full lg:px-12 flex items-center pb-8 justify-center bg-black relative'>
        <Image
            src={"/img/novaizgradnja.webp"}
            width={1800}
            height={600}
            alt="New Building"
            className="w-full h-auto min-h-80 object-cover"
        />

        <div
          className="absolute left-0 bottom-0 w-full z-0"
          style={{
            height: "100%",
            background:
              "linear-gradient(to bottom,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.3) 20%, transparent 100%)",
          }}
        />

        <div
          className="absolute left-0 bottom-8 w-full z-0"
          style={{
            height: "100%",
            background:
              "linear-gradient(to top,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.4) 35%, transparent 100%)",
          }}
        />

        <div className="absolute bottom-16 xl:left-56 md:left-20 left-6 flex flex-col items-start lg:gap-4 gap-1 text-white z-10">
            <p className='uppercase xl:text-2xl font-primary'>Nova izgradnja u toku</p>
            <h3 className='xl:text-5xl text-lg font-extrabold font-primary'>U Centru Grada</h3>
            <p className='flex items-center gap-4'>Pogledajte lokaciju <MapPin className='w-6 h-6 text-red-600' /></p>
        </div>
    </div>
  )
}
