import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img className='logo' src={logo} alt='logo' />
        </Link>
        <div className='nav-links'>
          <Link to='/'> Home </Link>
          <Link to='/about'> About </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar
