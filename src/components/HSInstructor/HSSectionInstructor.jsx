import React, { useEffect } from 'react'
import './HSSectionInstructor.css'
import pluse from './../../../public/images/SingleMentorDetails/SingleMentor-Hero/Pattern(1).svg'

import Aos from 'aos';
import 'aos/dist/aos.css'
export default function HSSectionInstuctor() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div className='HS-Instructor'>
      <div className='HS-Instructor-section2'>


        <div className='HS-Instructor-h2' data-aos="fade-down" data-aos-duration="3000" data-aos-easing="ease-out-cubic">
          <h2 >How to apply to join as instructor</h2>
        </div>
        <div className='HS-Instructor-son' data-aos="fade-left" data-aos-duration="3000" data-aos-easing="ease-out-cubic">
          <img className='HS-Instructor-son-img-plus' src={pluse} alt='plus' />
        </div>

        <div className='HS-Instructor-son2' data-aos="fade-left" data-aos-duration="3000" data-aos-easing="ease-out-cubic">
          <div className='HS-Instructor-son2-video'>
            <video controls className='HS-video' >

              <source className='HS-V' src='./public/images/singleMentorDetails/SingleMentor-Hero/video.mp4' type='video/mp4'></source>
            </video>

          </div>

        </div>
      </div>



    </div>
  )
}
