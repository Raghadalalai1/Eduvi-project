
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './HSShopSection2.css'

export default function HSShopSection2() {
  return (

   <div className='HS-LeftSection'>
    <div className='HS-LeftSection-Button'>
      <button className='HS-Button1'>All Book</button>
      <button className='HS-Button2'>Kindergarten</button>
      <button className='HS-Button3'>High School</button>
      <button className='HS-Button4'>College</button>

    </div>

    <form className='HS-Form'>
      <div className='HS-input'>
      <input type='search' placeholder=' Serach Class, Course, Book Name'></input>
      <button>
      < FontAwesomeIcon icon={faMagnifyingGlass}  />
        </button>
        </div>
        <select name='School' className='HS-Search-Select'>
            <option>Sort by:<span>Latest</span> </option>
            <option>Sort by: oldest</option>
            
          </select>
      

    </form>


   </div>

  )
}
