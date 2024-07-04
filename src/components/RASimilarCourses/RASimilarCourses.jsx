import React, { useState } from 'react'
import KGCourseComponent from '../KGCourseComponent/KGCourseComponent'
import './RASimilarCourses.css'
export default function RASimilarCourses() {

  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className='RA-section-similar'>
      <h1 className='RA-similar'>Similar Courses</h1>
      <KGCourseComponent bool={false} onSearchChange={search} />
      <p className='RA-SeeMore'>See More</p>
    </div>
  )
}
