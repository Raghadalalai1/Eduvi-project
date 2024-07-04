import './Pricing.css'
import Navbarr from '../../components/Navbarr/Navbarr'
import Footer from '../../components/Footer/Footer'

import LKPricingSection2 from '../../components/LK-Pricing-Section2/LK-Pricing-Section2'
import Section from '../../components/Section/Section6'
import PropsHero from '../../components/PropsHero/PropsHero'
import imagepricing from '../../../public/images/Pricing/Pricing-Hero/pricing-hero.svg'

export default function Pricing() {
  return (
    <>
      <Navbarr />
      <div className='main'>

        <PropsHero id="Pricing"
          Home="Home"
          Shop="Pricing"
          Textclass="BKH-text-h4-page-hero"
          H1="Our Pre-ready Pricing Packages"
          Textmainclass="BKH-text-h1-page-pricing"
          image={imagepricing}
          imageclass="BKH-image-hero-page-pricing"
        />
        <LKPricingSection2 />
        <Section />

        <Footer />


      </div>

    </>
  )
}
