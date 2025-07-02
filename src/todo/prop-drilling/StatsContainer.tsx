import React from 'react';
import { Todo } from '../../types';
import StatsWrapper from './StatsWrapper';

interface StatsContainerProps {
  todos: Todo[];
}

function StatsContainer({ todos }: StatsContainerProps): JSX.Element {
  return (
    <div className="prop-pass">
      <span className="prop-label">todos ↓</span>
      <StatsWrapper todos={todos} />
    </div>
  );
}

export default StatsContainer;