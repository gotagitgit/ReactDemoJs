import React from 'react';
import { Todo } from '../../types';
import ItemWrapper from './ItemWrapper';

interface ListWrapperProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function ListWrapper({ todos, onToggle, onDelete }: ListWrapperProps): JSX.Element {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <ItemWrapper 
          key={todo.id} 
          todo={todo} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
}

export default ListWrapper;