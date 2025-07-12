import Contact from "@/components/home/Contact"
import Details from "@/components/nove-izgradnje/Details"
import Hero from "@/components/nove-izgradnje/Hero"
import Intro from "@/components/nove-izgradnje/Intro"
import Services from "@/components/nove-izgradnje/Services"
import { NewProperties } from "@/components/ui/NewProperties"

const NoveIzgradnje = () => {
  return (
    <>
        <Hero />
        <NewProperties />
        <Intro />
        <Details />
        <Services />
        <Contact />
    </>
  )
}

export default NoveIzgradnje