import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoStats from './TodoStats';

function ReduxTodo(): JSX.Element {
  return (
    <div className="todo-app">
      <div className="multi-component-demo">
        <div className="component-box">
          <h4>TodoInput Component</h4>
          <TodoInput />
        </div>
        
        <div className="component-box">
          <h4>TodoStats Component</h4>
          <TodoStats />
        </div>
        
        <div className="component-box">
          <h4>TodoList Component</h4>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default ReduxTodo;