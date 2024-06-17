import React from 'react'
import './Shope.css'
import Footer from '../../components/Footer/Footer'
import Navbarr from '../../components/Navbarr/Navbarr'
import Section2Shop from '../../components/Section2Shop/Section2Shop'
import Section from '../../components/Section/Section6'
export default function Shope() {
  return (
    <>
    <Navbarr />
   <div className='main'>
     <Section2Shop />
     <Section />
     <Footer />

       
   </div>

   </>
  )
}
