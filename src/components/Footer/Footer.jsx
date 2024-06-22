import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='LK-footer d-flex align-items-start justify-content-B'>
     <div className="LK-footer-son1">
      <img className='LK-footer-img' src="./images/Home/Home-Footer/Logo.svg" alt='eduvi logo'/>
      <div className='LK-footer-icon d-flex align-items-center justify-content-start'>
      <div className='LK-footer-father-icon2'><FontAwesomeIcon className='LK-footer-icon1' icon={faFacebookF} /></div>
      <div className='LK-footer-father-icon2'><FontAwesomeIcon className='LK-footer-icon1' icon={faInstagram} /></div>
      <div className='LK-footer-father-icon2'><FontAwesomeIcon className='LK-footer-icon1' icon={faTwitter} /></div>
      <div className='LK-footer-father-icon2'><FontAwesomeIcon className='LK-footer-icon1' icon={faLinkedin} /></div>
      </div>
      <div className='LK-footer-par'>
        <p className='LK-footer-par-son1'>©2021 Eduvi.co</p>
        <p className='LK-footer-par-son2 Metropolis-font'>Eduvi is a registered
        trademark of Eduvi.co</p>
      </div>     
     </div>
     <div className="LK-footer-son2">
        <h4 className='LK-footer-h4'>Courses</h4>
        <ul className="LK-footer-ul Metropolis-font">
        <li className="LK-footer-li">Classroom courses</li>
        <li className="LK-footer-li">Virtual classroom courses</li>
        <li className="LK-footer-li">E-learning courses</li>
        <li className="LK-footer-li">Video Courses</li>
        <li className="LK-footer-li">Offline Courses</li></ul>
        
        
        
     </div>
     <div className="LK-footer-son3">
     <h4 className='LK-footer-h4'>Community</h4>
        <ul className="LK-footer-ul Metropolis-font">
        <li className="LK-footer-li">Learners</li>
        <li className="LK-footer-li">Parteners</li>
        <li className="LK-footer-li">Developers</li>
        <li className="LK-footer-li">Transactions</li>
        <li className="LK-footer-li">Blog</li>
        <li className="LK-footer-li">Teaching Center</li>
        </ul>
     </div>
     <div className="LK-footer-son4 ">
     <h4 className='LK-footer-h4'>Quick links</h4>
        <ul className="LK-footer-ul Metropolis-font">
        <li className="LK-footer-li">Home</li>
        <li className="LK-footer-li">Professional Education</li>
        <li className="LK-footer-li">Courses</li>
        <li className="LK-footer-li">Admissions</li>
        <li className="LK-footer-li">Testimonial</li>
        <li className="LK-footer-li">Programs</li>
        </ul>
     </div>
     <div className="LK-footer-son5">
     <h4 className='LK-footer-h4'>More</h4>
        <ul className="LK-footer-ul Metropolis-font">
        <li className="LK-footer-li">Press</li>
        <li className="LK-footer-li">Investors</li>
        <li className="LK-footer-li">Terms</li>
        <li className="LK-footer-li">Privacy</li>
        <li className="LK-footer-li">Help</li>
        <li className="LK-footer-li">Contact</li>
        </ul>
     </div>
    </div>
  )
}
