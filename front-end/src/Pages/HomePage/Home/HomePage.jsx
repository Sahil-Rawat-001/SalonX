import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import ImageCard from '../../../Components/imagecard/ImageCard.jsx'
import hairservice from '../../../assets/servicesImage/hairservice.jpg'
import nailservice from '../../../assets/servicesImage/nailservice.jpg'
import skincareservice from '../../../assets/servicesImage/skincareservice.jpg'
import waxing from '../../../assets/servicesImage/waxing.jpg'
import makeup from '../../../assets/servicesImage/makeup.jpg'
import '../Home/HomePage.css'


function HomePage() {
  return (
    <>
      <Header/>

      <main>
         
         {/* first container containing different services */}
         <div className="services-container">

          <p id='sub-title'>What are you looking for?</p>

          <div className="service-content-container">

            <ImageCard source={hairservice} serviceName="Hair Services" className="hairservicecard"/>
            <ImageCard source={nailservice} serviceName="Nail Services" className="nailservicecard"/>
            <ImageCard source={skincareservice} serviceName="Skin Care" className="skincarecard"/>
            <ImageCard source={waxing} serviceName="Waxing and Hair Removal" className="waxcard"/>
            <ImageCard source={makeup} serviceName="Makeup Services" className="makeupcard"/>
            <ImageCard source={hairservice} serviceName="Hair Services" className="hairservicecard"/>
            <ImageCard source={hairservice} serviceName="Hair Services" className="hairservicecard"/>
            <ImageCard source={nailservice} serviceName="Nail Services" className="nailservicecard"/>
            <ImageCard source={skincareservice} serviceName="Skin Care" className="skincarecard"/>
            <ImageCard source={waxing} serviceName="Waxing and Hair Removal" className="waxcard"/>
            <ImageCard source={makeup} serviceName="Makeup Services" className="makeupcard"/>
            <ImageCard source={hairservice} serviceName="Hair Services" className="hairservicecard"/>

          </div>

         </div>







      </main>

      <Footer/>
    </>
  )
}

export default HomePage