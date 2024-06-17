import React from 'react'
import './LogInPopup.css'
import Carousel from 'react-bootstrap/Carousel';

export default function LogInPopup() {
    return (
        <div className='RA-LogInPopup'>
            <div className='RA-parent-LogInPopup'>
                <div className='RA-part1-login'>
                    <img src="./images/Home/Home-Footer/Logo.svg" alt="logo" className='RA-logologin' />
                    <h2 className='RA-titel-login'>Welcome to
                        Eduvi Online
                        Learning Platform</h2>
                    <Carousel>
                        <Carousel.Item interval={1000} className='RA-slider'>
                            <img src="./images/LogIn/login.svg" alt="HELOO" className='RA-slier-img' />

                        </Carousel.Item>
                        {/* <Carousel.Item interval={500}>
                            <img src="./images/LogIn/login.svg" alt="HELOO" className='RA-slier-img'/>

                        </Carousel.Item> */}
                        {/* <Carousel.Item>

                            <img src="./images/LogIn/login.svg" alt="HELOO" className='RA-slier-img'/>
                        </Carousel.Item> */}
                    </Carousel>

                </div>
            </div>
        </div>
    )
}
