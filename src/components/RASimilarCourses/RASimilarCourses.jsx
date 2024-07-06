import { useState } from "react";
import KGCourseComponent from "../KGCourseComponent/KGCourseComponent";
import "./RASimilarCourses.css";
export default function RASimilarCourses() {
  const [showMore, setShowMore] = useState(false);
  const coursesToShowInitially = 1;
  const totalCourses = 2;
  const handleSeeMoreClick = () => {
    setShowMore(!showMore);
  };

  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className="RA-section-similar">
      <h1 className="RA-similar">Similar Courses</h1>
      {[...Array(showMore ? totalCourses : coursesToShowInitially)].map(
        (_, index) => (
          <KGCourseComponent key={index} bool={false} onSearchChange={search} />
        )
      )}
      <p className="RA-SeeMore" onClick={handleSeeMoreClick}>
        {showMore ? "See Less" : "See More"}
      </p>
    </div>
  );
}
