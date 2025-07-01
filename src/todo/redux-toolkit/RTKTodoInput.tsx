import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { addTodo } from './todoSlice';

function RTKTodoInput(): JSX.Element {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddTodo = (): void => {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a todo..."
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default RTKTodoInput;