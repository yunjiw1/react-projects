import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [category, setCategory] = useState("All");

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline' />
        </div>
        <Categories setCategory={setCategory}/>
        <Menu items={items.filter((d) => category === "All" || d.category.toLowerCase() === category.toLowerCase())} />
      </section>
    </main>
  );
}

export default App;
