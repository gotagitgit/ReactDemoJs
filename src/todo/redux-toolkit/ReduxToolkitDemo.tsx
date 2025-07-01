import React from 'react';
import RTKTodoInput from './RTKTodoInput';
import RTKTodoList from './RTKTodoList';
import RTKTodoStats from './RTKTodoStats';

function ReduxToolkitDemo(): JSX.Element {
  return (
    <div className="todo-app">
      <div className="multi-component-demo">
        <div className="component-box">
          <h4>RTK TodoInput Component</h4>
          <RTKTodoInput />
        </div>
        
        <div className="component-box">
          <h4>RTK TodoStats Component</h4>
          <RTKTodoStats />
        </div>
        
        <div className="component-box">
          <h4>RTK TodoList Component</h4>
          <RTKTodoList />
        </div>
      </div>
    </div>
  );
}

export default ReduxToolkitDemo;