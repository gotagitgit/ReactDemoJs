import React from 'react';
import ItemWrapper from './ItemWrapper';

function ListWrapper({ todos, onToggle, onDelete }) {
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