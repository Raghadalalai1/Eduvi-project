import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Pagintion.css" ;

const Pagination = ( {pages ,currentPage , setcurrentPage}) => {
    const generatedPages = [];
    for (let i=1 ; i <=pages ; i++){
        generatedPages.push(i);
    }
    return (

<div className="HS-pagination">

<div className="HS-sidebar">
    <button className="HS-btn1"

             disabled = {currentPage === 1}
             onClick={() => setcurrentPage (prev => prev -1)}>
             <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#9c4dfa" }} />
    </button><p>pages</p> 
     
      {generatedPages.map(page =>
           <div onClick={() =>
                  setcurrentPage(page)} className={currentPage === page? "HS-page active1 " : "HS-page"}
                  key={page}>
                 {page}
            </div>  )}

            <p>of 80</p> <button  disabled = {currentPage === pages}
                                onClick={() => setcurrentPage (prev => prev +1)} className="HS-background HS-btn1">
                               <FontAwesomeIcon icon={faChevronRight} style={{ color: "#ffffff" }} />
                       </button>
   </div>
</div>

    );

}

export default Pagination ;

