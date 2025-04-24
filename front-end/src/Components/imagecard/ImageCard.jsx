import React from 'react'
import '../imagecard/ImageCard.css'

function ImageCard({source,serviceName, className}) {
  return (
    <div className={`service-card ${className}`}>

        <img src={source} alt={serviceName} />
        <p className="service">{serviceName}</p>
    </div>
  )
}

export default ImageCard