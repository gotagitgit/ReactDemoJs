import React, { useState, useEffect } from 'react';

function HookCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="counter">
      <p>Hello {name || 'Anonymous'}!</p>
      <input 
        type="text" 
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Count: {count}</h3>
      <div className="buttons">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default HookCounter;