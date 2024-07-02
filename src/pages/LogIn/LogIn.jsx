import React from "react";
import "./LogIn.css";
import LogInPopup from "../../components/LogInPopup/LogInPopup";

import icon from "../../../public/images/LogIn/checkbox.svg";


export default function LogIn() {
  const last = [<div className='RA-check-password' >
    <div className='RA-KEEP'>
      <img src={icon} />

      <p className='RA-PARAGHRAPH'>keep me signed in</p>
    </div>
    <p className='ra-FORGER'>Forgot password?</p>

  </div>]

  return (
    <div className="RRA-LOG">
      <LogInPopup last={last} bool1={true} />


    </div>
  );
}