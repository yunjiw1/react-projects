import React from 'react';

const Menu = ({ items }) => {
  return (
    <section className='section-center menu-item'>
      {items.map((c) => {
        return (
          <div key={c.id} className='item-info'>
            <img className='photo' src={c.img}/>
            <header>
              <h4>{c.title}</h4>
              <h4 className='price'>{c.price}</h4>
            </header>
            <p className='item-text'>{c.desc}</p>
          </div>
        )
      })}
    </section>
  );
};

export default Menu;
