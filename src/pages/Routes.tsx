import { createBrowserRouter } from "react-router-dom";
import TodoListPage from "../pages/TodoListPages/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoListPage />,
  },
]);