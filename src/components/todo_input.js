import React, { Component } from 'react'

class TodoInput extends Component {
    render(){
        return (
            <div className="input-group todo-input">
                <input className="form-control"/>
                <span className="input-group-btn">
                    <button type="button" className="btn btn-primary">
                        Add
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                </span>
            </div>
        );
    }
}

export default TodoInput;