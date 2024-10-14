import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { AppContext } from './context'

const Sidebar = () => {
  const {isSidebarOpen, toggleSidebar} = React.useContext(AppContext)

  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-header'>
        <img src={logo} className="logo" alt="image" />
        <button className='close-btn' onClick={toggleSidebar}>
          <FaTimes /> 
        </button>
      </div>

      <ul className='links'>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className='social-icons'>
        {social.map((link) => {
          return (
            <li>
              <a href={link.url}>
                {link.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar
