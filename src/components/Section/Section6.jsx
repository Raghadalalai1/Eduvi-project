import "./Section6.css";

export default function Section6() {
  return (
    <>
      <section className="RA-section6-homepage">
        <div className="BKH-section-6">
          <div className="BKH-section-join">
            {/*images part 1*/}
            <div className="BKH-images-1">
              <img className="img1-part-1" src="../../public/images/Home/Home-section7/Ellipse-2.svg" alt="img-1-part-1" />
              <img className="img2-part-1" src="../../public/images/Home/Home-section7/Ellipse-4.svg" alt="img-2-part-1" />
              <img className="img3-part-1" src="../../public/images/Home/Home-section7/Ellipse-7.svg" alt="img-3-part-1"
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
              <img className="img1-part-2" src="../../public/images/Home/Home-section7/Ellipse-1.svg" alt="img-1-part-2" />
              <img className="img2-part-2" src="../../public/images/Home/Home-section7/Ellipse-6.svg" alt="img-2-part-2" />
              <img className="img3-part-2" src="../../public/images/Home/Home-section7/Ellipse-3.svg" alt="img-3-part-2" />
            </div>
            {/*images part 2*/}
          </div>
        </div>
      </section>
    </>
  );
}
