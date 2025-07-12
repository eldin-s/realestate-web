"use client"

import { MedalIcon } from 'lucide-react'
import CountUp from 'react-countup'

const YearImpression = () => {
  return (
    <div className='w-full lg:p-12 p-6 relative bg-foreground'>
        <div className="flex items-center justify-center flex-col mt-24 gap-6">
        <div>
          <MedalIcon className="w-8 h-8 text-secondary" />
        </div>

        <p className="text-center text-black">
          Najviše komentisan brend nekretnina u državi.
        </p>

        <h4 className="w-full xl:max-w-1/2 text-card text-center text-xl md:text-3xl font-primary font-bold">
          Sinergijski PR plan je sastavni deo svake uspešne strategije prodaje kuće. Stavite svoj dom u prvi plan i dosegnite još više kupaca uz našu nenadmašnu medijsku izloženost.
        </h4>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-4 mt-20">
        <div className="text-card border border-ring/30 p-6 py-12 rounded-md text-center w-[28rem]">
          <CountUp
            end={480}
            enableScrollSpy
            className="lg:text-7xl text-3xl font-bold"
          />
          <span className="lg:text-6xl text-3xl font-bold">h+</span>
          <p className="font-semibold mt-4">prikaza godišnje</p>
        </div>
        <div className="text-card border border-ring/30 p-6 py-12 rounded-md text-center w-[28rem]">
          <CountUp
            end={180}
            enableScrollSpy
            className="lg:text-7xl text-3xl font-bold"
          />
          <span className="lg:text-6xl text-3xl font-bold">h+</span>
          <p className="font-semibold mt-4">godišnje plasmana</p>
        </div>
      </div>
    </div>
  )
}

export default YearImpression