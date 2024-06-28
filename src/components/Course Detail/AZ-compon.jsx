import "./AZ-compobn.css";
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function AZcompobn() {
  return (
    <>
      <div className="AZ-courseDetails-content1">
        <div className="AZ-courseDetails-container1">
          <div className="AZthe-firstpar1">
            <h1>Course Details</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis consectetur adipiscing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis consectetur adipiscing elit.
            </p>
          </div>
          <div className="AZthe-Secondpar1">
            <h1>Certification</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis consectetur adipiscing elit.
            </p>
          </div>
          <div className="AZthe-Therdpar1">
            <h1>Who this course is for</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis consectetur adipiscing elit.
            </p>
          </div>
          <div className="AZthe-fourtypar1">
            <h1>What you'll learn in this course:</h1>
            <ul>
              <li>lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            </ul>
          </div>
        </div>
        <div className="AZ-courseDetails-container2">
          <div className="AZ-corse-top">
            <div className="AZ-course-card1">
              <p>Price</p>
              <label>$49.00</label>
            </div>
            <div className="AZ-course-card2">
              <p>Instructor</p>
              <h5>Wade Warren</h5>
            </div>
            <div className="AZ-course-card3">
              <p>Ratings</p>
              <div className="AZ-cours-stars">
              <FontAwesomeIcon icon={faStar} style={{color:'var(--clr-stars)'}} />
              <FontAwesomeIcon icon={faStar} style={{color:'var(--clr-stars)'}}/>
              <FontAwesomeIcon icon={faStar} style={{color:'var(--clr-stars)'}}/>
              <FontAwesomeIcon icon={faStar}  style={{color:'var(--clr-stars)'}}/>
              <FontAwesomeIcon icon={faStar}  style={{color:'var(--clr-stars)'}}/>
              </div>
            </div>
            <div className="AZ-course-card4">
              <p>Durations</p>
              <h5>10 Days</h5>
            </div>
            <div className="AZ-course-card5">
              <p>Lessons</p>
              <h5>30</h5>
            </div>
            <div className="AZ-course-card6">
              <p>Quizzes</p>
              <h5>5</h5>
            </div>
            <div className="AZ-course-card7">
              <p>Certificate</p>
              <h5>Yes</h5>
            </div>
            <div className="AZ-course-card8">
              <p>Language</p>
              <h5>English</h5>
            </div>
            <div className="AZ-course-card9">
              <p>Access</p>
              <h5>lifetime</h5>
            </div>
          </div>
          <div className="AZ-corse-bottom">
            <button type="submit">Purchase Course</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AZcompobn