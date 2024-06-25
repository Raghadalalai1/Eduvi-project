import React from 'react'
import './CoursesDetalis.css'
import Footer from '../../components/Footer/Footer'
import Navbarr from '../../components/Navbarr/Navbarr'
import Section from '../../components/Section/Section6'

import KGCourseDetailsPlayList from '../../components/KGCourseDetailsPlayList/KGCourseDetailsPlayList'

import KGCourseComponent from '../../components/KGCourseComponent/KGCourseComponent'
import RASimilarCourses from '../../components/RASimilarCourses/RASimilarCourses'

export default function CoursesDetalis() {
  return (
    <>
    <Navbarr />
   <div className='main'>

    <KGCourseDetailsPlayList />

    <RASimilarCourses/>

     <Section />
     <Footer />

       
   </div>

   </>
  )
}
