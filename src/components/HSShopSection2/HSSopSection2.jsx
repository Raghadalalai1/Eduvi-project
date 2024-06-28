import {
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./HSShopSection2.css";
import Pagination from "./Pagination.jsx";



export default function HSShopSection2() {
  
  const [currentPage , setcurrentPage] = useState(1);

  

  const HSCardsBooks = [
    {
      id: 1,
      image: "./public/images/Shop/Shop-Section/book-5.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 2,
      image: "./public/images/Shop/Shop-Section/book-6.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 3,
      image: "./public/images/Shop/Shop-Section/book-1.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 4,
      image: "./public/images/Shop/Shop-Section/book-2.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 5,
      image: "./public/images/Shop/Shop-Section/book-3.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 6,
      image: "./public/images/Shop/Shop-Section/book-4.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 7,
      image: "./public/images/Shop/Shop-Section/book-6.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 8,
      image: "./public/images/Shop/Shop-Section/book-5.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 9,
      image: "./public/images/Shop/Shop-Section/book-3.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 10,
      image: "./public/images/Shop/Shop-Section/book-2.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 11,
      image: "./public/images/Shop/Shop-Section/book-6.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 12,
      image: "./public/images/Shop/Shop-Section/book-1.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 13,
      image: "./public/images/Shop/Shop-Section/book-5.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 14,
      image: "./public/images/Shop/Shop-Section/book-3.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 15,
      image: "./public/images/Shop/Shop-Section/book-4.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 16,
      image: "./public/images/Shop/Shop-Section/book-1.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 17,
      image: "./public/images/Shop/Shop-Section/book-6.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 18,
      image: "./public/images/Shop/Shop-Section/book-2.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 19,
      image: "./public/images/Shop/Shop-Section/book-6.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 20,
      image: "./public/images/Shop/Shop-Section/book-5.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 21,
      image: "./public/images/Shop/Shop-Section/book-1.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 22,
      image: "./public/images/Shop/Shop-Section/book-2.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 23,
      image: "./public/images/Shop/Shop-Section/book-3.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },

    {
      id: 24,
      image: "./public/images/Shop/Shop-Section/book-4.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 25,
      image: "./public/images/Shop/Shop-Section/book-6.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 26,
      image: "./public/images/Shop/Shop-Section/book-5.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    {
      id: 27,
      image: "./public/images/Shop/Shop-Section/book-3.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
    },
    
  ];
  // pagination
  const PRODUCT_PER_PAGE = 9;
  const pages = Math.ceil (HSCardsBooks.length / PRODUCT_PER_PAGE);
  const startIndex =(currentPage - 1)*PRODUCT_PER_PAGE;
  const finishIndex = currentPage * PRODUCT_PER_PAGE;
  const firstThreeCards = HSCardsBooks.slice(startIndex, finishIndex);


  

 // const orderedProducts = HSCardsBooks.slice(startIndex  ,finishIndex ) ;



  return (
    
    <div className="HS-LeftSection">
      <div className="HS-LeftSection-Button">
        <button className="HS-Button1">All Book</button>
        <button className="HS-Button2">Kindergarten</button>
        <button className="HS-Button3">High School</button>
        <button className="HS-Button4">College</button>
      </div>

      <form className="HS-Form">
        <div className="HS-input">
          <input
            type="search"
            placeholder=" Serach Class, Course, Book Name"
          ></input>
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <select name="School" className="HS-Search-Select">
          <option>Sort by:Latest </option>
          <option>Sort by: oldest</option>
        </select>
      </form>

      <div className="HS-Cards-Books">
        
        {firstThreeCards.map((book) => {
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

    </div>
  );
}
