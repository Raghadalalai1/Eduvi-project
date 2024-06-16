import React from 'react'
import './Home.css'
import Navbarr from '../../components/Navbarr/Navbarr'
import Footer from '../../components/Footer/Footer'
import KGHeroHome from '../../components/KGHeroHome/KGHeroHome'
export default function Home() {
  return (
    <>
     <Navbarr />
    <div className='main'>
      <KGHeroHome />
      

        
    </div>
    <Footer />
    </>
  )
}
