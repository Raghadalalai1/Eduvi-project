import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './LK-Home-section2.css'
import { faAngleUp, faCirclePlay, faPhone, faPlay, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import LKGirl from './../../../public/images/Home/Home-section3/littlegirl.svg'
import live from './../../../public/images/Home/Home-section3/live-streaming 1.svg'
import pluse from './../../../public/images/Home/Home-section3/PatternRed.svg'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css'
export default function LKHomeSection2() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
      <section className='LK-home-section2 Metropolis-font1'    >
        <div className='LK-home-section2-father'>
          <div className='LK-home-section2-son1 ' >
            <h2 className='LK-home-section2-son1-h2' data-aos="fade-down" data-aos-duration="3000" data-aos-easing="ease-out-cubic">High quality video, audio
              & live classes</h2>
            <p className='LK-home-section2-son1-par' data-aos="fade-down" data-aos-duration="3000" data-aos-easing="ease-out-cubic">High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video image with considerably more than
              480 vertical scan lines or 576 vertical lines is considered high-definition.</p>
          </div>
          <div className='LK-home-section2-son2 '  data-aos="fade-right" data-aos-duration="3000" data-aos-easing="ease-out-cubic">

            <div className='LK-home-sec2-son2-father-button ' > <Link to={'/courses'}> <button className='LK-home-section2-son1-button'>Visit Courses</button></Link></div>
            <div className='LK-home-sec2-img'>

              <img className='LK-home-section2-son2-img-up' src={pluse} alt='plus' />
            </div>
            <div className='LK-home-section2-son2-imges '>
              <div className='LK-home-section2-son2-img2'>
                <div className='LK-home-section2-son2-icons'>
                  <div className='LK-home-section2-son2-father-img3'><img className='LK-home-section2-son2-img3' src={LKGirl} alt='little_girl' /></div>
                  <div className='LK-home-section2-son2-Ficon1'><FontAwesomeIcon className='LK-home-section2-son2-icon1' icon={faPhone} />
                  </div>
                  <div className='LK-home-section2-son2-Ficon2'><FontAwesomeIcon className='LK-home-section2-son2-icon2' icon={faAngleUp} />
                  </div>
                </div>
              </div>

            </div>
          </div>


          <div className='LK-home-section2-son3' data-aos="fade-right" data-aos-duration="3000" data-aos-easing="linear" data-aos-offset="500">
            <div className='LK-home-section2-son3-P1' >
              <div className='LK-home-section2-son3-Ficon1'><FontAwesomeIcon className='LK-home-section2-son3-icon1' icon={faVolumeHigh} /></div>
              <button className='LK-home-section2-son3-button1 Metropolis-font'>Audio Classes</button>

            </div>
            <div className='LK-home-section2-son3-P1 '   >
              <div className='LK-home-section2-son3-Ficon2'>
                <img src={live} className='LK-home-section2-son3-icon2' />
              </div>
              <button className='LK-home-section2-son3-button1 Metropolis-font'>Live Classes</button>

            </div>
            <div className='LK-home-section2-son3-P1'  >
              <div className='LK-home-section2-son3-Ficon3'><FontAwesomeIcon className='LK-home-section2-son3-icon3' icon={faCirclePlay} /></div>
              <button className='LK-home-section2-son3-button1 Metropolis-font'>Recorded Class</button>

            </div>
          </div>
        </div>



      </section>


    </>

  )
}
