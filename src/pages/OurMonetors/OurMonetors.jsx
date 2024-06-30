import './OurMonetors.css'
import Navbarr from '../../components/Navbarr/Navbarr'
import Footer from '../../components/Footer/Footer'
import Section from '../../components/Section/Section6'
import PropsHero from '../../components/PropsHero/PropsHero'
import imageourMonetors from '../../../public/images/OurMentor/OurMentor-Hero/HroOurMentor.svg'
import LKOurMentorssection2 from '../../components/LK-OurMonetors-Section2/LK-OurMentors-section2'
export default function OurMonetors() {
  return (
    <>
    <Navbarr />
   <div className='main'>
   <PropsHero
        Home="Home" 
        Shop="Our Monetors"
        Textclass="BKH-text-h4-page-hero"
        H1="Eduvi has the qualified mentor"
        Textmainclass="BKH-text-h1-page-OurMonetors"
        image= {imageourMonetors}
        imageclass="BKH-image-hero-page-OurMonetors"
      />
      <LKOurMentorssection2 />
     <Section />
     <Footer />
     
    
    
    
       
   </div>

   </>
  )
}
