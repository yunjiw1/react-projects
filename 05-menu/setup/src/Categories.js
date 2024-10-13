import React from 'react';

const Categories = ({ setCategory }) => {
  const filters = ["All", "Breakfast", "Lunch", "Shakes"];

  return (
    <div className='btn-container'>
      {filters.map((category, idx) => { 
        return (<button 
          key={idx} 
          className='filter-btn' 
          onClick={() => {setCategory(category)}}>
            {category}
        </button>);
      })}
    </div>
  );
};

export default Categories;
