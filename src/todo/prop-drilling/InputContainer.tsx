import React from 'react';
import InputWrapper from './InputWrapper';

interface InputContainerProps {
  onAddTodo: (text: string) => void;
}

function InputContainer({ onAddTodo }: InputContainerProps): JSX.Element {
  return (
    <div className="prop-pass">
      <span className="prop-label">onAddTodo ↓</span>
      <InputWrapper onAddTodo={onAddTodo} />
    </div>
  );
}

export default InputContainer;