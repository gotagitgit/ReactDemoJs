import React from 'react';
import PropDrillingDemo from './prop-drilling/PropDrillingDemo';
import PropDrillingTodo from './prop-drilling/PropDrillingTodo';
import ReduxTodo from './redux/ReduxTodo';
import ReduxToolkitDemo from './redux-toolkit/ReduxToolkitDemo';

function ReduxDemo(): JSX.Element {
  return (
    <>
      <div className="demo-section">
        <h2>Prop Drilling - Deep Nesting</h2>
        <PropDrillingDemo />
      </div>
      
      <div className="demo-section">
        <h2>Prop Drilling - Multi-Component</h2>
        <PropDrillingTodo />
      </div>
      
      <div className="demo-section">
        <h2>Redux Solution</h2>
        <ReduxTodo />
      </div>
      
      <div className="demo-section">
        <h2>Redux Toolkit (Modern Redux)</h2>
        <ReduxToolkitDemo />
      </div>
      
      <div className="comparison">
        <h3>Redux Evolution</h3>
        <ul>
          <li>Redux Toolkit reduces boilerplate code</li>
          <li>Built-in Immer for immutable updates</li>
          <li>Simplified slice creation</li>
          <li>Better developer experience</li>
        </ul>
      </div>
    </>
  );
}

export default ReduxDemo;