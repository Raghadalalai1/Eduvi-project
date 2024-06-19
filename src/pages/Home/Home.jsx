import React from 'react'
import './Home.css'
import Navbarr from '../../components/Navbarr/Navbarr'
import Footer from '../../components/Footer/Footer'


import Section from '../../components/Section/Section6'
import KGHeroHome from '../../components/KGHeroHome/KGHeroHome'
import LKHomeSection2 from '../../components/LK-Home-section2/LK-Home-section2'
import LKHomeSection3 from '../../components/LK-Home-section3/LK-Home-section3'

export default function Home() {
  return (
    <>
     <Navbarr />
    <div className='main'>


       <KGHeroHome />
       <LKHomeSection2 />
       <LKHomeSection3 />
        <Section />
      <Footer />
   
      
  
    </div>

    </>
  )
}
