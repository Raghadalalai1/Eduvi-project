import React from 'react'
import './LogInPopup.css'
import Carousel from 'react-bootstrap/Carousel';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
// import { faEnvelope} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faEye, faLock } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faEye, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
export default function LogInPopup() {
    return (
        <div className='RA-LogInPopup'>
            <div className='RA-parent-LogInPopup'>
                <div className='RA-part1-login'>
                    <img src="./images/Home/Home-Footer/Logo.svg" alt="logo" className='RA-logologin' />
                    <h2 className='RA-titel-login'>Welcome to
                        Eduvi Online
                        Learning Platform</h2>
                    <Carousel className='slider'>
                        <Carousel.Item className='RA-slider'>
                            <img src="./images/LogIn/login.svg" alt="HELOO" className='RA-slier-img  d-block ' />

                        </Carousel.Item>
                        <Carousel.Item className='RA-slider'>
                            <img src="./images/LogIn/login.svg" alt="HELOO" className='RA-slier-img d-block' />

                        </Carousel.Item>
                        <Carousel.Item className='RA-slider'>

                            <img src="./images/LogIn/login.svg" alt="HELOO" className='RA-slier-img d-block' />
                        </Carousel.Item>
                    </Carousel>

                </div>
                <div className='part2'>
                    <form action="" className='RA-login-form' >
                        <div className='ra-CONTANAIR'>

                            <div className='RA-GOOGLE-ICON'>
                                <FontAwesomeIcon icon={faGooglePlusG} className='Ra-icon' style={{ color: "#ffffff", fontSize: '24px' }} />

                            </div>
                            <input type="text" placeholder='Sign in with google' className='RA-gool' />



                        </div>
                        <div className='HS-Paragraph'>
                        <p className='RA-signin'>Or signin with your email</p>
                        </div>
                        <div className='RA-JOIN'>
                            <label>Email</label>
                            
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#5d5a6f", }} className='RA-letter' />
                                  <input type="email" placeholder='bill.sanders@example.com' className='RA-email-input'/>
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#5d5a6f", }} className='RA-letter' />   
                                <input type="email" placeholder='bill.sanders@example.com' className='RA-email-input'/>

                        </div>
                        <div className='RA-JOIN1'>
                            <label>Password</label>
                             
                              <FontAwesomeIcon icon={faLock} style={{ color: "#5d5a6f", }} className='RA-lock' />
                                  <input type="password" placeholder='***********' className='RA-email-input'/>
                                  <FontAwesomeIcon icon={faEye} style={{ color: "#5d5a6f", }}   className='RA-eye' />
                             
                        </div>
                        <input type="submit" value={'sign in'} className='RA-button-form' />
                        <div className='RA-check-password' >
                        <div className='RA-KEEP'>
                        <FontAwesomeIcon icon={faSquareCheck} style={{color: "#9C4DF4" , fontSize:'20px'}}/>
                        <p className='RA-PARAGHRAPH'>keep me signed in</p>
                        </div>
                        <p className='ra-FORGER'>Forgot password?</p>

                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}
