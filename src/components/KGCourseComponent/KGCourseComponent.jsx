import './KGCourseComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function KGCourseComponent({ bool }) {
    const [ratings, setRatings] = useState({});

    const handleRating = (courseId, rating) => {
        setRatings({ ...ratings, [courseId]: rating });
    };

    const KGCourseHighSchool = [
        {
            id: 1,
            Image: './public/images/Courses/Courses-Section(2)/Image.svg',
            text: "The Three Musketeers",
            price: '40$',
            IconShop: <FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon' />,
        },
        {
            id: 2,
            Image: './public/images/Courses//Courses-Section(2)/Image(1).svg',
            text: "The Three Musketeers",
            price: '40$',
            IconShop: <FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon' />,
        },
        {
            id: 3,
            Image: './public/images/Courses//Courses-Section(2)/Image(2).svg',
            text: "The Three Musketeers",
            price: '40$',
            IconShop: <FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon' />,
        },
        {
            id: 4,
            Image: './public/images/Courses//Courses-Section(2)/Image(3).svg',
            text: "The Three Musketeers",
            price: '40$',
            IconShop: <FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon' />,
        },
        {
            id: 5,
            Image: './public/images/Courses//Courses-Section(2)/Image(4).svg',
            text: "The Three Musketeers",
            price: '40$',
            IconShop: <FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon' />,
        }
    ];
    
    const KGCourseHighSchooltwo = [
        {
            id: 6,
            Image: './public/images/Courses/Courses-Section(2)/Image(5).svg',
            text: "The Three Musketeers",
            price: '40$',
            IconShop: <FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon' />,
        },
        {
            id: 7,
            Image: './public/images/Courses//Courses-Section(2)/Image(6).svg',
            text: "The Three Musketeers",
            price: '40$',
            IconShop: <FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon' />,
        },
        {
            id: 8,
            Image: './public/images/Courses//Courses-Section(2)/Image(7).svg',
            text: "The Three Musketeers",
            price: '40$',
            IconShop: <FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon' />,
        },
        {
            id: 9,
            Image: './public/images/Courses//Courses-Section(2)/Image(8).svg',
            text: "The Three Musketeers",
            price: '40$',
            IconShop: <FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon' />,
        },
        {
            id: 10,
            Image: './public/images/Courses//Courses-Section(2)/Image(9).svg',
            text: "The Three Musketeers",
            price: '40$',
            IconShop: <FontAwesomeIcon icon={faBagShopping} className='KG-Bag-Icon' />,
        }
    ];

    return (
        <>
            <div className='KG-Course-Teacher'>
                <div className={bool ? 'KG-Part-Left' : 'RA-Part-Left'}>
                    {KGCourseHighSchool.map((course) => {
                        return (
                            <div className={bool ? 'KG-Course-Part' : 'RA-Course-Part'} key={course.id}>
                                <div className='KG-Course-Info'>
                                    <img src={course.Image} alt='image-course-title'></img>
                                    <div>
                                        <p className='KG-Course-Text'>{course.text}</p>
                                        <div>
                                            {[...Array(5)].map((_, index) => (
                                                <FontAwesomeIcon
                                                    key={index}
                                                    icon={faStar}
                                                    className={index < ratings[course.id] ? 'KG-Star KG-Star-color' : 'KG-Star'}
                                                    onClick={() => handleRating(course.id, index + 1)}
                                                />
                                            ))}
                                        </div>
                                        <p className='KG-Course-Price'>{course.price}</p>
                                        <div className='KG-BG-Icon'>{course.IconShop}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={bool ? 'KG-Part-Right' : 'RA-Part-Right'}>
                    {KGCourseHighSchooltwo.map((course) => {
                        return (
                            <div className={bool ? 'KG-Course-Part' : 'RA-Course-Part'} id='KG-HiddenPart' key={course.id}>
                                <div className='KG-Course-Info'>
                                    <img src={course.Image} alt='image-course-title'></img>
                                    <div>
                                        <p className='KG-Course-Text'>{course.text}</p>
                                        <div>
                                            {[...Array(5)].map((_, index) => (
                                                <FontAwesomeIcon
                                                    key={index}
                                                    icon={faStar}
                                                    className={index < ratings[course.id] ? 'KG-Star KG-Star-color' : 'KG-Star'}
                                                    onClick={() => handleRating(course.id, index + 1)}
                                                />
                                            ))}
                                        </div>
                                        <p className='KG-Course-Price'>{course.price}</p>
                                        <div className='KG-BG-Icon'>{course.IconShop}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
