
import "./AM-SEC.css";
import imgu from './../../../public/images/Home/Home-section6/ImageYoung.png'
function AMSEC() {
  return (
    <section>
      <div className="AM-content1" >



        <div className="AM-ph2">
          <img src={imgu} alt="Sorry, the photo wasn't uploaded " />
        </div>

        <div className="AM-container2" >
          <h1 data-aos="fade-right" >Want to share your knowledge ? Join Us a Mentor</h1>
          <p data-aos="fade-right" >
            High-definition video is video of higher resolution and quality than
            standard-definition. While there is no standardized meaning for
            high-definition, generally any video.
          </p>
          <button type="submit" >Career Information</button>
        </div>
      </div>
      {/* <div className="Metropolis-font"></div> */}
    </section>
  );
}

export default AMSEC;
