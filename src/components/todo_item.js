import React, { Component }  from 'react';

//Todo: refactor to functional component
class TodoListItem extends Component {
    constructor(props){
        super(props);
        this.removeClicked = this.removeClicked.bind(this);
        this.toggleChecked = this.toggleChecked.bind(this);
    }

    removeClicked(event) {
        this.props.removeTodoItem(this.props.todoItem);
    }

    toggleChecked(event) {
        this.props.toggleTodoItemChecked(this.props.todoItem);
    }

    render() {
        return (
            <li className="list-group-item todo-list-item clearfix">
                <span className="pull-left">
                    <button type="button" onClick={this.toggleChecked} className={"btn btn-xs hover-green " + (this.props.todoItem.completed ? 'btn-success' : 'btn-secondary') }>
                        <span className="glyphicon glyphicon-ok"></span>
                    </button>
                </span>
                <span className={this.props.todoItem.completed ? 'line-through' : ''}>
                    {this.props.todoItem.text}
                </span>
                <span className="pull-right">
                    <button type="button" onClick={this.removeClicked} className="btn btn-secondary btn-xs hover-red">
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                </span>
            </li>
        );
    }
}
export default TodoListItem;