import './App.css'
import MyNavbar from './components/Navbar'
import Footer from './Components/Footer'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import ContactUs from './components/ContactUs'
import { Routes,Route } from 'react-router'
import OurStrength from './components/OurStrength'
import Associates from './components/Associates'
import Testing from './components/Testing'
import Consultancy from './components/Consultancy'


function App() {

  return (
    <>
      <MyNavbar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/ourservices' element={<OurServices/>}/>
          <Route path='/ourstrength' element={<OurStrength/>}/>
          <Route path='/company1' element={<Associates/>}/>
          <Route path='/company2' element={<Testing/>}/>
          <Route path='/company3' element={<Consultancy/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
       </Routes>
      <Footer/>
    </>
  )
}

export default App