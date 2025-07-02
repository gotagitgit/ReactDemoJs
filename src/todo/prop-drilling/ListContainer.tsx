import React from 'react';
import { Todo } from '../../types';
import ListWrapper from './ListWrapper';

interface ListContainerProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function ListContainer({ todos, onToggle, onDelete }: ListContainerProps): JSX.Element {
  return (
    <div className="prop-pass">
      <span className="prop-label">todos, onToggle, onDelete ↓</span>
      <ListWrapper todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </div>
  );
}

export default ListContainer;