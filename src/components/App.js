import React, { Component} from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import _ from 'lodash-es';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
        todoItems: []
    };
  }

  addTodoItem = (todoItem) => {
    this.setState({
      todoItems: [...this.state.todoItems, todoItem]
    });
  }

  removeTodoItem = (todoItem) => {
    this.setState(
      _.pull(this.state.todoItems, todoItem)
    );
  }

  toggleTodoItemChecked = (todoItem) => {
    var index = this.state.todoItems.indexOf(todoItem);
    const newToDoITems = this.state.todoItems.slice();
    newToDoITems[index].completed = !newToDoITems[index].completed;
    this.setState({
      todoItems: newToDoITems
    });
  }

  render(){
    return(
      <div className="App container">
        <div>
          <h1 className="display-2 text-success">
            <b>Todo List</b>
            <span className="glyphicon glyphicon-check" />
          </h1>
        </div>
        <TodoInput
          addTodoItem={this.addTodoItem}
        />
        <TodoList 
          todoItems={this.state.todoItems} 
          removeTodoItem={this.removeTodoItem}
          toggleTodoItemChecked={this.toggleTodoItemChecked}
        />
      </div>
    );
  }
}

export default hot(module)(App);