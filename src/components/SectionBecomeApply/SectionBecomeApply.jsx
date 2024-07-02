import "./SectionBecomeApply.css";
import icon from "../../../public/images/LogIn/checkbox.svg";
import img from "../../../public/images/SignUp/Outline.svg";
import LogInPopup from '../LogInPopup/LogInPopup';
import { useState } from "react";
export default function SectionBecomeApply() {
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
      <section className="BKH-section">

        {/* قسم الصورة  */}
        <div className="BKH-image">
          <img
            src="../../../public/images/BecomeAnInstructor/BecomeAnInstructor-Section1/Image.svg"
            alt="Photo section one"
          />
        </div>
        {/* قسم الصورة  */}

        {/* قسم النصوص الكلي  */}
        <div className="BKH-text-all">
          {/*  قسم الأول النص الرئيسي والفرعي  */}
          <div className="BKH-part-one">
            <h1>Apply As Instructor</h1>
            <p>
              Teaching is a vital and admirable career. As such, it comes with
              quite a bit of responsibility, both in practice and in
              preparation with many skills required to be a teacher. The
              following steps provide a general breakdown of the requirements
              for teachers:
            </p>
          </div>
          {/*  قسم الأول النص الرئيسي والفرعي  */}

          {/*   قسم الثاني للنصوص والقائمة   */}
          <div className="BKH-part-two">
            <div className="BKH-span">
              <p className="BKH-span-one">Intstructor Requirements</p>
              <p className="BKH-span-two">Instructor Rules</p>
            </div>
            <div className="BKH-unordered-list">
              <ul className="BKH-unordered">
                <li>An undergraduate degree</li>
                <li>Participate in supervised teaching</li>
                <li>State teaching license</li>
                <li>Purse graduate studies</li>
              </ul>
            </div>
            {/* قسم النصوص الكلي  */}

            {/* قسم الزر  */}
            <div className="BKH-input-submit">
              <form action="#">
                <input type="submit" value="Apply Now" onClick={() => setshowPopUp1(!showPopUp1)} />
                {showPopUp && <div className='RA-SHOW1'><LogInPopup name={name} agreed={agreed} last1={last1} bool1={false} showPopUp={showPopUp} showPopUp1={showPopUp1} setshowPopUp={setshowPopUp} setshowPopUp1={setshowPopUp1} /></div>}
              </form>
            </div>
            {/* قسم الزر  */}
          </div>
          {/*  قسم الثاني للنصوص والقائمة  */}
        </div>
        {/* قسم النصوص الكلي  */}

      </section>
    </>
  );
}
