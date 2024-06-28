import './Shope.css'
import Footer from '../../components/Footer/Footer'
import Navbarr from '../../components/Navbarr/Navbarr'
import Section2Shop from '../../components/Section2Shop/Section2Shop'
import Section from '../../components/Section/Section6'
import PropsHero from '../../components/PropsHero/PropsHero'
import imageshop from '../../../public/images/Shop/Shop-Hero/bookcase.png'
export default function Shope() {

  
  return (
    <>
    <Navbarr />
   <div className='main'>
   <PropsHero 
      Home="Home"
      Shop="Shop"
      Textclass="BKH-text-h4-page-hero"
      H1="Eduvi Online Book Shop"
      Textmainclass="BKH-text-h1-page-shop"
      image= {imageshop}
      imageclass="BKH-image-hero-page-shop "
      />
     <Section2Shop  />
     <Section />
   
   
     <Footer />

       
   </div>

   </>
  )
}
