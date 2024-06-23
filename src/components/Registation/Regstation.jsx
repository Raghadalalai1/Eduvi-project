import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Regstation.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'



export default function Registation() {
  return (
    <>
    <div className=' HS-Regst '>
        <div className=' HS-Regst-left'>
        <Button className='HS-Regst-button' variant="secondary">College Level</Button>
        <div className='HS-Regst-title'>
        <h1 className='HS-Regst-h1' >Don’t waste time in
              COVID-19 pandemic.
              Develop your skills.</h1>
        <p className='HS-Regst-pargraph'>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized
         meaning for high-definition, generally any video.</p>
         </div>
         <Link to={'/login'}><Button className='HS-Regst-button2' variant="secondary">Registation Now</Button></Link>
         
        </div>

        <div className='HS-Regst-Right'>
            
          
           <img className='student-image' src="./public/images/Home/Home-section5/section5-Image.png" alt='Sorry , the photo wasn`t uploaded '></img>
         
       
        </div>
<div className='HS-icon1'>        
<img  src="./public/images/Home/Home-section5/azcoffe.png" alt='Sorry , the photo wasn`t uploaded '/>
</div>
<div className='HS-icon2'>        
<img  src="./public/images/Home/Home-section5/php.png" alt='Sorry , the photo wasn`t uploaded '/>
</div>
<div className='HS-icon3'>        
<img  src="./public/images/Home/Home-section5/html.png" alt='Sorry , the photo wasn`t uploaded '/>
</div>

    </div>
    

    
    </>
  )
}
