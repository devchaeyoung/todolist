import React from "react";

export interface TodoItemProps {
  todo: string;
  createTime: Date;
  done: boolean;
}

interface TodoListProps {
  todos: TodoItemProps[];
}

export default function TodoBoard({ todos }: TodoListProps) {
  return (
    <div>
      <h2>To do list</h2>
      <ul>
        {todos.map((item: TodoItemProps) => (
          <li>
            {item.todo}
            <button>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
