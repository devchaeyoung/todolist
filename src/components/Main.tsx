import React, { useEffect, useState } from "react";
import AddTodoForm from "./mains/AddTodoForm";
import TodoBoard from "./mains/TodoBoard";
import { TodoItemProps } from "./mains/TodoBoard";

let id = 0;
export default function Main() {
  const [todos, setTodos] = useState<TodoItemProps[]>([]);
  const [inputText, setInputText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const addTodo = () => {
    if (inputText.trim() === "") return;
    const newTodo: TodoItemProps = {
      id: id++,
      todo: inputText,
      createTime: new Date(),
      done: false,
    };

    setTodos(todos.concat(newTodo));
    setInputText("");
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const delTodo = (id: number) => {
    const newState = todos.filter(todo => todo.id !== id);
    setTodos(newState);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const storageData = localStorage.getItem("todos");
    if (storageData) {
      setTodos(JSON.parse(storageData));
    }
  }, []);

  return (
    <main>
      <AddTodoForm text={inputText} onChange={handleChange} onClick={addTodo} onKeydown={handleKeydown} />
      <TodoBoard todos={todos} onClick={delTodo} />
    </main>
  );
}
