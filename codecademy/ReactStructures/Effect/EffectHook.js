import React, { useState, useEffect } from 'react';

function PageTitle() {
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = `Hi, ${name}`;
  });

  return (
    <div>
      <p>Use the input field below to rename this page!</p>
      <input onChange={({target}) => setName(target.value)} value={name} type='text' />
    </div>
  );
}

// Clean Event Hook
//***************************************************
//***************************************************
import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  const increment = () => setClickCount((prev) => prev + 1);

  useEffect(() => {
    document.addEventListener('mousedown', increment);
    return () => {
      document.removeEventListener('mousedown', increment);
    };
  });

  return (
      <h1>Document Clicks: {clickCount}</h1>
  );
}
