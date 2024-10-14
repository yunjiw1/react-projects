import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import sublinks from './data'
import { AppContext } from './context'

const Navbar = () => {
  const {setPage, setIsSubmenuOpen, setIsSidebarOpen} = React.useContext(AppContext)

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo}></img>
          <button className='btn' onClick={() => setIsSidebarOpen(true)}> <FaBars/> </button>
        </div>
        <ul className='nav-links'>
          {sublinks.map((link, i) => {
            return (
              <li>
                <button 
                  className='link-btn' 
                  onMouseEnter={() => {
                    setIsSubmenuOpen(true);
                    setPage(i);
                  }}
                  onMouseLeave={() => {
                    setIsSubmenuOpen(false);
                  }}>
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
