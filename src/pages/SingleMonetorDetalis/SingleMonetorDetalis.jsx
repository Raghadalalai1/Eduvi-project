import React from 'react'
import './SingleMonetorDetalis.css';
import Navbarr from '../../components/Navbarr/Navbarr';
import Footer from '../../components/Footer/Footer';
import Section from '../../components/Section/Section6'
import KGSingleMentor from '../../components/KGSingleMentorDetails/KGSingleMentor'
export default function SingleMonetorDetalis() {
  return (
    <>
    <Navbarr />
   <div className='main'>
    <KGSingleMentor />
     <Section />
     <Footer />

       
   </div>

   </>
  )
}
