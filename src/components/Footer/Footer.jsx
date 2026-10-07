// import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>
              Good food should feel effortless. We bring your favourite flavours closer to you, 
              so you can spend less time searching and more time enjoying every bite.
            </p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" className="src" />
              <img src={assets.twitter_icon} alt="" className="src" />
              <img src={assets.linkedin_icon} alt="" className="src" />
            </div>
        </div>
        <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Delivery</li>
                  <li>Privacy Policy</li>
                
                </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2026 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
