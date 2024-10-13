import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({question}) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className='question'>
      <header>
        <h4>{question.title}</h4>
        <button className='btn' onClick={() => setExpand(!expand)}>
          {!expand && <AiOutlinePlus />}
          {expand && <AiOutlineMinus />}
        </button>
      </header>
      {expand && <p>{question.info}</p>}
    </div>
  );
};

export default Question;
