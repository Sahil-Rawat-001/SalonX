import React from 'react'
import {FaSearch} from 'react-icons/fa'
import '../SearchBar/SearchBar.css'

function SearchBar({placeholder}) {
  return (
    <div className='searchbar-input-wrapper'>
        <FaSearch id='search-icon'/>
        <input type="text" placeholder={placeholder} />
    </div>
  )

}

export default SearchBar
