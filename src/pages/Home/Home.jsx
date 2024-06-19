import React from 'react'
import './Home.css'
import Navbarr from '../../components/Navbarr/Navbarr'
import Footer from '../../components/Footer/Footer'

import Section from '../../components/Section/Section6'
import KGHeroHome from '../../components/KGHeroHome/KGHeroHome'
import AMSEC from '../../components/section-6/AM-SEC'
import Registation from '../../components/Registation/Regstation'
export default function Home() {
  return (
    <>
     <Navbarr />
    <div className='main'>


       <KGHeroHome />
       <Registation />
       <AMSEC />

        <Section />
      <Footer />
   
      
  
    </div>

    </>
  )
}
