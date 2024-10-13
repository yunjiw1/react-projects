import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [category, setCategory] = useState("All");

  return (
    <main>
      <Categories setCategory={setCategory}/>
      <Menu items={items.filter((d) => category === "All" || d.category.toLowerCase() === category.toLowerCase())} />
    </main>
  );
}

export default App;
