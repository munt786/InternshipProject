import './App.css'
import MyNavbar from './components/Navbar'
import Footer from './Components/Footer'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import ContactUs from './components/ContactUs'
import { Routes,Route } from 'react-router'
import OurStrength from './components/OurStrength'
// import AssociateCompanies from './components/AssociateCompanies'
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
          {/* <Route path='/associatecompanies' element={<AssociateCompanies/>}/> */}
          <Route path='/contactus' element={<ContactUs/>}/>
       </Routes>
      <Footer/>
    </>
  )
}
export default App