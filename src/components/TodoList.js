import React, { Component }  from 'react';
import { TodoItem } from './TodoItem';

export const  TodoList = (props) => {
    const todoItems = props.todoItems.map((todoItem) => {
        return (
            <TodoItem
                todoItem={todoItem}
                removeTodoItem={props.removeTodoItem}
                toggleTodoItemChecked={props.toggleTodoItemChecked}
                key={todoItem.text} // Todo: use ID instead when backend hooked up
            />
        );
    });

    return (
        <ul className="list-group TodoList">
            {todoItems}
        </ul>
    );
}
