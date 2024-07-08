
import React, { useEffect, useState } from 'react'
import './KGCourseDetailsPlayList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos';
import 'aos/dist/aos.css'
export default function KGCourseDetailsPlayList() {
  useEffect(()=>{
    Aos.init()
  },[])
    const videos = [
        {
           id : 1 ,
           url : './images/CourseDetails/CourseDetails-Hero/VideoEdu.mp4' ,
           text : "Maths-Introduction" ,
           time : '1:57 ' ,
            title: 'Video 1',
            IconLock : < FontAwesomeIcon icon={faLock}  className='KG-Clock-Icon' /> ,
          
       },
        {
           id : 2 ,
           url : './images/CourseDetails/CourseDetails-Hero/Video6.mp4' ,
           text : "Maths-for Standard 1 St.." ,
           time : '5:43 ' ,
          title: 'Video 2',
          IconLock : < FontAwesomeIcon icon={faLock}  className='KG-Clock-Icon' /> ,
       },
        {
           id : 3 ,
           url : './images/CourseDetails/CourseDetails-Hero/Video7.mp4' ,
           text : "Maths-for Standard 2 St.." ,
           time : '8:11 ',
            title: 'Video 3',
           IconLock : < FontAwesomeIcon icon={faLock}  className='KG-Clock-Icon' /> ,
       },
        {
           id : 4 ,
           url : './images/CourseDetails/CourseDetails-Hero/Video3.mp4' ,
           text : "Maths-for Standard 3 St.." ,
           time : '6:10 ' ,
           IconLock : < FontAwesomeIcon icon={faLock}  className='KG-Clock-Icon' /> ,
            title: 'Video 4',
       },
        {
           id : 5 ,
           url : './images/CourseDetails/CourseDetails-Hero/Video6.mp4' ,
           text : "Maths-for Standard 4 St.." ,
           time : '10:00 ' ,
           IconLock : < FontAwesomeIcon icon={faLock}  className='KG-Clock-Icon' /> ,
          title: 'Video 5',

        },
        {
           id : 6 ,
           url : './images/CourseDetails/CourseDetails-Hero/Video5.mp4' ,
           text : "Maths-for Standard 5 St.." ,
           time : '7:53 ' ,
           IconLock : < FontAwesomeIcon icon={faLock}  className='KG-Clock-Icon' /> ,
            title: 'Video 6',
       },
    ];

    const [mainVideo, setMainVideo] = useState(videos[0]);
    // const [state, setState] = useState(true);

    const handleVideoClick = (video) => {
      setMainVideo(video);
    };
    

    
    const [openVideo, setOpenVideo] = useState(null);

    function toggleVideo(id) {
      setOpenVideo(openVideo === id ? null : id);
    }




    const MainVideo = ({ video }) => {
          return (
            <div>
                <div className='KG-Details-PartLeft' data-aos="fade-right" data-aos-duration="3000" data-aos-easing="ease-out-cubic">
                <p className='KG-Details-Path'>Home | Courses | <span className='KG-Path-Span'>Course Details</span></p>
                <iframe width="560" height="315" src={video.url} title={video.title} allowFullScreen></iframe>
                <p className='KG-Details-Video'>{video.text}</p>
              </div>
            </div>
          );
        };
        const VideoList = ({ handleVideoClick }) => {
          return (  
            <div className='KG-Details-PartRight'>
            <h3 className='KG-Title-PlayList' data-aos="fade-down" data-aos-duration="3000" data-aos-easing="ease-out-cubic">Course Playlist</h3>
            { videos.map((video) => {
                return (
                    <div className={openVideo === video.id ? 'KG-Visible' : 'KG-Hidden'} key={video.id} onClick={() => handleVideoClick(video)}>
                      <div className='KG-PlayList' onClick={() => toggleVideo(video.id)} data-aos="fade-down" data-aos-duration="3000" data-aos-easing="ease-out-cubic">
                        <video src={video.url}></video>
                        <div>
                            <p className='KG-Details-CardInfo-Text'>{video.text}</p>
                            <p className='KG-Details-CardInfo-Time' >{video.time}</p>
                        </div>
                        <div className={openVideo === video.id ? 'KG-BG-Clock-Icon-Hidden' : 'KG-BG-Clock-Icon'}> {video.IconLock} </div>
                      </div>
                    </div>
                );
            })}
            </div>
          );
        };
 

  return (
    <section className='KG-Section-Hero'>
      <MainVideo video={mainVideo} />
      <VideoList handleVideoClick={handleVideoClick} />
      </section>
  );
}
