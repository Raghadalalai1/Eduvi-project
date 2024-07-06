import React, { useState, useEffect } from 'react';
import './LK-OurMonetors-Section2.css';



import teacher1 from './../../../public/images/OurMentor/OurMentor-Section(1)/Image(1).png';
import teacher2 from './../../../public/images/OurMentor/OurMentor-Section(1)/Image(2).png';
import teacher3 from './../../../public/images/OurMentor/OurMentor-Section(1)/Image(3).png';
import teacher4 from './../../../public/images/OurMentor/OurMentor-Section(1)/Image(4).png';
import teacher5 from './../../../public/images/OurMentor/OurMentor-Section(1)/Image(5).png';
import teacher6 from './../../../public/images/OurMentor/OurMentor-Section(1)/Image(6).png';
import teacher7 from './../../../public/images/OurMentor/OurMentor-Section(1)/Image(7).png';
import teacher8 from './../../../public/images/OurMentor/OurMentor-Section(1)/Image(8).png';
import teacher9 from './../../../public/images/OurMentor/OurMentor-Section(1)/Image(9).png';
import teacher10 from './../../../public/images/OurMentor/OurMentor-Section(1)/Image(10).png';
import teacher11 from './../../../public/images/OurMentor/OurMentor-Section(1)/Image(11).png';
import teacher12 from './../../../public/images/OurMentor/OurMentor-Section(1)/Image(12).png';
import { faAngleDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Pagination from "../HSShopSection2/Pagination";

export default function LKOurMentorssection2() {
    const [currentPage , setcurrentPage] = useState(1);
    
    let dataTeacher = [
        {id: '1', img: teacher1, h5: 'Kristin Watson', span: '150'},
        {id: '2', img: teacher2, h5: 'Brooklyn Simmons', span: '200'},
        {id: '3', img: teacher3, h5: 'Robert Fox', span: '170'},
        {id: '4', img: teacher4, h5: 'Wade Warren', span: '110'},
        {id: '5', img: teacher5, h5: 'Bessie Cooper', span: '140'},
        {id: '6', img: teacher6, h5: 'Ronald Richards', span: '190'},
        {id: '7', img: teacher7, h5: 'Guy Hawkins', span: '153'},
        {id: '8', img: teacher8, h5: 'Floyd Miles', span: '230'},
        {id: '9', img: teacher9, h5: 'Theresa Webb', span: '185'},
        {id: '10', img: teacher10, h5: 'Cody Fisher', span: '169'},
        {id: '11', img: teacher11, h5: 'Courtney Henry', span: '190'},
        {id: '12', img: teacher12, h5: 'Jerome Bell', span: '179'},

        {id: '13', img: teacher1, h5: 'Kristin Watson', span: '150'},
        {id: '14', img: teacher2, h5: 'Brooklyn Simmons', span: '200'},
        {id: '15', img: teacher3, h5: 'Robert Fox', span: '170'},
        {id: '16', img: teacher4, h5: 'Wade Warren', span: '110'},
        {id: '17', img: teacher5, h5: 'Bessie Cooper', span: '140'},
        {id: '18', img: teacher6, h5: 'Ronald Richards', span: '190'},
        {id: '19', img: teacher7, h5: 'Guy Hawkins', span: '153'},
        {id: '20', img: teacher8, h5: 'Floyd Miles', span: '230'},
        {id: '21', img: teacher9, h5: 'Theresa Webb', span: '185'},
        {id: '22', img: teacher10, h5: 'Cody Fisher', span: '169'},
        {id: '23', img: teacher11, h5: 'Courtney Henry', span: '190'},
        {id: '24', img: teacher12, h5: 'Jerome Bell', span: '179'},
        
    ];

    const [openAccordion, setOpenAccordion] = useState(null);

    function toggleAccordion(id) {
        setOpenAccordion(openAccordion === id ? null : id);
    }

    const [LKColora, setLKColora] = useState(true);
    const [LKColorb, setLKColorb] = useState(true);
    const [LKColorc, setLKColorc] = useState(false);
    const [LKColord, setLKColord] = useState(true);
    const [LKColore, setLKColore] = useState(true);

    function LKchangcolora() {
        setLKColora(!LKColora);
    }

    function LKchangcolorb() {
        setLKColorb(!LKColorb);
    }

    function LKchangcolorc() {
        setLKColorc(!LKColorc);
    }

    function LKchangcolord() {
        setLKColord(!LKColord);
    }

    function LKchangcolore() {
        setLKColore(!LKColore);
    }

    useEffect(() => {
        if (LKColora === false) {
            setLKColorb(true);
            setLKColorc(true);
            setLKColord(true);
            setLKColore(true);
        }
    }, [LKColora]);

    useEffect(() => {
        if (LKColorb === false) {
            setLKColora(true);
            setLKColorc(true);
            setLKColord(true);
            setLKColore(true);
        }
    }, [LKColorb]);

    useEffect(() => {
        if (LKColorc === false) {
            setLKColora(true);
            setLKColorb(true);
            setLKColord(true);
            setLKColore(true);
        }
    }, [LKColorc]);

    useEffect(() => {
        if (LKColord === false) {
            setLKColora(true);
            setLKColorb(true);
            setLKColorc(true);
            setLKColore(true);
        }
    }, [LKColord]);


useEffect(() => {
        if (LKColore === false) {
            setLKColora(true);
            setLKColorb(true);
            setLKColorc(true);
            setLKColord(true);
        }
    }, [LKColore]);
// pagination
    const PRODUCT_PER_PAGE = 12;
    const pages = Math.ceil (dataTeacher.length / PRODUCT_PER_PAGE);
    const startIndex =(currentPage - 1)*PRODUCT_PER_PAGE;





    // { pathname: , state: { imge: item.img, h5: item.h5 } }}
    return (
        <>
            <section className='LK-OurMonetors-sec2'>
                <div className='LK-OurMonetors-tabs'>
                    <button onClick={LKchangcolora} className={LKColora ? 'LK-OurMonitors-tabs-button1' : 'LK-OurMonitors-tabs-button'}>All Mentors</button>
                    <button onClick={LKchangcolorb} className={LKColorb ? 'LK-OurMonitors-tabs-button1' : 'LK-OurMonitors-tabs-button'}>For Kindergarten</button>
                    <button onClick={LKchangcolorc} className={LKColorc ? 'LK-OurMonitors-tabs-button1' : 'LK-OurMonitors-tabs-button'}>For high school</button>
                    <button onClick={LKchangcolord} className={LKColord ? 'LK-OurMonitors-tabs-button1' : 'LK-OurMonitors-tabs-button'}>For college</button>
                    <button onClick={LKchangcolore} className={LKColore ? 'LK-OurMonitors-tabs-button1' : 'LK-OurMonitors-tabs-button'}>For Technology</button>
                </div>
                <div className='LK-OurMonetors-sec2-teacher-CardF'>
                {dataTeacher.slice(startIndex, startIndex + PRODUCT_PER_PAGE).map((item) => {
                   
                        return (
                        <div className='LK-OurMonetors-cardson' key={item.id}>
                        <Link to={'/SingleMonetorDetalis'} imge= {item.img} h5={ item.h5} >
                        <img className={openAccordion === item.id ? 'LK-OurMonetors-cardson-onAcoordione-img' : 'LK-OurMonetors-cardson-img'} src={item.img} alt={item.h5} />
                        </Link>
                                <div className={openAccordion === item.id ? 'LK-OurMonetors-cardson-accodione-on' : 'LK-OurMonetors-cardson-accodione'}>
                                    <div className='LK-OurMonetors-cardson-accodioneO'>
                                        <h5 className='LK-OurMonetors-cardson-h5'>{item.h5}</h5>
                                        <FontAwesomeIcon className={openAccordion === item.id ? 'LK-OurMonetors-iconAngle-rot' : 'LK-OurMonetors-iconAngle'} icon={faAngleDown} onClick={() => toggleAccordion(item.id)} />
                                    </div>
                                    <h6 className='LK-OurMonetors-cardson-h6'>Founder & Mentor</h6>
                                    <div className={openAccordion === item.id ? 'LK-OurMonetors-cardson-accodione-show' : 'LK-OurMonetors-cardson-accodione-hidden'}>
                                        <FontAwesomeIcon className='LK-OurMonetors-iconStar' icon={faStar} />
                                        <p className='LK-OurMonetors-Accordion-par'>4.9 (<span className='LK-OurMonetors-Accordion-span'>{item.span}</span>)</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Pagination   pages ={pages} currentPage={currentPage} setcurrentPage={setcurrentPage} />
               
            </section>
           
        </>
    );
}