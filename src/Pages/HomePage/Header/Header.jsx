import logo from '../../../assets/logo.png'
import '../Header/Header.css'
import DropDown from '../../../Components/DropdownMenu/DropDown.jsx'
import SearchBar from '../../../Components/SearchBar/SearchBar'
import shoppingBagCart from '../../../assets/shoppingBag.png'
import manLogo from '../../../assets/man.png'
import { useState } from 'react'

function Header() {

  const [cartItem, setCartItem] = useState(0);

  function handleClick(){

    setCartItem(prevCartItem => prevCartItem + 1);
  }



  return (

    <header className="header">


      <div className="main-container">


        {/* logo and brand name container */}
        <div className="header-left">

          <img src={logo} alt="logo" />
          <p>Salon-X</p>
         </div>


        {/* location dropdown and search bar */}
        <div className="header-middle">
           
          {/* Location Dropdown */}
          <div className="location-dropdown-container">
           <DropDown/>
          </div>

          {/* SearchBar */}
          <div className="searchbar-container">
           <SearchBar placeholder="Search for salon,services..."/>
          </div> 
        </div>


        {/* cart logo and cart button, signin logo and sign in button */}
         <div className="header-right">

            <div className="cart-logo-title">

              {/* badge for cart item */}
              {cartItem > 0 && <span className='cart-badge'>{cartItem}</span> }

              <img onClick={handleClick} src={shoppingBagCart} alt="logo" />
              <p>Cart</p>


            </div>

            <div className="signin-logo-title">

              <p>Sign In</p>
              <img src={manLogo} alt="logo" />
            </div>

         </div>
        





      </div>
    </header>
  )
}

export default Header