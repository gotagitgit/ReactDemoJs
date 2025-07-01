import React from 'react';
import { useAppDispatch } from '../../hooks';
import { toggleTodo, deleteTodo } from './todoSlice';
import { Todo } from '../../types';

interface RTKTodoItemProps {
  todo: Todo;
}

function RTKTodoItem({ todo }: RTKTodoItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleToggle = (): void => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = (): void => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <span>{todo.text}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default RTKTodoItem;