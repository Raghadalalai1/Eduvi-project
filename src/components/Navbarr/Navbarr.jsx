import React from 'react'
import './Navbarr.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faCircleUser} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Navbarr() {
  return (
    <Navbar collapseOnSelect expand="lg" className="KG-Navbar Metropolis-font ">
      <Navbar.Brand href="#home">
        <img src='./images/Home/Home-Navbar/Logo.svg' alt='eduvi logo'></img>
      </Navbar.Brand>
      <Nav className='KG-Sign-inUp order-lg-2 ms-auto'>
        <Nav.Link href="/login" className='pe-4 ps-0 d-flex align-items-center'>
          Log In <FontAwesomeIcon icon={faCircleUser} className='KG-SignInUpIcon  ' />
        </Nav.Link>
        <Nav.Link href="/signup" className='pe-lg-0 pe-md-4 ps-0 d-flex align-items-center '>
          Sign Up<FontAwesomeIcon icon={faCircleUser} className='KG-SignInUpIcon ' /> 
        </Nav.Link>
      </Nav>
      <p className='d-lg-none d-sm-block m-2 pb-2 mb-0'>Menu</p>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto KG-Links ">
          <Nav.Link href="/shope" className='ps-0'>shop</Nav.Link>
          <NavDropdown title="For Kindergarten" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">option1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">option2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">option3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="For High School" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">option1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">option2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">option3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="For College" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">option1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">option2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">option3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Courses" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">option1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">option2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">option3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Regestering" id="collapsible-nav-dropdown" className='show-registering'>
            <NavDropdown.Item href="#action/3.1">Sign Up <FontAwesomeIcon icon={faCircleUser} className='KG-SignInUpIcon color-icon' /> </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Log In  <FontAwesomeIcon icon={faCircleUser} className='KG-SignInUpIcon  color-icon' /></NavDropdown.Item>
          </NavDropdown>
          <Nav className='KG-Sign-inUp-hidden '>
            <Nav.Link href="/login" className='d-flex' >
              Log In <FontAwesomeIcon icon={faUser} className='KG-SignInUpIcon' />
            </Nav.Link>
            <Nav.Link href="/signup" className='d-flex'>
              Sign Up<FontAwesomeIcon icon={faUser} className='KG-SignInUpIcon' /> 
            </Nav.Link>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
