import KGCardsBooks from './../KGCardsBooks/KGCardsBooks'
import HSShopSection2 from '../HSShopSection2/HSSopSection2'
import './Section2Shop.css'

export default function Section2Shop() {
  return (
    <div className='RA-section2shop' >
      <div>
        <KGCardsBooks KGTitle={'Popular Books'} />
        <KGCardsBooks KGTitle={'New Arrivals'} />
      </div>

      <HSShopSection2 />

    </div>
  )
}
