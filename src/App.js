import React, { Component} from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Title from "./components/title";
import TodoInput from "./components/todo_input";
import TodoList from "./components/todo_list";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Title />
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default hot(module)(App);