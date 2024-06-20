import React from 'react'
import './Courses.css'
import Navbarr from '../../components/Navbarr/Navbarr'
import Footer from '../../components/Footer/Footer'
import Section from '../../components/Section/Section6'
import KGCourseHighSchool from '../../components/KGCourseHighSchool/KGCourseHighSchool'
export default function Courses() {
  return (
    <>
    <Navbarr />
   <div className='main'>
    <KGCourseHighSchool KGCourseTitle = {'Other Courses For High School'} />
   <Section />
     <Footer />

       
   </div>

   </>
  )
}
