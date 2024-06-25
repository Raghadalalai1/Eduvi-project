import React from 'react'
import './HSSectionInstructor.css'
import pluse from './../../../public/images/SingleMentorDetails/SingleMentor-Hero/Pattern(1).svg'

export default function HSSectionInstuctor() {
  return (
    <div className='HS-Instructor'>
      <div className='HS-Instructor-section2'>
   
     
      <div className='HS-Instructor-h2'>
      <h2 >How to apply to join as instructor</h2>
      </div>
      <div className='HS-Instructor-son'>
      <img  className='HS-Instructor-son-img-plus' src={pluse} alt='plus'/>
      </div>
     
      <div className='HS-Instructor-son2'>
        <div className='HS-Instructor-son2-video'>
          <video controls  className='HS-video' >
            
            <source className='HS-V'   src='./public/images/singleMentorDetails/SingleMentor-Hero/video.mp4' type='video/mp4'></source>
          </video>

        </div>
        
      </div>
      </div>
      
     
     
    </div>
  )
}
