import "./App.css";
import BoardContextProvider from "./context/BoardContext";
import Main from "./layout/Main";

function App() {
  return (
    <div className="App">
      <BoardContextProvider>
        <Main />
      </BoardContextProvider>
    </div>
  );
}

export default App;
