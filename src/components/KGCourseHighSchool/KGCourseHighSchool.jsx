import React, { useState } from 'react'
import './KGCourseHighSchool.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import KGCourseComponent from '../KGCourseComponent/KGCourseComponent'
import Pagination from '../HSShopSection2/Pagination'

export default function KGCourseHighSchool({KGCourseTitle}) {
    const [search, setSearch] = useState('');

    const handleSearchChange = (event) => {
      setSearch(event.target.value);
    };

    const [showMore, setShowMore] = useState(false);
  const coursesToShowInitially = 1;
  const totalCourses = 3;

  const handleSeeMoreClick = () => {
    setShowMore(!showMore);
  };
   
           return (
            <section className='RA-section2-courses'>
                <h3 className='KG-Courses-Title'>{KGCourseTitle}</h3>
                <form className="KG-Course-Form ">
                    <div className="KG-Course-input">
                    <input
                        type="search"
                        placeholder=" Serach Class, Course "
                        onChange={handleSearchChange}
                    ></input>
                    <button >
                        Search
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='KG-Icon-Glass' />
                    </button>
                </div>
                <select name="School" className="KG-Course-Search-Select">
                    <option>Sort by:Latest </option>
                    <option>Sort by: oldest</option>
                    </select>
                </form>
                {[...Array(showMore ? totalCourses : coursesToShowInitially)].map((_, index) => (
        <KGCourseComponent  onSearchChange={search} key={index} bool={true} />
      ))}
      <p className='RA-SeeMore' onClick={handleSeeMoreClick}>
        {showMore ? 'See Less' : 'See More'}
      </p>
                <div className="KG-side">
                    <div className="HS-sidebar">
                        <button>
                            <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#9c4dfa" }} />
                        </button>
                        <p>pages</p>
                        <button className="HS-back">1</button>
                        <p>of 13</p>
                        <button className="HS-background">
                            <FontAwesomeIcon icon={faChevronRight} style={{ color: "#ffffff" }} />
                        </button>
                    </div>
                </div>
                 {/* <Pagination   pages ={pages} currentPage={currentPage} setcurrentPage={setcurrentPage} /> */}

            </section>
       )
       }
