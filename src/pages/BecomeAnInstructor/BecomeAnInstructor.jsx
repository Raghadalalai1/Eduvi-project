import './BecomeAnInstructor.css'
import Navbarr from '../../components/Navbarr/Navbarr'
import Footer from '../../components/Footer/Footer'
import Section from '../../components/Section/Section6'
import PropsHero from "../../components/PropsHero/PropsHero";
import imagebecomeaninstructor from '../../../public/images/BecomeAnInstructor/BecomeAnInstructor-Hero/Hero-become.svg'
import image3 from '../../../public/images/Courses/Courses-Hero/Pattern.svg'
export default function BecomeAnInstructor() {
  return (
    <>
      <Navbarr />
      <div className='main'>
      <PropsHero 
      Home="Home"
      Shop="Become An Instructor"
      Textclass="BKH-text-h4-page-hero"
      H1="Join Eduvi as a Mentor"
      Textmainclass="BKH-text-h1-page-BecomeAnInstructor"
      image= {imagebecomeaninstructor}
      showImage2={true}
      image2={image3}
      imageclass="BKH-image-hero-page-BecomeAnInstructor"
      imageclasstwo="BKH-calssimage-hero-page-BecomeAnInstructor"
      imageclassthree="BKH-imageplus-hero-page-BecomeAnInstructor"
      />
        <Section />
        <Footer />

      </div>
    </>

  )
}
