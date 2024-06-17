import React from 'react'
import './KGCardsBooks.css'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function KGCardsBooks({KGTitle}) {
    const KGCardsBooks = [
     {
        id : 1 ,
        Image : './public/images/Shop/Shop-Section/Small-Image-1.svg' ,
        stars : < FontAwesomeIcon icon={faStar} className='KG-Star-color' /> ,
        text : "The Three Musketeers, by Alexandre Dumas" ,
        price : '39$'
    },
    {
        id : 2 ,
        Image : './public/images/Shop/Shop-Section/Small-Image-2.svg' ,
        stars : < FontAwesomeIcon icon={faStar}  className='KG-Star-color' /> ,
        text : "The Three Musketeers, by Alexandre Dumas" ,
        price : '39$'
    } ,
    {
        id : 3 ,
        Image : './public/images/Shop/Shop-Section/Small-Image-3.svg' ,
        stars : < FontAwesomeIcon icon={faStar} className='KG-Star-color' /> ,
        text : "The Three Musketeers, by Alexandre Dumas" ,
        price : '39$'
    }];

        return (
            <div className='KG-Cards'>
                <h3 className='KG-Card-Title'>{KGTitle}</h3>
                { KGCardsBooks.map((book) => {
                    return(
                            <div className='KG-Card-Book' key={book.id}>
                                <div className='KG-Card-Info-Book'>
                                    <img src={book.Image} alt='image-title'></img>
                                    <div>
                                        <div className='KG-Stars'>
                                            {book.stars}
                                            {book.stars}
                                            {book.stars}
                                            {book.stars}
                                            {book.stars}
                                        </div>
                                        <p className='KG-Text-Pargraph'>{book.text}</p>
                                        <p className='KG-Price'>{book.price}</p>
                                    </div>
                                </div>
                            </div>
                    );
                })}
                <p className='KG-SeeMore'>See More</p>
            </div>
    )}
