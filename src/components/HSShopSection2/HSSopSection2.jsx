import {
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
  faStar,
}
from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HSShopSection2.css";
import { useState } from 'react';

export default function HSShopSection2() {
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
  ];

  const [ratings, setRatings] = useState({});

  const handleRating = (bookId, rating) => {
    setRatings({ ...ratings, [bookId]: rating });
  };

  const firstThreeBooks = HSCardsBooks.slice(0, 3);
  const secondThreeBooks = HSCardsBooks.slice(3, 6);

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
        {firstThreeBooks.map((book) => {
          return (
            <div className="HS-Card-Book" key={book.id}>
              <div className="HS-Card-Info-Book">
                <img src={book.image} alt="image-title"></img>
                <p className="HS-Text-Pargraph">{book.text}</p>
                <div className="HS-price-stars">
                  <p className="HS-Price">{book.price}</p>
                  <div className="HS-Stars">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className={
                          index < (ratings[book.id] || 0) ? "HS-Star-color" : "HS-Star-gray"
                        }
                        onClick={() => handleRating(book.id, index + 1)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="HS-Cards-Books">
        {secondThreeBooks.map((book) => {
          return (
            <div className="HS-Card-Book" key={book.id}>
              <div className="HS-Card-Info-Book">
                <img src={book.image} alt="image-title"></img>
                <div>
                  <div className="HS-Stars">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className={
                          index < (ratings[book.id] || 0) ? "HS-Star-color" : "HS-Star-gray"
                        }
                        onClick={() => handleRating(book.id, index + 1)}
                      />
                    ))}
                  </div>
                  <p className="HS-Text-Pargraph">{book.text}</p>
                  <p className="HS-Price">{book.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

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
    </div>
  );
}
