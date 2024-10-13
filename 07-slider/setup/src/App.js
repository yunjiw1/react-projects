import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [idx, setIdx] = useState(0);

  setTimeout(() => {
    setIdx((idx + 1) % data.length);
  }, 5000);

  return (
    <section className='section section-center'>
      <article>
        <FiChevronLeft className='prev' onClick={() => setIdx((idx + data.length - 1) % data.length)} />
        <img className='person-img' src={data[idx].image} alt={data[idx].name}/>
        <h4>{data[idx].name}</h4>
        <span className='title'>{data[idx].title}</span>
        <p className='text'>{data[idx].quote}</p>
        <FiChevronRight className='next' onClick={() => setIdx((idx + 1) % data.length)}/>
        <FaQuoteRight className='icon'/>
      </article>
    </section>
  );
}

export default App;
