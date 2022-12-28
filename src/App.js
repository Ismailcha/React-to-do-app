import React from "react";
import Todos from "./components/Todos";
import Addtodo from "./components/Addtodo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="center">
        <Addtodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
