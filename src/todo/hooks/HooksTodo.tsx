import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { Todo } from '../../types';

function HooksTodo(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn React Hooks', completed: false },
    { id: 2, text: 'Compare with Redux', completed: false }
  ]);
  const [inputValue, setInputValue] = useState<string>('');

  const addTodo = (): void => {
    if (inputValue.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="todo-app">
      <div className="add-todo">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a todo..."
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-list">
        {todos.map(todo => (
          <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HooksTodo;