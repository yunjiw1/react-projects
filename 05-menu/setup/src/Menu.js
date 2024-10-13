import React from 'react';

const Menu = ({ items }) => {
  return (
    <section className='section-center'>
      {items.map((item) => {
        return (
          <article key={item.id} className='menu-item'>
            <img className='photo' src={item.img} alt={item.title}/>
            <div className='item-info'>
              <header>
                <h4>{item.title}</h4>
                <h4 className='price'>{item.price}</h4>
              </header>
              <p className='item-text'>{item.desc}</p>
            </div>
          </article>
        )
      })}
    </section>
  );
};

export default Menu;
