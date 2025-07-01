import React from 'react';
import InputWrapper from './InputWrapper';

function InputContainer({ onAddTodo }) {
  return (
    <div className="prop-pass">
      <span className="prop-label">onAddTodo ↓</span>
      <InputWrapper onAddTodo={onAddTodo} />
    </div>
  );
}

export default InputContainer;