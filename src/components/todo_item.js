import React, { Component }  from 'react';

class TodoListItem extends Component {
    constructor(props){
        super(props);
        this.removeClicked = this.removeClicked.bind(this);
    }

    removeClicked(event) {
        this.props.removeTodoItem(this.props.todoItem);
    }

    render() {
        return (
            <li className="list-group-item todo-list-item clearfix">
                {this.props.todoItem}
                <span className="pull-right">
                    <button type="button" onClick={this.removeClicked} className="btn btn-secondary btn-xs">
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                </span>
            </li>
        );
    }
}

export default TodoListItem;