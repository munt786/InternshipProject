// ContactUs.jsx with inline SVG watermarks
import { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-details">
          {/* Bakery icon watermark as inline SVG */}
          <svg 
            className="watermark details-watermark" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"
          >
            <path d="M256 32C192.7 32 134.6 61 96 106.8 57.4 61 0 32 0 32v384h512V32c0 0-57.4 29-96 74.8C377.4 61 319.3 32 256 32zm0 32c51.9 0 98.7 25.9 128 68.3V416H128V132.3c29.3-42.4 76.1-68.3 128-68.3zm-160 48c-13.7 0-27.3 2.9-40 8.7V416H16V120.7c13.6-4.5 26.5-8.7 40-8.7 24.1 0 47.6 10.5 64 28.8v32c-16.4-18.3-39.9-28.8-64-28.8zm320 0c-24.1 0-47.6 10.5-64 28.8v-32c16.4-18.3 39.9-28.8 64-28.8 13.5 0 26.4 4.2 40 8.7V416h-40V120.7c-12.7-5.8-26.3-8.7-40-8.7z" />
          </svg>
          
          <div className="content">
            <h3>Get in Touch</h3>
            <p><strong>Location:</strong><center> PLOT NO: 1 & 2, FLAT NO -301, DILIP’S PRIDE, NIWARA COOPERATIVE HOUSING SOCIETY, NEAR SHIV
TEMPLE, MAHESH NAGAR (NEAR ANANT NAGAR)
NAGPUR-440013 (MAHARASHTRA, INDIA)</center></p>
            <p><strong>Email:</strong> aakaaiquality@gmail.com</p>
            <p><strong>Phone:</strong> 7720900997, 9552555639</p>
            <p><strong>Business Hours:</strong></p>
            <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
            <p>Sat - Sun: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
        
        <div className="contact-form">
          {/* Email/contact icon watermark as inline SVG */}
          <svg 
            className="watermark form-watermark" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"
          >
            <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
          </svg>
          
          <div className="content">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />

              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />

              <label htmlFor="phone">Phone:</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />

              <label htmlFor="message">Message:</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                value={formData.message}
                onChange={handleChange}
                required 
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;