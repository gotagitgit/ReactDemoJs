import React from 'react';
import { useDispatch } from 'react-redux';
import { Todo } from '../../types';
import { toggleTodo, deleteTodo } from '../../store';

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps): JSX.Element {
  const dispatch = useDispatch();

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

export default TodoItem;