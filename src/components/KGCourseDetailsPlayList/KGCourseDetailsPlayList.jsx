import React from 'react'
import './KGCourseDetailsPlayList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

export default function KGCourseDetailsPlayList() {
    const KGCourseDetailsPlayList = [
        {
            id: 1,
            Image: './public/images/CourseDetails/CourseDetails-Hero/Image.svg',
            text: "Maths-Introduction",
            time: '1:57 '
        },
        {
            id: 2,
            Image: './public/images/CourseDetails/CourseDetails-Hero/Image.svg',
            text: "Maths-for Standard 3 St..",
            time: '5:43 '
        },
        {
            id: 3,
            Image: './public/images/CourseDetails/CourseDetails-Hero/Image.svg',
            text: "Maths-for Standard 3 St..",
            time: '8:11 ',
            IconLock: < FontAwesomeIcon icon={faLock} className='KG-Clock-Icon' />,
        },
        {
            id: 4,
            Image: './public/images/CourseDetails/CourseDetails-Hero/Image.svg',
            text: "Maths-for Standard 3 St..",
            time: '6:10 ',
            IconLock: < FontAwesomeIcon icon={faLock} className='KG-Clock-Icon' />,
        },
        {
            id: 5,
            Image: './public/images/CourseDetails/CourseDetails-Hero/Image.svg',
            text: "Maths-for Standard 3 St..",
            time: '10:00 ',
            IconLock: < FontAwesomeIcon icon={faLock} className='KG-Clock-Icon' />,

        },
        {
            id: 6,
            Image: './public/images/CourseDetails/CourseDetails-Hero/Image.svg',
            text: "Maths-for Standard 3 St..",
            time: '7:53 ',
            IconLock: < FontAwesomeIcon icon={faLock} className='KG-Clock-Icon' />,
        },
    ];
    return (
        <>
            <section className='KG-Section-Hero'>
                <div className='KG-Details-PartLeft'>
                    <p className='KG-Details-Path'>Home | Courses | <span className='KG-Path-Span'>Course Details</span></p>
                    <video controls>
                        <source src='./public/images/CourseDetails/CourseDetails-Hero/VideoEdu.mp4' type='video/mp4'></source>
                    </video>
                    <p className='KG-Details-Video'>Maths - for Standard 3 Students | Episode 2</p>
                </div>
                <div className='KG-Details-PartRight'>
                    <h3 className='KG-Title-PlayList'>Course Playlist</h3>
                    {KGCourseDetailsPlayList.map((details) => {
                        return (
                            <div className='KG-PlayList' key={details.id}>
                                <img src={details.Image} alt='image-course-title'></img>
                                <div>
                                    <p className='KG-Details-CardInfo-Text'>{details.text}</p>
                                    <p className='KG-Details-CardInfo-Time' >{details.time}</p>
                                </div>
                                <div className='KG-BG-Clock-Icon'> {details.IconLock} </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    )
}
