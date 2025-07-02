import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, Todo } from '../../types';
import TodoItem from './TodoItem';

function TodoList(): JSX.Element {
  const todos = useSelector((state: RootState) => state.todos.items);

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;