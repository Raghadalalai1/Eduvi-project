import React from 'react'
import './KGSingleMentor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function KGSingleMentor() {
  return (
    < >
        <div className='KG-Sigle-Mentor-Hero'>
            <p className='KG-Single-Path'>Home | Mentor | <span> Kristin Watson </span></p>
        </div>

            <div className='KG-Single-Mentor-LeftPart'>
                <div className='KG-Single-Mentor-Second'>
                    <div className='KG-Single-Mentor-Part1'>
                        <img src='./public/images/SingleMentorDetails/SingleMentor-Hero/mentor.svg' alt='KG-Image-Single-Hero'></img>
                        <div className='KG-Single-Part-Name'>
                            <h4 className='KG-Single-Name'>Kritsin Watson</h4>
                            <p className='KG-Single-Paraghraph1'>Founder & Mentor</p>
                        </div>
                    </div>
                    <div className='KG-Single-Part2'>
                        <button className='KG-Single-Button'>Contact Now</button>
                        <div className='KG-Single-Card'>
                            <div className='KG-Single-Card-AllParts'>
                                <p className='KG-Single-Card-LeftPart'>Total Course</p>
                                <p className='KG-Single-Number'>30</p>
                            </div>
                            <div className='KG-Single-Card-AllParts'>
                                <p className='KG-Single-Card-LeftPart'>Ratings</p>
                                <p>
                                    < FontAwesomeIcon icon={faStar} className='KG-Single-Single'/>
                                    <span className='KG-Single-Card-Info-Rating'> 4.9( <span className='KG-Single-Number2'>153</span>)</span>
                                </p>
                            </div>
                            <div className='KG-Single-Card-AllParts'>
                                <p className='KG-Single-Card-LeftPart'>Experiences</p>
                                <p className=' KG-Single-Card-RightPart'>10 Years</p>
                            </div>
                            <div className='KG-Single-Card-AllParts'>
                                <p className='KG-Single-Card-LeftPart'>Grauduated</p>
                                <p className='KG-Single-Card-RightPart'>Yes</p>
                            </div>
                            <div className='KG-Single-Card-AllParts'>
                                <p className='KG-Single-Card-LeftPart'>Language</p>
                                <p className='KG-Single-Card-RightPart'>English, French</p>
                            </div>
                            <div className='KG-Single-Card-AllParts'>
                                <p className='KG-Single-Card-LeftPart'>Social</p>
                                <div className='KG-Single-Social'>
                                    <div><FontAwesomeIcon icon={faFacebookF} className='KG-Single-Social-Icon'/></div>
                                    <div><FontAwesomeIcon icon={faInstagram} className='KG-Single-Social-Icon' /></div>
                                    <div><FontAwesomeIcon icon={faTwitter} className='KG-Single-Social-Icon' /></div>
                                    <div><FontAwesomeIcon icon={faLinkedin} className='KG-Single-Social-Icon' /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='KG-Single-BottomPart'>
                    <div className='KG-Single-Collection-Buttons'>
                        <button>About</button>
                        <button>Review</button>
                        <button>Course</button>
                    </div>
                    <div className='KG-Single-About'>
                        <h3 className='KG-Single-InfoName'>About Kritsin</h3>
                        <p className='KG-Single-InfoParagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
                        </p>
                    </div>
                    <div>
                        <h3 className='KG-Single-InfoName'>Certification</h3>
                        <p className='KG-Single-InfoParagraph'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
        </div>

    </>

  )
}
