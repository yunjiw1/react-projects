import React, { useState, useRef, useEffect } from 'react'
import { AppContext } from './context';
import sublinks from './data';

const Submenu = () => {
  const {page, isSubmenuOpen} = React.useContext(AppContext);

  return (
    <aside className={isSubmenuOpen ? 'submenu show' : 'submenu'}>
      <section>
        <h4>{sublinks[page].page}</h4>
        <div className='submenu-center'>
          {sublinks[page].links.map((link, i) => {
            return (
              <a key={i} href={link.url}>
                {link.icon}
                {link.label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
}

export default Submenu
