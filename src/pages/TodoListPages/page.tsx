import React, { useEffect, useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import { TodoBoard, TodoItemProps  } from "./components/TodoBoard";

let id = 0;

export default function TodoListPage () {

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
    if (inputText.trim() === "") return;
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
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
    <main className="light">
        <AddTodoForm text={inputText} onChange={handleChange} onClick={addTodo} onKeydown={handleKeydown} />
        <TodoBoard todos={todos} onClick={delTodo} />
      </main>
    )
}
