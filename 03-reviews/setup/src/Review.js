import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [idx, setIdx] = useState(0);
  const person = people[idx];

  return (
    <section className='container review'>
      <div className='img-container'>
        <img className='person-img' src={person.image} />
        <h3 className='quote-icon'>,,</h3>
      </div>
      <h3 className='author'>{person.name}</h3>
      <h4 className='job'>{person.job}</h4>
      <p className='info'>{person.text}</p>
      <button className='prev-btn' onClick={() => setIdx((idx + people.length - 1) % people.length)}>{"<"}</button>
      <button className='next-btn' onClick={() => setIdx((idx + 1) % people.length)}>{">"}</button>
      <br />
      <button className='random-btn' onClick={() => setIdx(Math.floor(Math.random() * people.length))}>Surprise Me</button>
    </section>
  );
};

export default Review;
