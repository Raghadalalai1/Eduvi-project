import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import priceTag from './../../../public/images/Pricing/Pricing-section2/price-tag.svg'
import './LK-Pricing-Section2.css'
import React from 'react'

export default function LKPricingSection2() {
    let cardData = [
    {id:'1',
    h4:'Basic Pack',
    liO:['3 HD video lessons & tutorials','1 Official exam','100 Practice questions','1 Month subscriptions','1 Free book','Practice quizes & assignments','In depth explanations','Personal instructor Assitance'],
    liT:[<FontAwesomeIcon className='LK-Pricing-icon-check' icon={faCircleCheck} />,<FontAwesomeIcon className='LK-Pricing-icon-close' icon={faCircleXmark}/>,<FontAwesomeIcon className='LK-Pricing-icon-close' icon={faCircleXmark}/>],
    lith:[false,false,false],
    h3:'200'},
    ,{id:'2',
    h4:'Standard Pack',
    liO:['8 HD video lessons & tutorials','2 Official exam','200 Practice questions','1 Month subscriptions','3 Free book','Practice quizes & assignments','In depth explanations','Personal instructor Assitance'],
    liT:[<FontAwesomeIcon className='LK-Pricing-icon-check' icon={faCircleCheck} />,<FontAwesomeIcon className='LK-Pricing-icon-check' icon={faCircleCheck} />,<FontAwesomeIcon className='LK-Pricing-icon-close' icon={faCircleXmark}/>],
    lith:[true,false,false],
    h3:'600'}
    ,{id:'3',
    h4:'Premium Pack',
    liO:['15 HD video lessons & tutorials','3 Official exam','300 Practice questions','1 Month subscriptions','5 Free book','Practice quizes & assignments','In depth explanations','Personal instructor Assitance'],
    liT:[<FontAwesomeIcon className='LK-Pricing-icon-check' icon={faCircleCheck} />,<FontAwesomeIcon className='LK-Pricing-icon-check' icon={faCircleCheck} />,<FontAwesomeIcon className='LK-Pricing-icon-check' icon={faCircleCheck} />],
    lith:[true,true,true],
    h3:'1200'}
        ]
  return (
   <>
   <section className='LK-pricing-section2'>
    <div className='LK-pricing-sec2-son1'>
        <h2 className='LK-pricing-sec2-son1-h2'>We create a monthly pricing package for all standard students</h2>
        <p className='LK-pricing-sec2-son1-par'>Basically we create this package for those who are really interested and get benifited from our courses or books.<span className='LK-temporary-solution'> We want to make a low cost package for them. So that they can purchase any courses with the package they buy from us. Also will get free books from every packages.</span></p>
    </div>
    <div className='LK-pricing-sec2-sonT-card-F'>
        {cardData.map(elemnt =>{
            return(<div className='LK-pricing-sec2-sonT-card-S' key={elemnt.id}>
                <img className='LK-pricing-sec2-icon-priceTag' src={priceTag} />
                <h4 className='LK-pricing-sec2-sonT-h4'>{elemnt.h4}</h4>
                <ul className ='LK-pricing-sec2-sonT-ul'>
                    <li className="LK-pricing-sec2-sonT-li">{elemnt.liT[0]}{elemnt.liO[0]}</li>
                    <li className="LK-pricing-sec2-sonT-li">{elemnt.liT[0]}{elemnt.liO[1]}</li>
                    <li className="LK-pricing-sec2-sonT-li">{elemnt.liT[0]}{elemnt.liO[2]}</li>
                    <li className="LK-pricing-sec2-sonT-li">{elemnt.liT[0]}{elemnt.liO[3]}</li>
                    <li className="LK-pricing-sec2-sonT-li">{elemnt.liT[0]}{elemnt.liO[4]}</li>
                    <li className={elemnt.lith[0] ? 'LK-pricing-sec2-sonT-li' : 'LK-pricing-sec2-sonT-close-li'}>{elemnt.liT[1]}{elemnt.liO[5]}</li>
                    <li className={elemnt.lith[1] ? 'LK-pricing-sec2-sonT-li' : 'LK-pricing-sec2-sonT-close-li'}>{elemnt.liT[2]}{elemnt.liO[6]}</li>
                    <li className={elemnt.lith[2] ? 'LK-pricing-sec2-sonT-li' : 'LK-pricing-sec2-sonT-close-li'}>{elemnt.liT[2]}{elemnt.liO[7]}</li>
                    
                </ul>
                <h3 className='LK-pricing-sec2-sonT-price-h3'><span className='LK-pricing-sec2-sonT-price-dolar'>$</span>{elemnt.h3}</h3>
                <button className='LK-pricing-sec2-sonT-button'>Purchase Course</button>
                </div>)
        }) }
    </div>










   </section>
   </>
 )
}
