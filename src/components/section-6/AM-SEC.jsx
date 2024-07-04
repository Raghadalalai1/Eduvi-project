
import "./AM-SEC.css";
import imgv from './../../../public/images/Home/Home-section6/male.png'
import { Link } from "react-router-dom";
function AMSEC() {
  return (
    <section>
      <div className="AM-content1">



        <div className="AM-ph2">
          <img src={imgv} alt="Sorry, the photo wasn't uploaded " /></div>

        <div className="AM-container2">
          <h1>Want to share your knowledge ? Join Us a Mentor</h1>
          <p>
            High-definition video is video of higher resolution and quality than
            standard-definition. While there is no standardized meaning for
            high-definition, generally any video.
          </p>
          <Link to={'/OurMonetors'}>  <button type="submit">Career Information</button></Link>
          <Link to={'/BecomeAnInstructor'}>  <button type="submit" className="RA-APLLAY">Applay now</button></Link>
          
        </div>
      </div>
      <div className="Metropolis-font"></div>
    </section>
  );
}

export default AMSEC;
