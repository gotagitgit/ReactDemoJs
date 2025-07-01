import React from 'react';
import StatsWrapper from './StatsWrapper';

function StatsContainer({ todos }) {
  return (
    <div className="prop-pass">
      <span className="prop-label">todos ↓</span>
      <StatsWrapper todos={todos} />
    </div>
  );
}

export default StatsContainer;