import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { AppContext } from './context'

const Sidebar = () => {
  const {isSidebarOpen, setIsSidebarOpen} = React.useContext(AppContext);

  return (
    <div className={isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}>
      <div className='sidebar'>
        <button className='close-btn' onClick={() => setIsSidebarOpen(false)}> <FaTimes /> </button>
          {sublinks.map((sublink) => {
            return (
              <>
                <h4>{sublink.page}</h4>
                <article className='sidebar-sublinks'>
                  {sublink.links.map((link, i) => {
                    return <a key={i} href={link.url}>{link.icon}{link.label}</a>
                  })}
                </article>
              </>)
          })}
      </div>
    </div>
  );
}

export default Sidebar
