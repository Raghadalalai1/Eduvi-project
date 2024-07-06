





  

import React, { useEffect, useState } from 'react'
import KGCourseComponent from '../KGCourseComponent/KGCourseComponent'
import './RASimilarCourses.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
export default function RASimilarCourses() {
  
  useEffect(()=>{
    Aos.init()
  },[])
    const [showMore, setShowMore] = useState(false);
  const coursesToShowInitially = 1;
  const totalCourses = 2;
  const handleSeeMoreClick = () => {
    setShowMore(!showMore);
  };
  const [search, setSearch] = useState('');


  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  return (

    <div className="RA-section-similar">
      <h1 className="RA-similar"  data-aos="fade-right" data-aos-duration="3000" data-aos-easing="ease-out-cubic">Similar Courses</h1>
      {[...Array(showMore ? totalCourses : coursesToShowInitially)].map(
        (_, index) => (
          <KGCourseComponent key={index} bool={false} onSearchChange={search} />
        )
      )}
      <p className="RA-SeeMore" onClick={handleSeeMoreClick}>
        {showMore ? "See Less" : "See More"}
      </p>

   
    
 
  
    </div>
  );
}
