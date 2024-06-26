import React from 'react'
import './SingleMonetorDetalis.css';
import Navbarr from '../../components/Navbarr/Navbarr';
import Footer from '../../components/Footer/Footer';
import Section from '../../components/Section/Section6'
import KGSingleMentor from '../../components/kg-det/KGSingleMentor';
export default function SingleMonetorDetalis({h5,imge}) {
  return (
    <>
    <Navbarr />
   <div className='main'>
     <Section />
     <KGSingleMentor imge={imge} h5={h5}/>
     <Footer />

       
   </div>

   </>
  )
}
