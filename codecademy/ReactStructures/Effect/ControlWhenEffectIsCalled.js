import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); //Adding [] here will make useEffect be called after the component’s first render

  const handleChange = ({ target }) => setName(target.value);

  return (
    <>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} type='text' />
    </>
  );
}
