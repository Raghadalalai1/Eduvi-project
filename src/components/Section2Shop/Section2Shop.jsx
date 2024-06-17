import React from 'react'
import KGCardsBooks from './../KGCardsBooks/KGCardsBooks'

export default function Section2Shop() {
  return (
    <div className='RA-S2-Shop'>
      <div>
        <KGCardsBooks KGTitle = {'Popular Books'} />
        <KGCardsBooks KGTitle = {'New Arrivals'} />
      </div>
      
    </div>
  )
}
