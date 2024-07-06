import './KGCourseComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function KGCourseComponent({ onSearchChange ,bool}) {
    const KGCourseHighSchool = [
        {
           id : 1 ,
           Image : './images/Courses/Courses-Section(2)/Image.svg' ,
           text : "The Three Musketeers1" ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       },
       {
           id : 2 ,
           Image : './images/Courses//Courses-Section(2)/Image(1).svg',
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers2" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       } ,
       {
           id : 3 ,
           Image : './images/Courses//Courses-Section(2)/Image(2).svg' ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers3" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       },
       {
           id : 4 ,
           Image : './images/Courses//Courses-Section(2)/Image(3).svg' ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers4" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       },
       {
           id : 5 ,
           Image : './images/Courses//Courses-Section(2)/Image(4).svg' ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers5" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       }
    ];
    
    const KGCourseHighSchooltwo = [
        {
           id : 6 ,
           Image : './images/Courses/Courses-Section(2)/Image(5).svg' ,
           text : "The Three Musketeers6" ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       },
       {
           id : 7 ,
           Image : './images/Courses//Courses-Section(2)/Image(6).svg',
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers7" ,
           price : '40$',
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       } ,
       {
           id : 8 ,
           Image : './images/Courses//Courses-Section(2)/Image(7).svg' ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers8" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       },
       {
           id : 9 ,
           Image : './images/Courses//Courses-Section(2)/Image(8).svg' ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers9" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       },
       {
           id : 10 ,
           Image : './images/Courses//Courses-Section(2)/Image(9).svg' ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers10" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       }
    ];
    const filteredCourses = KGCourseHighSchool.filter(course =>
        course.text.toLowerCase().includes(onSearchChange.toLowerCase())
      );
    
      const filteredCoursesTwo = KGCourseHighSchooltwo.filter(course =>
        course.text.toLowerCase().includes(onSearchChange.toLowerCase())
      );
  return (
    <>
                <div className='KG-Course-Teacher'>
                <div className={bool ? 'KG-Part-Left' : 'RA-Part-Left'}>
                   { filteredCourses.map((course) => {
                       return(
                               <div className={bool ? 'KG-Course-Part' : 'RA-Course-Part'} key={course.id}>
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
                   <div className={bool ? 'KG-Part-Right' : 'RA-Part-Right'}>
                   { filteredCoursesTwo.map((course) => {
                       return(
                               <div className={bool ? 'KG-Course-Part' : 'RA-Course-Part'} id='KG-HiddenPart' key={course.id}>
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
        </>

    )
}
