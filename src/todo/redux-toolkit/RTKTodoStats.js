import React from 'react';
import { useSelector } from 'react-redux';

function RTKTodoStats() {
  const todos = useSelector(state => state.rtkTodos.items);
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;

  return (
    <div className="todo-stats">
      <h4>Statistics</h4>
      <p>Total: {totalTodos}</p>
      <p>Completed: {completedTodos}</p>
      <p>Pending: {pendingTodos}</p>
    </div>
  );
}

export default RTKTodoStats;