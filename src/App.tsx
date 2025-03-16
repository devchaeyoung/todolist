import "./App.css";
import Main from "./components/Main";
import { ThemeContext } from "./theme/globalStyle";


function App() {
  return (
  <ThemeContext.Provider value="dark">
    <Main />
  </ThemeContext.Provider>
  ); 
}

export default App;
