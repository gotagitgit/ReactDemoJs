import React from 'react';
import { useAppSelector } from '../../hooks';
import RTKTodoItem from './RTKTodoItem';

function RTKTodoList(): JSX.Element {
  const todos = useAppSelector(state => state.rtkTodos.items);

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <RTKTodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default RTKTodoList;