import React, { Component }  from 'react';

export const TodoItem = (props) => {
    const removeClicked = (event, props) => {
        props.removeTodoItem(props.todoItem);
    }

    const toggleChecked = (event, props) => {
        props.toggleTodoItemChecked(props.todoItem);
    }
    
    const { completed, text } = props.todoItem;
    const toggleButtonType = completed ? 'btn-success' : 'btn-secondary';
    const textClassName = completed ? 'line-through' : '';

    return (
        <li className="list-group-item todo-list-item clearfix">
            <span className="pull-left">
                <button type="button" onClick={(e) => toggleChecked(e,props)} className={"btn btn-xs hover-green " + toggleButtonType }>
                    <span className="glyphicon glyphicon-ok" />
                </button>
            </span>
            <span className={textClassName}>
                {text}
            </span>
            <span className="pull-right">
                <button type="button" onClick={(e) => removeClicked(e,props)} className="btn btn-secondary btn-xs hover-red">
                    <span className="glyphicon glyphicon-remove" />
                </button>
            </span>
        </li>
    );
}