import React from 'react'
import KGCardsBooks from './../KGCardsBooks/KGCardsBooks'
import HSShopSection2 from '../HSShopSection2/HSSopSection2'

export default function Section2Shop() {
  return (
    <div className="" style={{display:'flex',width:'100%'}}>
      <div className=''>
        <KGCardsBooks KGTitle = {'Popular Books'} />
        <KGCardsBooks KGTitle = {'New Arrivals'} />
      </div>

      <HSShopSection2/>

    </div>
  )
}
