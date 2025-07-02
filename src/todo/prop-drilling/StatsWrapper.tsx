import React from 'react';
import { Todo } from '../../types';

interface StatsWrapperProps {
  todos: Todo[];
}

function StatsWrapper({ todos }: StatsWrapperProps): JSX.Element {
  const totalTodos: number = todos.length;
  const completedTodos: number = todos.filter(todo => todo.completed).length;
  const pendingTodos: number = totalTodos - completedTodos;

  return (
    <div className="todo-stats">
      <p>Total: {totalTodos}</p>
      <p>Completed: {completedTodos}</p>
      <p>Pending: {pendingTodos}</p>
    </div>
  );
}

export default StatsWrapper;