import React, { useEffect, useState } from 'react'
import './LK-Home-section3.css'
import LKCards from './../LK-Card/LK-Card'
import homeCardImg from './../../../public/images/Home/Home-section4/ball-1.svg'
import homeCardImg2 from './../../../public/images/Home/Home-section4/ball-2.svg'
import homeCardImg3 from './../../../public/images/Home/Home-section4/ball-3.svg'
import homeCardImg4 from './../../../public/images/Home/Home-section4/ball-4.svg'
import homeCardImg5 from './../../../public/images/Home/Home-section4/ball-5.svg'
import homeCardImg6 from './../../../public/images/Home/Home-section4/ball-6.svg'
import homeCardImg7 from './../../../public/images/Home/Home-section4/ball-7.svg'
import homeCardImg8 from './../../../public/images/Home/Home-section4/ball-8.svg'

import homeCardImg9 from './../../../public/images/Home/Home-section4/ball-9.jfif'
import homeCardImg10 from './../../../public/images/Home/Home-section4/ball-10.jfif'
import homeCardImg11 from './../../../public/images/Home/Home-section4/ball-11.jfif'
import homeCardImg12 from './../../../public/images/Home/Home-section4/ball-12.jfif'
import homeCardImg13 from './../../../public/images/Home/Home-section4/ball-13.jfif'
import homeCardImg14 from './../../../public/images/Home/Home-section4/ball-14.jfif'
import homeCardImg15 from './../../../public/images/Home/Home-section4/ball-15.jfif'
import homeCardImg16 from './../../../public/images/Home/Home-section4/ball-16.jfif'

