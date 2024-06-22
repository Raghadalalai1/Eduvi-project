import React from 'react'
import KGCardsBooks from './../KGCardsBooks/KGCardsBooks'
import HSShopSection2 from '../HSShopSection2/HSSopSection2'

export default function Section2Shop() {
  return (
    <div className="row">
      <div className='col-xl-4  col-lg-4 col-m-6 col-sm-12'>
        <KGCardsBooks KGTitle = {'Popular Books'} />
        <KGCardsBooks KGTitle = {'New Arrivals'} />
      </div>

      <div className='col-xl-8  col-lg-8 col-m-6 col-sm-12 '>
      <HSShopSection2/>
      </div>


      

    </div>
  )
}
