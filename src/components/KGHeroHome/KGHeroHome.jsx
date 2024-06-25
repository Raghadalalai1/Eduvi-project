import './KGHeroHome.css'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function KGHeroHome() {
  return (
    <>
    <div className='KG-HeroHome Metropolis-font' >
      <div className='KG-Hero-PartLeft'>
        <p className='KG-Paragraph'> Never Stop Learning </p>
        <h1>Grow up your skills by online courses with Eduvi</h1>
        <p className='KG-Paragraph-Eduvi'>Eduvi is a Global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the barriers togetting a degree.</p>
        <form className='KG-Form'>
          <select name='School' className='KG-Search-Select'>
            <option>Kindergarten</option>
            <option>option2</option>
            <option>option3</option>
          </select>
          <input type='search' placeholder=' Class/Course' className='Metropolis-font-thin'></input>
          <button>
            < FontAwesomeIcon icon={faMagnifyingGlass} className='KG-Search-Icon' />
            Search
          </button>
        </form>
      </div>
      <div className='KG-Hero-PartRight'>
        <img src='./public/images/Home/Home-Hero/BG.png' alt='background-hero' className='KG-Image-Background'></img>
        <img src='./public/images/Home/Home-Hero/schoolboy.png' alt='image-boy' className='KG-Image-Boy'></img>
        <div className='KG-Bg-Small-Image-Cubs'><img src='./public/images/Home/Home-Hero/four.svg' alt='image-cubs' className='KG-Image-cubs'></img></div>
        <div className='KG-Bg-Small-Image-Draw'><img src='./public/images/Home/Home-Hero/three.svg' alt='image-draw' className='KG-Image-draw'></img></div>
        <div className='KG-Bg-Small-Image-Light'><img src='./public/images/Home/Home-Hero/two.svg' alt='image-light' className='KG-Image-light'></img></div>
        <div className='KG-Bg-Small-Image-Book'><img src='./public/images/Home/Home-Hero/one.svg' alt='image-book' className='KG-Image-book'></img></div>
      </div>
    </div>

    </>
    
  )
}
