import React from 'react';
import { Todo } from '../../types';

interface ItemWrapperProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function ItemWrapper({ todo, onToggle, onDelete }: ItemWrapperProps): JSX.Element {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}

export default ItemWrapper;