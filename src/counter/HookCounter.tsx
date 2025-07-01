import React, { useState, useEffect, ChangeEvent } from 'react';

function HookCounter(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');

  const increment = (): void => setCount(count + 1);
  const decrement = (): void => setCount(count - 1);
  const reset = (): void => setCount(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  return (
    <div className="counter">
      <p>Hello {name || 'Anonymous'}!</p>
      <input 
        type="text" 
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
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