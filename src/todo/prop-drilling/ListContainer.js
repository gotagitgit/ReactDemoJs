import React from 'react';
import ListWrapper from './ListWrapper';

function ListContainer({ todos, onToggle, onDelete }) {
  return (
    <div className="prop-pass">
      <span className="prop-label">todos, onToggle, onDelete ↓</span>
      <ListWrapper todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
}

export default ListContainer;