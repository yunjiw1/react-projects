import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext();

  return (
    <div className={isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}>
      <div className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}> <FaTimes /> </button>
          {sublinks.map((sublink, i) => {
            return (
              <div key={i}>
                <h4>{sublink.page}</h4>
                <article className='sidebar-sublinks'>
                  {sublink.links.map((link, i) => {
                    return <a key={i} href={link.url}>{link.icon}{link.label}</a>
                  })}
                </article>
              </div>)
          })}
      </div>
    </div>
  );
}

export default Sidebar
