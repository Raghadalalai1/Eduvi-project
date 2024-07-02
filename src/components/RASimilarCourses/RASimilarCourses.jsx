import React from 'react'
import KGCourseComponent from '../KGCourseComponent/KGCourseComponent'
import './RASimilarCourses.css'
export default function RASimilarCourses() {
  return (
    <div className='RA-section-similar'>
      <h1 className='RA-similar'>Similar Courses</h1>
      <KGCourseComponent bool={false} />
      <p className='RA-SeeMore'>See More</p>
    </div>
  )
}
