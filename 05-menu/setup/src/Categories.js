import React from 'react';

const Categories = ({ setCategory }) => {
  const filters = ["All", "Breakfast", "Lunch", "Shakes"];

  return (
    <section className='menu'>
      <h2 className='title'>Our Menu</h2>
      <div className='underline' />
      <div className='btn-container'>
        {filters.map((b) => <button key={b} className='filter-btn' onClick={(e) => {setCategory(b)}}>{b}</button>)}
      </div>
    </section>
  );
};

export default Categories;
