import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store';

function TodoInput(): JSX.Element {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddTodo = (): void => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
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
        onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default TodoInput;