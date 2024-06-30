import './Courses.css'
import Navbarr from '../../components/Navbarr/Navbarr'
import Footer from '../../components/Footer/Footer'

import LKCoursesSection2 from '../../components/LK-Courses-Section2/LK-Courses-Section2'

import Section from '../../components/Section/Section6'

import KGCourseHighSchool from '../../components/KGCourseHighSchool/KGCourseHighSchool'


import PropsHero from "../../components/PropsHero/PropsHero";
import image2 from "../../../public/images/Courses/Courses-Hero/Image.png";
import image3 from '../../../public/images/Courses/Courses-Hero/Pattern.svg'




export default function Courses() {
  return (
    <>
    <Navbarr />


   <div className='main' id='coruses'>
     <PropsHero
        Home="Home" id="Courses"
        Shop="Courses"
        Textclass="BKH-text-h4-page-hero"
        H1="  Eduvi Courses For All Standards"
        Textmainclass="BKH-text-h1-page-Courses"
        image2={image3}
        showImage2={true}
        image={image2}
        imageclass="BKH-image-hero-page-Courses"
        imageclasstwo="BKH-calssimage-hero-page-Courses"
        imageclassthree="BKH-imageplus-hero-page-Courses" />
    <LKCoursesSection2 />
    <KGCourseHighSchool KGCourseTitle = {'Other Courses For High School'} />
     <Section />
    <Footer />


     



       
   </div>

   </>
  )
}
