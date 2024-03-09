import React from "react";

export interface TodoItemProps {
  id: number;
  todo: string;
  createTime: Date;
  done: boolean;
}

interface TodoListProps {
  todos: TodoItemProps[];
  onClick: (id: number) => void;
}

export default function TodoBoard({ todos, onClick }: TodoListProps) {
  return (
    <div>
      <h2>To do list</h2>
      <ul>
        {todos.map((item: TodoItemProps) => (
          <li key={item.id}>
            {item.todo}
            <button onClick={() => onClick(item.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
