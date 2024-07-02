import React from "react";
import LogInPopup from "../../components/LogInPopup/LogInPopup";
import img from "../../../public/images/SignUp/Outline.svg";
import Navbarr from "../../components/Navbarr/Navbarr";
import icon from "../../../public/images/LogIn/checkbox.svg";
import "./SignUp.css";

export default function SignUp() {
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
    <div >
      <LogInPopup name={name} agreed={agreed} last1={last1} bool1={false} />
    </div>
  );
}
