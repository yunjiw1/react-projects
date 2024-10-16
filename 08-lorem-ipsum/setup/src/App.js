import React, { useState } from 'react';
import data from './data';

function App() {
  const [num, setNum] = useState(0);

  function onSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    setNum(parseInt(data.get("num")));
  }

  return (
    <main>
      <section className='section-center'>
        <h3>tired of boring lorem ipsum?</h3>
        <form className='lorem-form' method='GET' onSubmit={onSubmit}>
          <label htmlFor='num'>Paragraphs</label>
          <input 
            type='number' 
            id="num" 
            name="num" 
            defaultValue='1' 
            max={data.length} 
            min='1' />
          <button className='btn'>Generate</button>
        </form>
        <article className='lorem-text'>
          {data.slice(0, num).map((p, i) => <p key={i}>{p}</p>)}
        </article>
      </section>
    </main>
  )
}

export default App;
