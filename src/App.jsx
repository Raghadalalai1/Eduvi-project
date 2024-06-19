import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BecomeAnInstructor from './pages/BecomeAnInstructor/BecomeAnInstructor';
import Home from './pages/Home/Home';
import Shope from './pages/Shope/Shope';
import Courses from './pages/Courses/Courses';
import CoursesDetalis from './pages/CoursesDetalis/CoursesDetalis';
import Pricing from './pages/Pricing/Pricing';
import SingleMonetorDetalis from './pages/SingleMonetorDetalis/SingleMonetorDetalis';
import OurMonetors from './pages/OurMonetors/OurMonetors';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import { Route, Routes } from 'react-router-dom';



function App() {


  return (
    <>
    <Routes >
    
      <Route path='/' element={<Home/>}/>
      <Route path='/shope' element={<Shope/>}/>
      <Route path='/courses' element={<Courses/>} />
      <Route path='/login' element={<LogIn/>} />
      <Route path='/pricing' element={< Pricing/>} />
      <Route path='/SingleMonetorDetalis' element={< SingleMonetorDetalis />} />
      <Route path='/SignUp' element={<SignUp/>} />
      <Route path='/OurMonetors' element={<OurMonetors/>} />
      <Route path='/BecomeAnInstructor' element={<BecomeAnInstructor/>} />
      <Route path='/CoursesDetalis' element={<CoursesDetalis/>} />
      
    </Routes>
    
   
      

    </>
  )
}

export default App
