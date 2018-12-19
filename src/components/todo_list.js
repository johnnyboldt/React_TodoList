import React, { Component }  from 'react';
import TodoListItem from './todo_item';

class TodoList extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const todoItems = this.props.todoItems.map((todoItem) => {
            return (
                <TodoListItem todoItem={todoItem} removeTodoItem={this.props.removeTodoItem}/>
            );
        });


        return (
            <ul className="list-group TodoList">
                {todoItems}
            </ul>
        );
    }
}

export default TodoList;