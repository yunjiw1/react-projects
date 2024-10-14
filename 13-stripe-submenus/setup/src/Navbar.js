import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();

  const displaySubmenu = (e) => {
    console.log("hello");
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  }

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo}></img>
          <button className='btn toggle-btn' onClick={openSidebar}> <FaBars/> </button>
        </div>
        <ul className='nav-links'>
          {sublinks.map((link, i) => {
            return (
              <li key={i}>
                <button 
                  className='link-btn' 
                  onMouseEnter={displaySubmenu}
                  onMouseLeave={closeSubmenu}>
                  {link.page}
                </button>
              </li>
            )
          })}
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
