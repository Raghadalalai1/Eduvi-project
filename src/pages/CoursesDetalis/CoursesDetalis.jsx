import React from 'react'
import './CoursesDetalis.css'
import Footer from '../../components/Footer/Footer'
import Navbarr from '../../components/Navbarr/Navbarr'
import Section from '../../components/Section/Section6'
import KGCourseComponent from '../../components/KGCourseComponent/KGCourseComponent'
export default function CoursesDetalis() {
  return (
    <>
    <Navbarr />
   <div className='main'>
    <KGCourseComponent/>
     <Section />
     <Footer />

       
   </div>

   </>
  )
}
