import React from 'react'


import './LK-Card.css'
import { Link } from 'react-router-dom'


export default function LKCards({ data1, pages }) {
  return (
    <>

      <div className={pages ? 'LK-COURSES' : 'LK-CARDS'}>
        {data1.map(item => {
          return (<div className={pages ? 'LK-corses-son' : 'LK-Card-son '} key={item.id}>
            <img className='LK-card-img' src={item.img} />
            <h4 className='LK-card-h4'>{item.h4}</h4>
            <p className='LK-card-par'>{item.par}</p>
            <Link to={'/CoursesDetalis'}>  <button className='LK-card-Button'>{item.button}</button></Link>
           


          </div>)
        })}


        {/* {!lkcards && datas.map(item =>{
        return(<div className='LK-Card-son ' key={item.id}>  
            <img className='LK-card-img' src={item.img} /> 
            <h4 className='LK-card-h4'>{item.h4}</h4>
            <p className='LK-card-par'>{item.par}</p>
            <button className='LK-card-Button'>{item.button}</button>
          
          
        </div>)})} */}

        {/* {dataTH.map(item =>{
        return(<div className='LK-Card-son ' key={item.id}>  
            <img className='LK-card-img' src={item.img} /> 
            <h4 className='LK-card-h4'>{item.h4}</h4>
            <p className='LK-card-par'>{item.par}</p>
            <button className='LK-card-Button'>{item.button}</button>
          
          
        </div>)})} */}

      </div>








    </>
  )
}
