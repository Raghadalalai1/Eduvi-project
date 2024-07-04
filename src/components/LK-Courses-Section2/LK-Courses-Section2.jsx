import React, { useEffect, useState } from 'react'


import LKCards from './../LK-Card/LK-Card'
import './LK-Courses-Section2.css'



import homeCardImg from './../../../public/images/Home/Home-section4/ball-1.svg'
import homeCardImg2 from './../../../public/images/Home/Home-section4/ball-2.svg'
import homeCardImg3 from './../../../public/images/Home/Home-section4/ball-3.svg'
import homeCardImg4 from './../../../public/images/Home/Home-section4/ball-4.svg'
import homeCardImg5 from './../../../public/images/Home/Home-section4/ball-5.svg'
import homeCardImg6 from './../../../public/images/Home/Home-section4/ball-6.svg'
import homeCardImg7 from './../../../public/images/Home/Home-section4/ball-7.svg'
import homeCardImg8 from './../../../public/images/Home/Home-section4/ball-8.svg'
import homeCardImg9 from './../../../public/images/Home/Home-section4/ball-9.svg'
import homeCardImg10 from './../../../public/images/Home/Home-section4/levelA.svg'
import homeCardImg11 from './../../../public/images/Home/Home-section4/levelO.svg'


export default function LKCoursesSection2() {
       
let data1=[
     {id:'1',img:homeCardImg,h4:"Standard One",par:"Standard 1 is a foundation Standard that reflects 7 important concepts...",button:"Class Details",category:"one"}
    ,{id:'2',img:homeCardImg2,h4:"Standard Two",par:"Standard 2 builds on the foundations of Standard 1 and includes requirements...",button:"Class Details",category:"one"}
    ,{id:'3',img:homeCardImg3,h4:"Standard Three",par:"Standard 3 of the Aged Care Quality Standards applies to all services delivering personal...",button:"Class Details",category:"second"}
    ,{id:'4',img:homeCardImg4,h4:"Standard Four",par:"Standard 4 of the Aged Care Quality Standards focuses on services and supports...",button:"Class Details",category:"therd"}
    ,{id:'5',img:homeCardImg5,h4:"Standard Five",par:"Standard 5 Learning Resources. Learning Resources ensure that the school has the...",button:"Class Details",category:"one"}
    ,{id:'6',img:homeCardImg6,h4:"Standard Six",par:"Standard 6 requires an organisation to have a system to resolve complaints...",button:"Class Details",category:"four"}
    ,{id:'7',img:homeCardImg7,h4:"Standard Seven",par:"Standard 7 Blood Management mandates that leaders of health service organisations...",button:"Class Details",category:"five"}
    ,{id:'8',img:homeCardImg8,h4:"Standard Eight",par:"Standard 8 Course from NCERT Solutions help students to understand...",button:"Class Details",category:"six"}
    ,{id:'9',img:homeCardImg9,h4:"Standard Nine",par:"Standard 5 Course from NCERT Solutions help students to understand...",button:"Class Details",category:"five"}
    ,{id:'10',img:homeCardImg10,h4:"O- Level",par:"Standard 5 Course from NCERT Solutions help students to understand...",button:"Class Details",category:"five"}
    ,{id:'11',img:homeCardImg11,h4:"A- Level",par:"Standard 6 Course from NCERT Solutions help students to understand...",button:"Class Details",category:"seven"}
    ,{id:'12',img:homeCardImg11,h4:"A- Level",par:"Standard 6 Course from NCERT Solutions help students to understand...",button:"Class Details"}
];

    const [LKColorO,setLKColorO] =useState(false)
    const [LKColorS,setLKColorS] =useState(true)
    const [LKColorTH,setLKColorTH] =useState(true)
    const [LKColorF,setLKColorF] =useState(true)
    const [LKColorFI,setLKColorFI] =useState(true)
    const [LKColorSI,setLKColorSI] =useState(true)
    const [LKColorSE,setLKColorSE] =useState(true)
    const [LKColorE,setLKColorE] =useState(true)

    function LKchangcolorO() {
        setLKColorO(!LKColorO)
    }
    function LKchangcolorS() {
        setLKColorS(!LKColorS)
    }
    function LKchangcolorTH() {
        setLKColorTH(!LKColorTH)
    }
    function LKchangcolorF() {
        setLKColorF(!LKColorF)
    }
    function LKchangcolorFI() {
        setLKColorFI(!LKColorFI)
    }
    function LKchangcolorSI() {
        setLKColorSI(!LKColorSI)
    }
    function LKchangcolorSE() {
        setLKColorSE(!LKColorSE)
    }
    function LKchangcolorE() {
        setLKColorE(!LKColorE)
    }
    useEffect (()=>{
      if(LKColorO==false){
        setLKColorTH(true)
        setLKColorS(true)
        setLKColorE(true)
        setLKColorSE(true)
        setLKColorSI(true)
        setLKColorF(true)
        setLKColorFI(true)
      
      }
    },[LKColorO])
    useEffect (()=>{
        if(LKColorS==false){
          setLKColorTH(true)
          setLKColorO(true)
          setLKColorE(true)
          setLKColorSE(true)
          setLKColorSI(true)
          setLKColorF(true)
          setLKColorFI(true)
        }
      },[LKColorS])
      useEffect (()=>{
        if(LKColorTH==false){
          setLKColorO(true)
          setLKColorS(true)
          setLKColorE(true)
          setLKColorSE(true)
          setLKColorSI(true)
          setLKColorF(true)
          setLKColorFI(true)
        }
      },[LKColorTH])
      useEffect (()=>{
        if(LKColorF==false){
          setLKColorO(true)
          setLKColorS(true)
          setLKColorE(true)
          setLKColorSE(true)
          setLKColorSI(true)
          setLKColorTH(true)
          setLKColorFI(true)
        }
      },[LKColorF])
      useEffect (()=>{
        if(LKColorFI==false){
          setLKColorO(true)
          setLKColorS(true)
          setLKColorE(true)
          setLKColorSE(true)
          setLKColorSI(true)
          setLKColorTH(true)
          setLKColorF(true)
        }
      },[LKColorFI])
      useEffect (()=>{
        if(LKColorSI==false){
          setLKColorO(true)
          setLKColorS(true)
          setLKColorE(true)
          setLKColorSE(true)
          setLKColorFI(true)
          setLKColorTH(true)
          setLKColorF(true)
        }
      },[LKColorSI])
      useEffect (()=>{
        if(LKColorSE==false){
          setLKColorO(true)
          setLKColorS(true)
          setLKColorE(true)
          setLKColorSI(true)
          setLKColorFI(true)
          setLKColorTH(true)
          setLKColorF(true)
        }
      },[LKColorSE])
      useEffect (()=>{
        if(LKColorE==false){
          setLKColorO(true)
          setLKColorS(true)
          setLKColorSE(true)
          setLKColorSI(true)
          setLKColorFI(true)
          setLKColorTH(true)
          setLKColorF(true)
        }
      },[LKColorE])
      let pages='courses';

      const [item ,setItem] =useState(data1)
      const filterItems =(catItem)=>{
        const updateItems = data1.filter((curItem)=>{
          return curItem.category === catItem
        })
        setItem(updateItems)
      }


  return (
    <>
    <section className='LK-courses-section2'>
    <div className='LK-courses-sec3-son1-Buttons'>
                <button onClick={()=>{LKchangcolorO();setItem(data1)}} className={LKColorO ? 'LK-courses-sec3-son1-button1' : 'LK-courses-sec3-son1-button'}>All Courses</button>
                <button onClick={()=>{LKchangcolorS();filterItems("one")}} className={LKColorS ? 'LK-courses-sec3-son1-button1' : 'LK-courses-sec3-son1-button'}>Kindergarten</button>
                <button onClick={()=>{LKchangcolorTH();filterItems("second")}} className={LKColorTH ? 'LK-courses-sec3-son1-button1' : 'LK-courses-sec3-son1-button'}>High School</button>
                <button onClick={()=>{LKchangcolorF();filterItems("therd")}} className={LKColorF ? 'LK-courses-sec3-son1-button1' : 'LK-courses-sec3-son1-button'}>College</button>
                <button onClick={()=>{LKchangcolorFI();filterItems("four")}} className={LKColorFI ? 'LK-courses-sec3-son1-button1' : 'LK-courses-sec3-son1-button'}>Computer</button>
                <button onClick={()=>{LKchangcolorSI();filterItems("five")}} className={LKColorSI ? 'LK-courses-sec3-son1-button1' : 'LK-courses-sec3-son1-button'}>Science</button>
                <button onClick={()=>{LKchangcolorSE();filterItems("six")}} className={LKColorSE ? 'LK-courses-sec3-son1-button1' : 'LK-courses-sec3-son1-button'}>Engineering</button>
                <button onClick={()=>{LKchangcolorE();filterItems("seven")}} className={LKColorE ? 'LK-courses-sec3-son1-button1' : 'LK-courses-sec3-son1-button'}>More Courses</button>
            
            </div>
            <div className='LK-courses-sec3-son2-father-h2'><h2 className='LK-courses-sec3-son2-h2'>Standard Classes</h2></div>
            <LKCards data1={item} pages={true}/>

        
        
    </section>



    </>
  )
}
