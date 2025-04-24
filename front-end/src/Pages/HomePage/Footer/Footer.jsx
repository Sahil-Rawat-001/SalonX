import React from 'react'
import '../Footer/Footer.css'
import logo from '../../../assets/logo.png'

function Footer() {
  return (
    <footer className='footer-main-container'>

      <div className="footer-content-container">

       <div className="left-footer-container">
           <div className="logo-name">
              <img src={logo} alt="logo" />
              <p>Salon-X</p>
            </div>
  
            <div className="salonx-desc">
              <p>SalonX offers a luxurious and innovative salon
                experience.Blending cutting-edge techniques with 
                personalized service to bring out the from every 
                client
              </p>
            </div>
       </div>

       {/* left side contents */}


       <div className="right-footer-container">
       <div className="links">
          <h4>Link</h4>
          <p>Unisex Services</p>
          <p>Women Services</p>
          <p>Men Services</p>
          <p>Our History</p>
          <p>Contact</p>
        </div>

        <div className="about">
          <h4>About</h4>
          <p>FAQ</p>
          <p>Contact us</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>

        <div className="contact">
          <h4>Contact</h4>
          <p>contact@salonx.com</p>
          <address>
            <p>+33 888 666 433</p>
            <p>Rishikesh, Uttarakhand</p>
            <p>19h00 - 17h00</p>
          </address>
  
        </div>
      </div>

       </div>

      <hr />

     <div className="copyright-container">
       <p>© 2024 Salon X. All rights reserved</p>
     </div>

    </footer>
  )
}

export default Footer