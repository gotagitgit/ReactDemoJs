import React, { useState } from 'react';

interface InputWrapperProps {
  onAddTodo: (text: string) => void;
}

function InputWrapper({ onAddTodo }: InputWrapperProps): JSX.Element {
  const [inputValue, setInputValue] = useState<string>('');

  const handleAdd = (): void => {
    if (inputValue.trim()) {
      onAddTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a todo..."
        onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default InputWrapper;