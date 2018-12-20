import React, { Component} from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Title from "./components/title";
import TodoInput from "./components/todo_input";
import TodoList from "./components/todo_list";
import _ from 'lodash';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
        todoItems: []
    };

    this.addTodoItem = this.addTodoItem.bind(this);
  }

  addTodoItem(todoItem){
    this.setState({
      todoItems: [...this.state.todoItems, todoItem]
    });
  }

  removeTodoItem(todoItem){
    this.setState(
      _.pull(this.state.todoItems, todoItem)
    );
  }

  toggleTodoItemChecked(todoItem){
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
        <Title />
        <TodoInput
          addTodoItem={this.addTodoItem}
        />
        <TodoList 
          todoItems={this.state.todoItems} 
          removeTodoItem={this.removeTodoItem.bind(this)}
          toggleTodoItemChecked={this.toggleTodoItemChecked.bind(this)}
        />
      </div>
    );
  }
}

export default hot(module)(App);