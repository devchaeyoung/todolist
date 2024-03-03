import React, { useState } from "react";
import AddTodoForm from "./mains/AddTodoForm";
import TodoBoard from "./mains/TodoBoard";
import { TodoItemProps } from "./mains/TodoBoard";

export default function Main() {
  const [todos, setTodos] = useState<TodoItemProps[]>([
    {
      todo: "할일1",
      createTime: new Date(),
      done: false,
    },
    {
      todo: "할일2",
      createTime: new Date(),
      done: false,
    },
  ]);
  const [inputText, setInputText] = useState("let's writing to do list!");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const addTodo = () => {
    if (inputText.trim() === "") return;
    const newTodo: TodoItemProps = {
      todo: inputText,
      createTime: new Date(),
      done: false,
    };

    setTodos(todos.concat(newTodo));
    console.log("input change");
    setInputText("");
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <main>
      <AddTodoForm text={inputText} onChange={handleChange} onClick={addTodo} onKeydown={handleKeydown} />
      <TodoBoard todos={todos} />
    </main>
  );
}
