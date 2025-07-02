import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../types';

function TodoStats(): JSX.Element {
  const todos = useSelector((state: RootState) => state.todos.items);
  const totalTodos: number = todos.length;
  const completedTodos: number = todos.filter(todo => todo.completed).length;
  const pendingTodos: number = totalTodos - completedTodos;

  return (
    <div className="todo-stats">
      <h4>Statistics</h4>
      <p>Total: {totalTodos}</p>
      <p>Completed: {completedTodos}</p>
      <p>Pending: {pendingTodos}</p>
    </div>
  );
}

export default TodoStats;