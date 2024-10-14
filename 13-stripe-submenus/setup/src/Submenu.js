import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context';

const Submenu = () => {
  const {page, isSubmenuOpen, location} = useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const {center, bottom} = location;
    container.current.style.left = `${center}px`
    container.current.style.top = `${bottom}px`
  }, [page]);

  return (
    <aside className={isSubmenuOpen ? 'submenu show' : 'submenu'} ref={container}>
      <section>
        <h4>{page.page}</h4>
        <div className='submenu-center'>
          {page.links.map((link, i) => {
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
