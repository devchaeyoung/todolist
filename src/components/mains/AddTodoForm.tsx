import React from "react";

interface AddTodoFormProps {
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  onKeydown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function AddTodoForm({ text, onChange, onClick, onKeydown }: AddTodoFormProps) {
  return (
    <div>
      <input type="text" value={text} onKeyDown={onKeydown} onChange={onChange} />
      <button onClick={onClick}>Enter</button>
    </div>
  );
}
