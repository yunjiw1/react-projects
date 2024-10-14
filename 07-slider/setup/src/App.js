import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => {
      setIdx((idx + 1) % data.length);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [idx]);

  return (
    <section className='section'>
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {data.map((p, pIdx) => {
          var position = 'nextSlide';
          if (idx === pIdx) {
            position = 'activeSlide';
          }
          if (pIdx === (idx + data.length - 1) % data.length) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={p.id}>
              <img className='person-img' src={p.image} alt={p.name}/>
              <h4>{p.name}</h4>
              <p className='title'>{p.title}</p>
              <p className='text'>{p.quote}</p>
              <FaQuoteRight className='icon'/>
            </article>
          );
        })}

        <button className='prev' onClick={() => setIdx((idx + data.length - 1) % data.length)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIdx((idx + 1) % data.length)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
