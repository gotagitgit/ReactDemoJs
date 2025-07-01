import React, { useState } from 'react';

// Level 1: Top component with state
function PropDrillingDemo() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn Prop Drilling', completed: false },
    { id: 2, text: 'See the Problem', completed: false }
  ]);
  const [clickCount, setClickCount] = useState(0);

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const incrementClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="todo-app">
      <div className="prop-drilling-demo">
        <div className="component-box">
          <h4>Level 1: App (has state)</h4>
          <p><strong>Click Count: {clickCount}</strong> ⬅️ Data flows UP from Level 5</p>
          <TodoContainer todos={todos} onToggle={toggleTodo} onIncrement={incrementClick} />
        </div>
      </div>
    </div>
  );
}

// Level 2: Container that doesn't use the props but passes them down
function TodoContainer({ todos, onToggle, onIncrement }) {
  return (
    <div className="component-box">
      <h4>Level 2: Container (passes props)</h4>
      <TodoSection todos={todos} onToggle={onToggle} onIncrement={onIncrement} />
    </div>
  );
}

// Level 3: Section that doesn't use the props but passes them down
function TodoSection({ todos, onToggle, onIncrement }) {
  return (
    <div className="component-box">
      <h4>Level 3: Section (passes props)</h4>
      <TodoWrapper todos={todos} onToggle={onToggle} onIncrement={onIncrement} />
    </div>
  );
}

// Level 4: Wrapper that doesn't use the props but passes them down
function TodoWrapper({ todos, onToggle, onIncrement }) {
  return (
    <div className="component-box">
      <h4>Level 4: Wrapper (passes props)</h4>
      <TodoDisplay todos={todos} onToggle={onToggle} onIncrement={onIncrement} />
    </div>
  );
}

// Level 5: Finally uses the props!
function TodoDisplay({ todos, onToggle, onIncrement }) {
  return (
    <div className="component-box">
      <h4>Level 5: Display (finally uses props!)</h4>
      <button onClick={onIncrement} className="click-button">
        Click me! ⬆️ Sends data UP to Level 1
      </button>
      <div className="todo-list">
        {todos.map(todo => (
          <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            <span>{todo.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropDrillingDemo;