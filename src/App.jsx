import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import MyNavbar from './components/Navbar';
import OurServices from './components/OurServices';

const App = () => {
  return (
    <div className='App'>
      <MyNavbar/>
      <ContactUs/>
      <AboutUs/>
      <OurServices/>
      <Footer/>
    </div>
  );
};

export default App;