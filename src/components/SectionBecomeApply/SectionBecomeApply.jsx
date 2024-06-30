import "./SectionBecomeApply.css";
export default function SectionBecomeApply() {
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
                  <input type="submit" value="Apply Now" />
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
