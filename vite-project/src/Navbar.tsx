import React from 'react'
import Logo from './assets/Logo.svg'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <img src={Logo} alt="logo rockete figure" />
    </div>
  )
}

export default Navbar