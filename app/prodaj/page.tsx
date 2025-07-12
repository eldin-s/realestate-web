import Contact from '@/components/home/Contact'
import Featured from '@/components/home/Featured'
import Book from '@/components/prodaj/Book'
import Hero from '@/components/prodaj/Hero'
import Intro from '@/components/prodaj/Intro'
import Numbers from '@/components/prodaj/Numbers'
import Sections from '@/components/prodaj/Sections'
import YearImpression from '@/components/prodaj/YearImpression'
import React from 'react'

const page = () => {
  return (
    <>
        <Hero />
        <Intro />
        <Numbers />
        <Sections />
        <Book />
        <Featured />
        <YearImpression />
        <Contact />
    </>
  )
}

export default page