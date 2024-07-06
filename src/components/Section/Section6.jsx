import "./Section6.css";
import img1 from './../../../public/images/Home/Home-section7/Ellipse-2.svg'
import img2 from './../../../public/images/Home/Home-section7/Ellipse-4.svg'
import img3 from './../../../public/images/Home/Home-section7/Ellipse-7.svg'
import img4 from './../../../public/images/Home/Home-section7/Ellipse-1.svg'
import img5 from './../../../public/images/Home/Home-section7/Ellipse-6.svg'
import img6 from './../../../public/images/Home/Home-section7/Ellipse-3.svg'
export default function Section6() {
  return (
    <>
      <section className="RA-section6-homepage" >
        <div className="BKH-section-6"  data-aos="fade-left" data-aos-duration="3000" data-aos-easing="ease-out-cubic">
          <div className="BKH-section-join">
            {/*images part 1*/}
            <div className="BKH-images-1">
              <img className="img1-part-1" src={img1} alt="img-1-part-1" />
              <img className="img2-part-1" src={img2} alt="img-2-part-1" />
              <img className="img3-part-1" src={img3} alt="img-3-part-1"
              />
            </div>
            {/*images part 1*/}

            {/* content */}
            <div className="BKH-content">
              <div className="BKH-text-main">
                <h1>Subscribe For Get Update Every New Courses</h1>
              </div>
              <h4 className="BKH-text-sub">20k+ students daily learn with Eduvi. Subscribe for new courses.</h4>
              <div className="BKH-joining">
                <form action="">
                  <input className="BKH-input-1" type="email" placeholder="enter your email" />
                  <input className="BKH-input-2" type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
            {/* content */}

            {/*images part 2*/}
            <div className="BKH-images-1">
              <img className="img1-part-2" src={img4} alt="img-1-part-2" />
              <img className="img2-part-2" src={img5} alt="img-2-part-2" />
              <img className="img3-part-2" src={img6} alt="img-3-part-2" />
            </div>
            {/*images part 2*/}
          </div>
        </div>
      </section>
    </>
  );
}
