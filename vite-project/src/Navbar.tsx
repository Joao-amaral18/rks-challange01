import React from 'react'
import Logo from './assets/Logo.svg'
import './Navbar.css'

function Navbar() {
  return (
    <header className='navbar'>
        <img src={Logo} alt="logo rockete figure" />
    </header>
  )
}

export default Navbar