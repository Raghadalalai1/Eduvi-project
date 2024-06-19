import React from 'react'
import './Home.css'
import Navbarr from '../../components/Navbarr/Navbarr'
import Footer from '../../components/Footer/Footer'


import Section from '../../components/Section/Section6'
import KGHeroHome from '../../components/KGHeroHome/KGHeroHome'
import SECTION6 from '../../components/SECTION6/AM-SEC'


export default function Home() {
  return (
    <>
     <Navbarr />
    <div className='main'>


       <KGHeroHome />
       <SECTION6 />
        <Section />
      
      
      <Footer />
   
      
  
    </div>

    </>
  )
}
