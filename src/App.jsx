import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import MyNavbar from './components/Navbar';

const App = () => {
  return (
    <div className='App'>
      <MyNavbar/>
      <div className='container'>
        <h1 className='text-center'>Contact Form</h1>
        <ContactUs />
      </div>
      <AboutUs/>
      <Footer/>
    </div>
  );
};

export default App;