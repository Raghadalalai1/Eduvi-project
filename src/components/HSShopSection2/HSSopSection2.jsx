import {
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./HSShopSection2.css";
import Pagination from "./Pagination.jsx";



export default function HSShopSection2() {
  
  const [currentPage , setcurrentPage] = useState(1);
  const [search, setSearch] = useState("");
 // const [isSearching, setIsSearching] = useState(false);

 // buttun

 const [HSColor1,setLKColor1] =useState(false);
 const [HSColor2,setLKColor2] =useState(true);
 const [HSColor3,setLKColor3] =useState(true);
 const [HSColor4,setLKColor4] =useState(true);


 function HSchangcolor1() {
  setLKColor1(!HSColor1)
}
function HSchangcolor2() {
  setLKColor2(!HSColor2)
}
function HSchangcolor3() {
  setLKColor3(!HSColor3)
}
function HSchangcolor4() {
  setLKColor4(!HSColor4)
}

useEffect(()=>{
  if(HSColor1==false){
    setLKColor2(true)
    setLKColor3(true)
    setLKColor4(true)
  }
},[HSColor1])

useEffect (()=>{
    if(HSColor2==false){
      setLKColor1(true)
      setLKColor3(true)
      setLKColor4(true)

    }
  },[HSColor2])

  useEffect (()=>{
    if(HSColor3==false){
      setLKColor1(true)
      setLKColor2(true)
      setLKColor4(true)
    }
  },[HSColor3])

  useEffect (()=>{
    if(HSColor4==false){
      setLKColor1(true)
      setLKColor2(true)
      setLKColor3(true)
    }
  },[HSColor4])






  const HSCardsBooks = [
    {
      id: 1,
      image: "./public/images/Shop/Shop-Section/book-5.svg",
      text: "The Three Musketeers1",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 2,
      image: "./public/images/Shop/Shop-Section/book-6.svg",
      text: "The Three Musketeers2",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 3,
      image: "./public/images/Shop/Shop-Section/book-1.svg",
      text: "The Three Musketeers3",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 4,
      image: "./public/images/Shop/Shop-Section/book-2.svg",
      text: "The Three Musketeers4",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 5,
      image: "./public/images/Shop/Shop-Section/book-3.svg",
      text: "The Three Musketeers5",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 6,
      image: "./public/images/Shop/Shop-Section/book-4.svg",
      text: "The Three Musketeers6",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 7,
      image: "./public/images/Shop/Shop-Section/book-6.svg",
      text: "The Three Musketeers7",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 8,
      image: "./public/images/Shop/Shop-Section/book-5.svg",
      text: "The Three Musketeers8",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 9,
      image: "./public/images/Shop/Shop-Section/book-3.svg",
      text: "The Three Musketeers9",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 10,
      image: "./public/images/Shop/Shop-Section/book-2.svg",
      text: "The Three Musketeers10",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 11,
      image: "./public/images/Shop/Shop-Section/book-6.svg",
      text: "The Three Musketeers11",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 12,
      image: "./public/images/Shop/Shop-Section/book-1.svg",
      text: "The Three Musketeers12",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 13,
      image: "./public/images/Shop/Shop-Section/book-5.svg",
      text: "The Three Musketeers13",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 14,
      image: "./public/images/Shop/Shop-Section/book-3.svg",
      text: "The Three Musketeers14",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 15,
      image: "./public/images/Shop/Shop-Section/book-4.svg",
      text: "The Three Musketeers15",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 16,
      image: "./public/images/Shop/Shop-Section/book-1.svg",
      text: "The Three Musketeers16",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 17,
      image: "./public/images/Shop/Shop-Section/book-6.svg",
      text: "The Three Musketeers17",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 18,
      image: "./public/images/Shop/Shop-Section/book-2.svg",
      text: "The Three Musketeers18",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 19,
      image: "./public/images/Shop/Shop-Section/book-6.svg",
      text: "The Three Musketeers19",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 20,
      image: "./public/images/Shop/Shop-Section/book-5.svg",
      text: "The Three Musketeers20",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 21,
      image: "./public/images/Shop/Shop-Section/book-1.svg",
      text: "The Three Musketeers21",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 22,
      image: "./public/images/Shop/Shop-Section/book-2.svg",
      text: "The Three Musketeers22",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 23,
      image: "./public/images/Shop/Shop-Section/book-3.svg",
      text: "The Three Musketeers23",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 24,
      image: "./public/images/Shop/Shop-Section/book-4.svg",
      text: "The Three Musketeers24",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 25,
      image: "./public/images/Shop/Shop-Section/book-6.svg",
      text: "The Three Musketeers25",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 26,
      image: "./public/images/Shop/Shop-Section/book-5.svg",
      text: "The Three Musketeers26",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 27,
      image: "./public/images/Shop/Shop-Section/book-3.svg",
      text: "The Three Musketeers27",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    
  ];
  // pagination
  const PRODUCT_PER_PAGE = 9;
  const pages = Math.ceil (HSCardsBooks.length / PRODUCT_PER_PAGE);
  const startIndex =(currentPage - 1)*PRODUCT_PER_PAGE;

  // search
  const filteredBooks = HSCardsBooks.filter(book =>
    book.text.toLowerCase().includes(search.toLowerCase())
  );

  // const clickSearch = () => {
  //   setIsSearching(true); 
  // };

  

 // const orderedProducts = HSCardsBooks.slice(startIndex  ,finishIndex ) ;



  return (
    
    <div className="HS-LeftSection">
      <div className="HS-LeftSection-Button">
        <button onClick={HSchangcolor1} className={HSColor1 ? 'HS-Button1' : 'HS-Button1-1'}>All Book</button>
        <button onClick={HSchangcolor2} className={HSColor2 ? 'HS-Button2' : 'HS-Button2-2'}>Kindergarten</button>
        <button onClick={HSchangcolor3} className={HSColor3 ? 'HS-Button3' : 'HS-Button3-3'}>High School</button>
        <button onClick={HSchangcolor4} className={HSColor4? 'HS-Button4' : 'HS-Button4-4'}>College</button>
      </div>

      <form className="HS-Form">
        <div className="HS-input">
          <input
            type="search"
            placeholder=" Serach Class, Course, Book Name"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button onClick={(e) => setSearch(e.target.value)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <select name="School" className="HS-Search-Select">
          <option>Sort by:Latest </option>
          <option>Sort by: oldest</option>
        </select>
      </form>

      <div className="HS-Cards-Books">
        
        {filteredBooks.slice(startIndex, startIndex + PRODUCT_PER_PAGE).map((book) => {
          return (
            <>
            <div className="HS-Card-Book" key={book.id}>
              <div className="HS-Card-Info-Book">
                <img src={book.image} alt="image-title"></img>
                <p className="HS-Text-Pargraph">{book.text}</p>
                <div className="HS-price-stars">
                  <p className="HS-Price">{book.price}</p>
                  <div className="HS-Stars">
                    {book.stars}
                    {book.stars}
                    {book.stars}
                    {book.stars}
                    {book.stars}
                  </div>
                </div>
              </div>
            </div>
            </>
          );
        })}
      </div>
      
      <Pagination   pages ={pages} currentPage={currentPage} setcurrentPage={setcurrentPage} />


      <div className="HS-side">
        <div className="HS-sidebar">
          <button>
            <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#9c4dfa" }} />
          </button>
          <p>pages</p>
          <button className="HS-back">5</button>
          <p>of 80</p>
          <button className="HS-background">
            <FontAwesomeIcon icon={faChevronRight} style={{ color: "#ffffff" }} />
          </button>
        </div>

    </div>
  );
}
