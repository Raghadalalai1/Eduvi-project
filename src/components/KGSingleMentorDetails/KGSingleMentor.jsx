import React, { useEffect, useState } from 'react'
import './KGSingleMentor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useParams } from 'react-router-dom'
import {dataTeacher} from '../LK-OurMonetors-Section2/LK-OurMentors-section2.jsx'
export default function KGSingleMentor() {

    
    
    const {id} = useParams();
    const item = dataTeacher.find((i)=>i.id == id)

    // tabs 
    
    const [LKColorO,setLKColorO] =useState(false)
    const [LKColorS,setLKColorS] =useState(true)
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
   const LKAboutDataO=[
       {id:'1'
       ,head1:'About'
       ,par1:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.`
       ,head2:'Certification'
       ,par2:' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis consectetur adipiscing elit.'}]
   const LKAboutDataS=[
       {id:'2'
       ,head1:'Riview'
       ,par1:'Together for a bright future, hand in hand with Focal-x Academy'
       ,head2:'Certification'
       ,par2:`Developer Team Lead--
              Full-Stack Web Developer--
              MERN-STACK--
              FrontEnd-Developer--
              Larvel, Django, React, Vue, Nood.js---
              +100k followers`
       }
   ]
   const LKAboutDataTH=[
       {id:'3'
       ,head1:'courses'
       ,par1:`we have alot of courses we can give to you:
       -Design
       -Ui/Ux
       -Fullter Beg
       -Fullter Adv
       -Front-end Beg
       -Front-end Adv
       -Back-end Beg
       -Back-end Adv
       -Mern-stack Adv`
       ,head2:'Certified trainer in'
       ,par2:`X-Academy`
       }
   ]
   const [LKAboutData,setLKAboutData]=useState(LKAboutDataO)


  
  return (
    < >
        <div className='KG-Sigle-Mentor-Hero'>
            <p className='KG-Single-Path'>Home | Mentor | <span> Kristin Watson </span></p>
        </div>

            <div className='KG-Single-Mentor-LeftPart'>
                <div className='KG-Single-Mentor-Second'>
                    <div className='KG-Single-Mentor-Part1'>
                        <img src={item.img} alt='KG-Image-Single-Hero'></img>
                        <div className='KG-Single-Part-Name'>
                            <h4 className='KG-Single-Name'>{item.h5}</h4>
                            <p className='KG-Single-Paraghraph1'>Founder & Mentor</p>
                        </div>
                    </div>
                    <div className='KG-Single-Part2'>
                        <button className='KG-Single-Button'>Contact Now</button>
                        <div className='KG-Single-Card'>
                            <div className='KG-Single-Card-AllParts'>
                                <p className='KG-Single-Card-LeftPart'>Total Course</p>
                                <p className='KG-Single-Number'>30</p>
                            </div>
                            <div className='KG-Single-Card-AllParts'>
                                <p className='KG-Single-Card-LeftPart'>Ratings</p>
                                <p>
                                    < FontAwesomeIcon icon={faStar} className='KG-Single-Single'/>
                                    <span className='KG-Single-Card-Info-Rating'> 4.9( <span className='KG-Single-Number2'>{item.span}</span>)</span>
                                </p>
                            </div>
                            <div className='KG-Single-Card-AllParts'>
                                <p className='KG-Single-Card-LeftPart'>Experiences</p>
                                <p className=' KG-Single-Card-RightPart'>10 Years</p>
                            </div>
                            <div className='KG-Single-Card-AllParts'>
                                <p className='KG-Single-Card-LeftPart'>Grauduated</p>
                                <p className='KG-Single-Card-RightPart'>Yes</p>
                            </div>
                            <div className='KG-Single-Card-AllParts'>
                                <p className='KG-Single-Card-LeftPart'>Language</p>
                                <p className='KG-Single-Card-RightPart'>English, French</p>
                            </div>
                            <div className='KG-Single-Card-AllParts'>
                                <p className='KG-Single-Card-LeftPart'>Social</p>
                                <div className='KG-Single-Social'>
                                    <div className='RA-rounded'><FontAwesomeIcon icon={faFacebookF} className='KG-Single-Social-Icon'/></div>
                                    <div className='RA-rounded'><FontAwesomeIcon icon={faInstagram} className='KG-Single-Social-Icon' /></div>
                                    <div className='RA-rounded'><FontAwesomeIcon icon={faTwitter} className='KG-Single-Social-Icon' /></div>
                                    <div className='RA-rounded'><FontAwesomeIcon icon={faLinkedin} className='KG-Single-Social-Icon' /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='KG-Single-BottomPart'>
                    <div className='KG-Single-Collection-Buttons'>
                    <button onClick={()=>{LKchangcolorO(); setLKAboutData(LKAboutDataO)}} className={LKColorO ? 'LK-home-sec3-son1-button1' : 'LK-home-sec3-son1-button'}>About</button>
                        <button onClick={()=>{LKchangcolorS(); setLKAboutData(LKAboutDataS)}} className={LKColorS ? 'LK-home-sec3-son1-button1' : 'LK-home-sec3-son1-button'}>Review</button>
                        <button onClick={()=>{LKchangcolorTH(); setLKAboutData(LKAboutDataTH)}} className={LKColorTH ? 'LK-home-sec3-son1-button1' : 'LK-home-sec3-son1-button'}>Course</button>
                    </div>
                    {LKAboutData.map(items=>{
                        return(
                            <div key={items.id}>
                            <div className='KG-Single-About' key={items.id}>
                                <h3 className='KG-Single-InfoName'>{items.head1} {item.h5}</h3>
                                <p className='KG-Single-InfoParagraph'>{items.par1}</p>
                                </div>
                                <div>
                                    <h3 className='KG-Single-InfoName'>{items.head2}</h3>
                                    <p className='KG-Single-InfoParagraph'>{items.par2}</p>
                                </div> 

                            </div>

                        )
                    })}
                </div>
        </div>

    </>

  )
}
