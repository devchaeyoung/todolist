import { Route, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
import TodoListPage from "./TodoListPages/page"
  
  export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<TodoListPage />} />
      </Route>
    )
  );