import homeCardImg17 from './../../../public/images/Home/Home-section4/ball-17.jfif'
import homeCardImg18 from './../../../public/images/Home/Home-section4/ball-18.jfif'
import homeCardImg19 from './../../../public/images/Home/Home-section4/ball-19.jfif'
import homeCardImg20 from './../../../public/images/Home/Home-section4/ball-20.jfif'
import homeCardImg21 from './../../../public/images/Home/Home-section4/ball-21.jfif'
import homeCardImg22 from './../../../public/images/Home/Home-section4/ball-22.jfif'
import homeCardImg23 from './../../../public/images/Home/Home-section4/ball-23.jfif'
import homeCardImg24 from './../../../public/images/Home/Home-section4/ball-24.jfif'
import { Link } from 'react-router-dom'
export default function LKHomeSection3() {


  let data1 = [{ id: '1', img: homeCardImg, h4: "Standard One", par: "Standard 1 is a foundation Standard that reflects 7 important concepts...", button: "Class Details" }
    , { id: '2', img: homeCardImg2, h4: "Standard Two", par: "Standard 2 builds on the foundations of Standard 1 and includes requirements...", button: "Class Details" },
  { id: '3', img: homeCardImg3, h4: "Standard Three", par: "Standard 3 of the Aged Care Quality Standards applies to all services delivering personal...", button: "Class Details" },
  { id: '4', img: homeCardImg4, h4: "Standard Four", par: "Standard 4 of the Aged Care Quality Standards focuses on services and supports...", button: "Class Details" },
  { id: '5', img: homeCardImg5, h4: "Standard Five", par: "Standard 5 Learning Resources. Learning Resources ensure that the school has the...", button: "Class Details" },
  { id: '6', img: homeCardImg6, h4: "Standard Six", par: "Standard 6 requires an organisation to have a system to resolve complaints...", button: "Class Details" }
    , { id: '7', img: homeCardImg7, h4: "Standard Seven", par: "Standard 7 Blood Management mandates that leaders of health service organisations...", button: "Class Details" },
  { id: '8', img: homeCardImg8, h4: "Standard Eight", par: "Standard 8 Course from NCERT Solutions help students to understand...", button: "Class Details" }
    , { id: '9', img: homeCardImg8, h4: "Standard Eight", par: "Standard 8 Course from NCERT Solutions help students to understand...", button: "Class Details" }];

  let dataS=[{id:'1',img:homeCardImg9,h4:"Standard Nine",par:"Standard 9 is a foundation Standard that reflects 7 important concepts...",button:"Class Details"}
    ,{id:'2',img:homeCardImg10,h4:"Standard Ten",par:"Standard 10 builds on the foundations of Standard 1 and includes requirements...",button:"Class Details"},
    {id:'3',img:homeCardImg11,h4:"Standard Eleven",par:"Standard 11 of the Aged Care Quality Standards applies to all services delivering personal...",button:"Class Details"},
    {id:'4',img:homeCardImg12,h4:"Standard Twelve",par:"Standard 12 of the Aged Care Quality Standards focuses on services and supports...",button:"Class Details"},
    {id:'5',img:homeCardImg13,h4:"Standard Thirten",par:"Standard 13 Learning Resources. Learning Resources ensure that the school has the...",button:"Class Details"},
    {id:'6',img:homeCardImg14,h4:"Standard Fourten",par:"Standard 14 requires an organisation to have a system to resolve complaints...",button:"Class Details"}
    ,{id:'7',img:homeCardImg15,h4:"Standard Fiveten",par:"Standard 15 Blood Management mandates that leaders of health service organisations...",button:"Class Details"},
    {id:'8',img:homeCardImg16,h4:"Standard Sixten",par:"Standard 16 Course from NCERT Solutions help students to understand...",button:"Class Details"},
    {id:'9',img:homeCardImg16,h4:"Standard Sixten",par:"Standard 16 Course from NCERT Solutions help students to understand...",button:"Class Details"},
  
  
  ];

  
    let dataTH=[{id:'1',img:homeCardImg17,h4:"Standard Seventeen",par:"Standard 17 is a foundation Standard that reflects 7 important concepts...",button:"Class Details"}
      ,{id:'2',img:homeCardImg18,h4:"Standard Eighteen",par:"Standard 18 builds on the foundations of Standard 1 and includes requirements...",button:"Class Details"},
      {id:'3',img:homeCardImg19,h4:"Standard Ninteteen",par:"Standard 19 of the Aged Care Quality Standards applies to all services delivering personal...",button:"Class Details"},
      {id:'4',img:homeCardImg20,h4:"Standard Twenty",par:"Standard 20 of the Aged Care Quality Standards focuses on services and supports...",button:"Class Details"},
      {id:'5',img:homeCardImg21,h4:"Standard Twenty-1",par:"Standard 21 Learning Resources. Learning Resources ensure that the school has the...",button:"Class Details"},
      {id:'6',img:homeCardImg22,h4:"Standard Twenty-2",par:"Standard 22 requires an organisation to have a system to resolve complaints...",button:"Class Details"}
      ,{id:'7',img:homeCardImg23,h4:"Standard Twenty-3",par:"Standard 23 Blood Management mandates that leaders of health service organisations...",button:"Class Details"},
      {id:'8',img:homeCardImg24,h4:"Standard Twenty-4",par:"Standard 24 Course from NCERT Solutions help students to understand...",button:"Class Details"},
      {id:'9',img:homeCardImg24,h4:"Standard Twenty-4",par:"Standard 24 Course from NCERT Solutions help students to understand...",button:"Class Details"},
    
    
    ];
  


    const [LKColorO,setLKColorO] =useState(true)
    const [LKColorS,setLKColorS] =useState(false)
    const [LKColorTH,setLKColorTH] =useState(true)
    function LKchangcolorO() {
        setLKColorO(!LKColorO)
    }
    function LKchangcolorS() {
        setLKColorS(!LKColorS)
    }
    function LKchangcolorTH() {
        setLKColorTH(!LKColorTH)
    }
    useEffect (()=>{
      if(LKColorO==false){
        setLKColorTH(true)
        setLKColorS(true)
      }
    },[LKColorO])
    useEffect (()=>{
        if(LKColorS==false){
          setLKColorTH(true)
          setLKColorO(true)
        }
      },[LKColorS])
      useEffect (()=>{
        if(LKColorTH==false){
          setLKColorO(true)
          setLKColorS(true)
        }
      },[LKColorTH])
  return (
    <>
      <section className='LK-home-section3'>
        <div className='LK-home-section3-son1'>

          <h2 className='LK-home-sec3-son1-h2 Metropolis-font-R' data-aos="fade-down" data-aos-duration="3000" data-aos-easing="ease-out-cubic">Qualified lessons for students</h2>
          <p className='LK-home-sec3-son1-par Metropolis-font1' data-aos="fade-down" data-aos-duration="3000" data-aos-easing="ease-out-cubic">A lesson or class is a structured period of time where learning is intended to occur. It involves one or more students being taught by a teacher or instructor.</p>
          <div className='LK-home-sec3-son1-Buttons' data-aos="fade-down" data-aos-duration="3000" data-aos-easing="ease-out-cubic">
            <button onClick={LKchangcolorO} className={LKColorO ? 'LK-home-sec3-son1-button1' : 'LK-home-sec3-son1-button'}>Kindergarten</button>
            <button onClick={LKchangcolorS} className={LKColorS ? 'LK-home-sec3-son1-button1' : 'LK-home-sec3-son1-button'}>High School</button>
            <button onClick={LKchangcolorTH} className={LKColorTH ? 'LK-home-sec3-son1-button1' : 'LK-home-sec3-son1-button'}>College</button>
          </div>
        </div>
       {/* <LKCards data1={data1}/> */}
       {/* <LKCards datas={dataS} lkcards={LKColorS} />  */}
        {/* <LKCards data1={data1}  lkcardo={LKColorO}/> */}
        {/* <LKCards datas={dataS} lkcards={LKColorS} /> */}
       {LKColorO  ?'' :  <LKCards data1={dataS}/>}
       {LKColorS  ?'' :  <LKCards data1={data1}/>}
       {LKColorTH  ?'' :  <LKCards data1={dataTH}/>}

        <div className='LK-home-section3-son3'>
          <Link to={'/courses'} ><button className='LK-home-sec3-son3-button' data-aos="fade-right" data-aos-duration="3000" data-aos-easing="ease-out-cubic">Visit More Classes</button></Link>
        </div>
        

      </section>
    </>

  )
}
