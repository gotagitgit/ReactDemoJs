import React from 'react';
import ClassCounter from './ClassCounter';
import HookCounter from './HookCounter';

function CounterDemo(): JSX.Element {
  return (
    <>
      <div className="demo-section">
        <h2>Class Component (Old Way)</h2>
        <ClassCounter />
      </div>
      
      <div className="demo-section">
        <h2>Hooks (Modern Way)</h2>
        <HookCounter />
      </div>
      
      <div className="comparison">
        <h3>Why Hooks?</h3>
        <ul>
          <li>Less boilerplate code</li>
          <li>Easier to read and understand</li>
          <li>Better logic reuse</li>
          <li>No 'this' binding issues</li>
        </ul>
      </div>
    </>
  );
}

export default CounterDemo;