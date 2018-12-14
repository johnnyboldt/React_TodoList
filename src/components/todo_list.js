import React, { Component }  from 'react';
import TodoItem from './todo_input';

class TodoList extends Component {
    render() {
        return (
            <ul className="list-group TodoList">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
            </ul>
        );
    }
}

export default TodoList;