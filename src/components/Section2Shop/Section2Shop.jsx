import React from 'react'
import KGCardsBooks from './../KGCardsBooks/KGCardsBooks'
import HSShopSection2 from '../HSShopSection2/HSSopSection2'

export default function Section2Shop() {
  return (
    <div className='RA-S2-Shop'>
      <div>
        <KGCardsBooks KGTitle = {'Popular Books'} />
        <KGCardsBooks KGTitle = {'New Arrivals'} />
      </div>
      <div>
      <HSShopSection2/>
      </div>
    </div>
  )
}
