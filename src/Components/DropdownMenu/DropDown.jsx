import React,{ useState } from 'react'
import '../DropdownMenu/DropDown.css'
import location from '../../assets/logolocation.png'




  


function DropDown() {

  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [isOpen, setIsOpen] = useState(false);
  
  const locations = ["India", "Dubai", "London", "Belgium", "Germany", "Paris", "Tokyo"];

  function handleSelectedLocation(location){

    setSelectedLocation(location);
    setIsOpen(false);
  }

  function handleClick(){
    setIsOpen(!isOpen);
  }

  return (

    <div className="dropdown-container">

        <div className="dropdown-header" onClick={handleClick}>
            <img src={location} alt="img" />
            {/* <i className="fa-solid fa-location-dot"></i> */}
            <p>{selectedLocation}</p>
            <span className='arrow'>&#11167;</span>
        </div>

        {isOpen && (

            <ul className="dropdown-list">
                {locations.map((location,index) => (

                    <li key={index} value={location} className="dropdown-item"
                    onClick={() => handleSelectedLocation(location)}
                    >
                        {location}
                    </li>
                ))}
            </ul>
        )}


    </div>
  )
}

export default DropDown