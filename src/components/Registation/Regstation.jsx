import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Regstation.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import icon from "../../../public/images/LogIn/checkbox.svg";
import img from "../../../public/images/SignUp/Outline.svg";
import LogInPopup from '../LogInPopup/LogInPopup';



export default function Registation() {
  const [showPopUp, setshowPopUp] = useState(false)
  const [showPopUp1, setshowPopUp1] = useState(false)
  const last = [<div className='RA-check-password' >
    <div className='RA-KEEP'>
      <img src={icon} />

      <p className='RA-PARAGHRAPH'>keep me signed in</p>
    </div>
    <p className='ra-FORGER'>Forgot password?</p>

  </div>]

  const name = [
    <div className="RA-JOIN">
      <label>Full name</label>

      <img src={img} alt="icon" className="RA-letter" />
      <input
        type="email"
        placeholder="Esther Howard"
        className="RA-email-input"
      />
    </div>,
  ];
  const last1 = [
    <p>
      Alreay have account?<span className="HS-sign-Span">Sign in</span>{" "}
    </p>,
  ];
  const agreed = [
    <div className="RA-KEEP HS-paragraph">
      <img src={icon} />
      <p className="RA-PARAGHRAPH ">I agreed to the<span className="HS-sign-Span2"> Terms & Conditions </span></p>
    </div>,
  ];
  return (
    <>
      <div className=' HS-Regst '>

        <div className=' HS-Regst-left'>
          <Button className='HS-Regst-button' variant="secondary">College Level</Button>
          <div className='HS-Regst-title'>
            <h1 className='HS-Regst-h1' >Don’t waste time in
              COVID-19 pandemic.
              Develop your skills.</h1>
            <p className='HS-Regst-pargraph'>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized
              meaning for high-definition, generally any video.</p>
          </div>
          <Button className='HS-Regst-button2' variant="secondary" onClick={() => setshowPopUp1(!showPopUp1)}>Registation Now</Button>
          {showPopUp1 && <div className='RA-SHOW'><LogInPopup bool1={true} last={last} showPopUp={showPopUp} showPopUp1={showPopUp1} setshowPopUp={setshowPopUp} setshowPopUp1={setshowPopUp1} /></div>}
        </div>

        <div className='HS-Regst-Right'>


          <img className='student-image' src="./images/Home/Home-section5/section5-Image.png" alt='Sorry , the photo wasn`t uploaded '></img>


        </div>
        <div className='HS-icon1'>
          <img src="./images/Home/Home-section5/azcoffe.png" alt='Sorry , the photo wasn`t uploaded ' />
        </div>
        <div className='HS-icon2'>
          <img src="./images/Home/Home-section5/php.png" alt='Sorry , the photo wasn`t uploaded ' />
        </div>
        <div className='HS-icon3'>
          <img src="./images/Home/Home-section5/html.png" alt='Sorry , the photo wasn`t uploaded ' />
        </div>

      </div>



    </>
  )
}
