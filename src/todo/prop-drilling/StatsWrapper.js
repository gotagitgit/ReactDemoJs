import React from 'react';

function StatsWrapper({ todos }) {
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;

  return (
    <div className="todo-stats">
      <p>Total: {totalTodos}</p>
      <p>Completed: {completedTodos}</p>
      <p>Pending: {pendingTodos}</p>
    </div>
  );
}

export default StatsWrapper;