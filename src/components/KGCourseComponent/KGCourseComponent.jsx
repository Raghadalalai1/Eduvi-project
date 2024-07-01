import './KGCourseComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faBagShopping} from '@fortawesome/free-solid-svg-icons'

export default function KGCourseComponent({ onSearchChange }) {
    const KGCourseHighSchool = [
        {
           id : 1 ,
           Image : './public/images/Courses/Courses-Section(2)/Image.svg' ,
           text : "The Three Musketeers1" ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       },
       {
           id : 2 ,
           Image : './public/images/Courses//Courses-Section(2)/Image(1).svg',
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers2" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       } ,
       {
           id : 3 ,
           Image : './public/images/Courses//Courses-Section(2)/Image(2).svg' ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers3" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       },
       {
           id : 4 ,
           Image : './public/images/Courses//Courses-Section(2)/Image(3).svg' ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers4" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       },
       {
           id : 5 ,
           Image : './public/images/Courses//Courses-Section(2)/Image(4).svg' ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers5" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       }
    ];
    const KGCourseHighSchooltwo = [
        {
           id : 6 ,
           Image : './public/images/Courses/Courses-Section(2)/Image(5).svg' ,
           text : "The Three Musketeers6" ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       },
       {
           id : 7 ,
           Image : './public/images/Courses//Courses-Section(2)/Image(6).svg',
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers7" ,
           price : '40$',
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       } ,
       {
           id : 8 ,
           Image : './public/images/Courses//Courses-Section(2)/Image(7).svg' ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers8" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       },
       {
           id : 9 ,
           Image : './public/images/Courses//Courses-Section(2)/Image(8).svg' ,
           stars : < FontAwesomeIcon icon={faStar} className='KG-Star'/> ,
           text : "The Three Musketeers9" ,
           price : '40$' ,
           IconShop : < FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon'/> ,
       },
       {
           id : 10 ,
           Image : './public/images/Courses//Courses-Section(2)/Image(9).svg' ,
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
                <div className='KG-Part-Left'>
                   { filteredCourses.map((course) => {
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
                   { filteredCoursesTwo.map((course) => {
                       return(
                               <div className='KG-Course-Part' id='KG-HiddenPart' key={course.id}>
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
