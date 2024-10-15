import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [text, setText] = useState('# markdown preview')

  return (
    <main>
      <div className='markdown'>
        <textarea className='input' value={text} onChange={(e) => setText(e.target.value)}>
        </textarea>
        <div className='blockquote result'>
          <h1>{text.split("\n")[0]}</h1>
          <p>{text}</p>
        </div>
      </div>
    </main>
  );
}

export default App
