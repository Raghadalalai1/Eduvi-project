import './KGCardsBooks.css'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
export default function KGCardsBooks({ KGTitle }) {
    useEffect(()=>{
        Aos.init()
      },[])
    const [showAllBooks, setShowAllBooks] = useState(false);
    const [ratings, setRatings] = useState({});

    const handleSeeMore = () => {
        setShowAllBooks(!showAllBooks);
    };

    const handleRating = (bookId, rating) => {
        setRatings({ ...ratings, [bookId]: rating });
    };

    const KGCardsBooks = [

        {
            id: 1,
            Image: './images/Shop/Shop-Section/Small-Image-1.svg',
            text: "The Three Musketeers, by Alexandre Dumas",
            price: '39$'
        },
        {
            id: 2,
            Image: './images/Shop/Shop-Section/Small-Image-2.svg',
            text: "The Three Musketeers, by Alexandre Dumas",
            price: '39$'
        },
        {
            id: 3,
            Image: './images/Shop/Shop-Section/Small-Image-3.svg',
            text: "The Three Musketeers, by Alexandre Dumas",
            price: '39$'
        },
        {
            id: 4,
            Image: './images/Shop/Shop-Section/Small-Image-1.svg',
            text: "The Three Musketeers, by Alexandre Dumas",
            price: '39$'
        },
        {
            id: 5,
            Image: './images/Shop/Shop-Section/Small-Image-2.svg',
            text: "The Three Musketeers, by Alexandre Dumas",
            price: '39$'
        },
        {
            id: 6,
            Image: './images/Shop/Shop-Section/Small-Image-3.svg',
            text: "The Three Musketeers, by Alexandre Dumas",
            price: '39$'
        }
    ];


    const firstThreeBooks = KGCardsBooks.slice(0, 3); // مصفوفة لأول 
    const secondThreeBooks = KGCardsBooks.slice(3, 6); // مصفوفة الثانية
    return (
        <div className='KG-Cards'  data-aos="fade-right" data-aos-duration="3000" data-aos-easing="ease-out-cubic">
            <h3 className='KG-Card-Title'>{KGTitle}</h3>
            {firstThreeBooks.map((book) => {
                return (
                    <div className='KG-Card-Book' key={book.id}>
                        <div className='KG-Card-Info-Book'>
                            <img src={book.Image} alt='image-title'></img>
                            <div>
                                <div className='KG-Stars'>
                                    {[...Array(5)].map((_, index) => (
                                        <FontAwesomeIcon
                                            // style={{color:'#5D5A6F'}}
                                            key={index}
                                            icon={faStar}
                                            className={index < ratings[book.id] ? 'KG-Star-color' : ''}
                                            onClick={() => handleRating(book.id, index + 1)}
                                        />
                                    ))}
                                </div>
                                <p className='KG-Text-Pargraph'>{book.text}</p>
                                <p className='KG-Price'>{book.price}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
            {showAllBooks && secondThreeBooks.map((book) => (
                <div className='KG-Card-Book' key={book.id}>
                    <div className='KG-Card-Info-Book'>
                        <img src={book.Image} alt='image-title'></img>
                        <div>
                            <div className='KG-Stars'>
                                {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon
                                        key={index}
                                        icon={faStar}
                                        className={index < ratings[book.id] ? 'KG-Star-color' : ''}
                                        onClick={() => handleRating(book.id, index + 1)}
                                    />
                                ))}
                            </div>
                            <p className='KG-Text-Pargraph'>{book.text}</p>
                            <p className='KG-Price'>{book.price}</p>
                        </div>
                    </div>
                </div>
            ))}
            <p className='KG-SeeMore' onClick={handleSeeMore}>{showAllBooks ? 'See Less' : 'See More'}</p>
        </div>
    )
}
