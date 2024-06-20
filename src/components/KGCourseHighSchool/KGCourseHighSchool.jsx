import React from 'react'
import './KGCourseHighSchool.css'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faBagShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'

export default function KGCourseHighSchool({KGCourseTitle}) {
    const KGCourseHighSchool = [
        {
           id : 1 ,
           Image : './public/images/Courses/Courses-Section(2)/Image.svg' ,
           text : "The Three Musketeers" ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       },
       {
           id : 2 ,
           Image : './public/images/Courses//Courses-Section(2)/Image(1).svg',
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       } ,
       {
           id : 3 ,
           Image : './public/images/Courses//Courses-Section(2)/Image(2).svg' ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       },
       {
           id : 4 ,
           Image : './public/images/Courses//Courses-Section(2)/Image(3).svg' ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       },
       {
           id : 5 ,
           Image : './public/images/Courses//Courses-Section(2)/Image(4).svg' ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       }
    ];
    const KGCourseHighSchooltwo = [
        {
           id : 6 ,
           Image : './public/images/Courses/Courses-Section(2)/Image(5).svg' ,
           text : "The Three Musketeers" ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       },
       {
           id : 7 ,
           Image : './public/images/Courses//Courses-Section(2)/Image(6).svg',
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers" ,
           price : '40$',
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       } ,
       {
           id : 8 ,
           Image : './public/images/Courses//Courses-Section(2)/Image(7).svg' ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       },
       {
           id : 9 ,
           Image : './public/images/Courses//Courses-Section(2)/Image(8).svg' ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       },
       {
           id : 10 ,
           Image : './public/images/Courses//Courses-Section(2)/Image(9).svg' ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       }
    ];
   
           return (
            <>
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
            <div className='KG-Course-Teacher'>
                <div className='KG-Part-Left'>
                   { KGCourseHighSchool.map((course) => {
                       return(
                               <div className='KG-Course-Part' key={course.id}>
                                   <div className='KG-Course-Info'>
                                       <img src={course.Image} alt='image-course-title'></img>
                                       <div>
                                            <p className='KG-Course-Text'>{course.text}</p>
                                            <div>
                                                {course.stars}
                                                {course.stars}
                                                {course.stars}
                                                {course.stars}
                                                {course.stars}
                                           </div>
                                           <p className='KG-Course-Price'>{course.price}</p>
                                           <div className='KG-BG-Icon'> {course.IconShop} </div>
                                       </div>
                                   </div>
                               </div>
                       );
                   })}
                   </div>
                   <div  className='KG-Part-Right'>
                   { KGCourseHighSchooltwo.map((course) => {
                       return(
                               <div className='KG-Course-Part KG-HiddenPart' key={course.id}>
                                   <div className='KG-Course-Info'>
                                       <img src={course.Image} alt='image-course-title'></img>
                                       <div>
                                            <p className='KG-Course-Text'>{course.text}</p>
                                            <div>
                                                {course.stars}
                                                {course.stars}
                                                {course.stars}
                                                {course.stars}
                                                {course.stars}
                                           </div>
                                           <p className='KG-Course-Price'>{course.price}</p>
                                           <div className='KG-BG-Icon'> {course.IconShop} </div>
                                       </div>
                                   </div>
                               </div>
                       );
                   })}
                   </div>
            </div>
            <div className="KG-side">
                <div className="HS-sidebar">
                    <button>
                        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#9c4dfa" }} />
                    </button>
                    <p>pages</p>
                    <button className="HS-back">5</button>
                    <p>of 80</p>
                    <button className="HS-background">
                        <FontAwesomeIcon icon={faChevronRight} style={{ color: "#ffffff" }} />
                    </button>
                </div>
            </div>
            </>
       )
       }
