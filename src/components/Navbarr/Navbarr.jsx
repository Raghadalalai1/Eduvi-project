import React, { useState } from 'react'
import './Navbarr.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img from "../../../public/images/SignUp/Outline.svg";
import icon from "../../../public/images/LogIn/checkbox.svg";
import icon1 from "../../../public/images/Home/Home-Navbar/Logo.svg";
import LogInPopup from '../LogInPopup/LogInPopup';
import { Link } from 'react-router-dom';
export default function Navbarr() {
  const [showPopUp, setshowPopUp] = useState(false)
  const [showPopUp1, setshowPopUp1] = useState(false)
  // function HandleShowAndHidden () {
  //   setShowPopUp(!showPopUp)
  // }
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

  // function HandleShowAndHidden1 () {
  //   setShowPopUp1(!showPopUp1)

  // }


  // const [showhiddenPopUp , setShowhiddenPopUp] =useState(true)
  // function HandleShowAndHiddenPop () {
  //     setShowhiddenPopUp(!showhiddenPopUp)
  // }
  return (
    <Navbar collapseOnSelect expand="lg" className="KG-Navbar Metropolis-font ">
      <Link to={'/'} className=' RA-Link-logo' > <img src={icon1} alt='eduvi logo'></img></Link>
      {/* <Navbar.Brand href="#home">
        
        <img src='./images/Home/Home-Navbar/Logo.svg' alt='eduvi logo'></img>
      </Navbar.Brand> */}
      <Nav className='KG-Sign-inUp order-lg-2 ms-auto'>
        <Nav.Link href="#" className='pe-4 ps-0 d-flex align-items-center' onClick={() => setshowPopUp1(!showPopUp1)}>
          Log In <FontAwesomeIcon icon={faCircleUser} className='KG-SignInUpIcon  ' />
        </Nav.Link>
        {showPopUp1 && <div className='RA-SHOW'><LogInPopup bool1={true} last={last} showPopUp={showPopUp} showPopUp1={showPopUp1} setshowPopUp={setshowPopUp} setshowPopUp1={setshowPopUp1} /></div>}
        <Nav.Link href="#" className='pe-lg-0 pe-md-4 ps-0 d-flex align-items-center ' onClick={() => setshowPopUp(!showPopUp)} >
          Sign Up<FontAwesomeIcon icon={faCircleUser} className='KG-SignInUpIcon ' />
        </Nav.Link>
        {showPopUp && <div className='RA-SHOW1'><LogInPopup name={name} agreed={agreed} last1={last1} bool1={false} showPopUp={showPopUp} showPopUp1={showPopUp1} setshowPopUp={setshowPopUp} setshowPopUp1={setshowPopUp1} /></div>}
      </Nav>
      <p className='d-lg-none d-sm-block m-2 pb-2 mb-0'>Menu</p>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto KG-Links ">
          <Link to={'/shope'} className='ps-0  RA-Link' >shop</Link>
          <NavDropdown title="For Kindergarten" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#">option1</NavDropdown.Item>
            <NavDropdown.Item href="#">option2</NavDropdown.Item>
            <NavDropdown.Item href="#">option3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="For High School" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#">option1</NavDropdown.Item>
            <NavDropdown.Item href="#">option2</NavDropdown.Item>
            <NavDropdown.Item href="#">option3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="For College" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#">option1</NavDropdown.Item>
            <NavDropdown.Item href="#">option2</NavDropdown.Item>
            <NavDropdown.Item href="#">option3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Courses" id="collapsible-nav-dropdown">
          <Link to={'/courses'} className='ps-0 RA-linkitem'>Courses</Link>
          <Link to={'/CoursesDetalis'} className='ps-0 RA-linkitem'>Courses Detalis</Link>
            {/* <NavDropdown.Item href="/courses">Courses</NavDropdown.Item>
            <NavDropdown.Item href="/CoursesDetalis">Courses Detalis</NavDropdown.Item> */}

          </NavDropdown>
          <NavDropdown title="Regestering" id="collapsible-nav-dropdown" className='show-registering '>
            <NavDropdown.Item href="#" onClick={() => setshowPopUp(!showPopUp1)}> Sign Up <FontAwesomeIcon icon={faCircleUser} className='KG-SignInUpIcon color-icon ' /> </NavDropdown.Item>
            {showPopUp && <div className='RA-SHOW1'><LogInPopup name={name} agreed={agreed} last1={last1} bool1={false} showPopUp={showPopUp} showPopUp1={showPopUp1} setshowPopUp={setshowPopUp} setshowPopUp1={setshowPopUp1} /></div>}

            <NavDropdown.Item href="#" onClick={() => setshowPopUp1(!showPopUp1)}>Log In  <FontAwesomeIcon icon={faCircleUser} className='KG-SignInUpIcon  color-icon' /></NavDropdown.Item>
            {/* {showPopUp && <div className='RA-SHOW'><LogInPopup bool1={true} last={last}/></div> } */}
            {showPopUp1 && <div className='RA-SHOW'><LogInPopup bool1={true} last={last} showPopUp={showPopUp} showPopUp1={showPopUp1} setshowPopUp={setshowPopUp} setshowPopUp1={setshowPopUp1} /></div>}
          </NavDropdown>
          <Nav className='KG-Sign-inUp-hidden '>
            <Nav.Link href="#" className='d-flex' onClick={() => setshowPopUp1(!showPopUp1)}>
              Log In <FontAwesomeIcon icon={faUser} className='KG-SignInUpIcon' />
            </Nav.Link>
            {showPopUp1 && <div className='RA-SHOW'><LogInPopup bool1={true} last={last} showPopUp={showPopUp} showPopUp1={showPopUp1} setshowPopUp={setshowPopUp} setshowPopUp1={setshowPopUp1} /></div>}
            <Nav.Link href="#" className='d-flex' onClick={() => setshowPopUp(!showPopUp1)}>
              Sign Up<FontAwesomeIcon icon={faUser} className='KG-SignInUpIcon' />
            </Nav.Link>
            {showPopUp && <div className='RA-SHOW1'><LogInPopup name={name} agreed={agreed} last1={last1} bool1={false} showPopUp={showPopUp} showPopUp1={showPopUp1} setshowPopUp={setshowPopUp} setshowPopUp1={setshowPopUp1} /></div>}
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
