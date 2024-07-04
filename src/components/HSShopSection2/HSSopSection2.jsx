import {
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from 'react';
import "./HSShopSection2.css";

export default function HSShopSection2() {
  const HSCardsBooks = [
    {
      id: 1,
      image: "./public/images/Shop/Shop-Section/book-5.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
     lkcategory:"second"
    },

    {
      id: 2,
      image: "./public/images/Shop/Shop-Section/book-6.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
      lkcategory:"one"
    },

    {
      id: 3,
      image: "./public/images/Shop/Shop-Section/book-1.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
      lkcategory:"one"
    },

    {
      id: 4,
      image: "./public/images/Shop/Shop-Section/book-2.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
      lkcategory:"second"
    },

    {
      id: 5,
      image: "./public/images/Shop/Shop-Section/book-3.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
      lkcategory:"three"
    },

    {
      id: 6,
      image: "./public/images/Shop/Shop-Section/book-4.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
      lkcategory:"three"
    },
    {
      id: 7,
      image: "./public/images/Shop/Shop-Section/book-6.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
      lkcategory:"one"
    },
    {
      id: 8,
      image: "./public/images/Shop/Shop-Section/book-5.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
      lkcategory:"second"
    },
    {
      id: 9,
      image: "./public/images/Shop/Shop-Section/book-3.svg",
      text: "The Three Musketeers",
      price: "$40.00",
      stars: <FontAwesomeIcon icon={faStar} className="HS-Star-color" />,
      lkcategory:"three"
    },
  ];
  const [LkItem ,setLkItem] =useState(HSCardsBooks)
  const filterLkItems=(catItem)=>{
    const updateItems = HSCardsBooks.filter((curItem)=>{
      return curItem.lkcategory === catItem
    })
    setLkItem(updateItems)
  }

  return (
    <div className="HS-LeftSection">
      <div className="HS-LeftSection-Button">
        <button className="HS-Button1" onClick={()=>{setLkItem(HSCardsBooks)}}>All Book</button>
        <button className="HS-Button2" onClick={()=>{ filterLkItems("one")}}>Kindergarten</button>
        <button className="HS-Button3" onClick={()=>{ filterLkItems("second")}}>High School</button>
        <button className="HS-Button4" onClick={()=>{ filterLkItems("three")}}>College</button>
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
        {LkItem.map((book) => {
          return (
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
