import React from "react";
import "./App.scss";
import TodoList from "./TodoList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
