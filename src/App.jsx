import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <h1 className='text-center'>Contact Form</h1>
        <ContactUs />
      </div>
      <AboutUs/>
    </div>
  );
};

export default App;

