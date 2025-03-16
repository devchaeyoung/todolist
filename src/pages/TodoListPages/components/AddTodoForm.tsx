import React from "react";

interface AddTodoFormProps {
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  onKeydown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  theme: string;
}

export default function AddTodoForm({ text, onChange, onClick, onKeydown, theme }: AddTodoFormProps) {
  return (
    <div>
      <label htmlFor="todoInput">Add Todo</label>
      <input id="todoInput" type="text" value={text} onKeyDown={onKeydown} onChange={onChange} />
      <button data-testid="add-todo-button" id="todoInput" onClick={onClick} className={theme}>Enter</button>
    </div>
  );
}
