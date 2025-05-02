import React from 'react'
import './Footer.css'
function Footer(){
    return(
        <div className='footer-container'>
            <div>
                <h4>Quick Links</h4>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Strength</li>
                    <li>Companies</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h4>Address</h4>
                <p>Flat No. 301, Top floor,<br/>
                Dilip's Pride, Near Shiv Mandir,<br/>
                Mahesh Nagar, Nagpur - 440013</p>
            </div>
            <div>
                <h4>Contact Us</h4>
                <ul>
                    <li>+91 7720900997<br/>
                    +91 8087763182</li>
                    <li><a href="#">aakai.ap@gmail.com</a></li>
                </ul>
            </div>
            <div>
                <img src='/facebook.png'/>
                <img src='/instagram.png'/>
                <img src='/twitter.png'/>
            </div>
        </div>
    )
}
export default Footer;