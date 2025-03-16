import { RouterProvider } from "react-router-dom";
import "./App.css";
import { ThemeContext } from "./theme/globalStyle";
import { router } from "./pages/Routes";

function App() {
  return (
  <ThemeContext.Provider value="dark">
    <RouterProvider router={router} />
  </ThemeContext.Provider>
  ); 
}

export default App;
