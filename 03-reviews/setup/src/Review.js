import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [idx, setIdx] = useState(0);
  const person = people[idx];

  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={person.image} alt={person.name}/>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{person.name}</h4>
      <p className='job'>{person.job}</p>
      <p className='info'>{person.text}</p>
      <button className='prev-btn' onClick={() => setIdx((idx + people.length - 1) % people.length)}>
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick={() => setIdx((idx + 1) % people.length)}>
        <FaChevronRight />
      </button>
      <br />
      <button className='random-btn' onClick={() => setIdx(Math.floor(Math.random() * people.length))}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
