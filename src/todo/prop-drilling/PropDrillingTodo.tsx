import React, { useState } from 'react';
import { Todo } from '../../types';
import InputContainer from './InputContainer';
import StatsContainer from './StatsContainer';
import ListContainer from './ListContainer';

function PropDrillingTodo(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn Prop Drilling', completed: false },
    { id: 2, text: 'See All The Props', completed: false }
  ]);

  const addTodo = (text: string): void => {
    setTodos([...todos, {
      id: Date.now(),
      text,
      completed: false
    }]);
  };

  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <div className="multi-component-demo">
        <div className="component-box prop-drilling">
          <h4>InputContainer (passes addTodo)</h4>
          <InputContainer onAddTodo={addTodo} />
        </div>
        
        <div className="component-box prop-drilling">
          <h4>StatsContainer (passes todos)</h4>
          <StatsContainer todos={todos} />
        </div>
        
        <div className="component-box prop-drilling">
          <h4>ListContainer (passes todos, toggleTodo, deleteTodo)</h4>
          <ListContainer todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </div>
      </div>
    </div>
  );
}
export default PropDrillingTodo;