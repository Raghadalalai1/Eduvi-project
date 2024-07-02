import React from 'react'
import './KGCourseHighSchool.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import KGCourseComponent from '../KGCourseComponent/KGCourseComponent'

export default function KGCourseHighSchool({ KGCourseTitle }) {

    return (
        <section className='RA-section2-courses'>
            <h3 className='KG-Courses-Title'>{KGCourseTitle}</h3>
            <form className="KG-Course-Form ">
                <div className="KG-Course-input">
                    <input
                        type="search"
                        placeholder=" Serach Class, Course "
                    ></input>
                    <button>
                        Search
                        <FontAwesomeIcon icon={faMagnifyingGlass} className='KG-Icon-Glass' />
                    </button>
                </div>
                <select name="School" className="KG-Course-Search-Select">
                    <option>Sort by:Latest </option>
                    <option>Sort by: oldest</option>
                </select>
            </form>
            <KGCourseComponent bool={true} />
            <p className='RA-SeeMore'>See More</p>
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
        </section>
    )
}
