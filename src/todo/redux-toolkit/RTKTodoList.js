import React from 'react';
import { useSelector } from 'react-redux';
import RTKTodoItem from './RTKTodoItem';

function RTKTodoList() {
  const todos = useSelector(state => state.rtkTodos.items);

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <RTKTodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default RTKTodoList;