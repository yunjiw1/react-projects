import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <div className='container'>
        <h3>Questions</h3>
        <section className='info'>
          {data.map(q => <SingleQuestion key={q.id} question={q} />)}
        </section>
      </div>
    </main>
  );
}

export default App;
