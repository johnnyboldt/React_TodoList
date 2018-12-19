import React, { Component } from 'react'

class TodoInput extends Component {
    constructor(props){
        super(props);
        this.state = { todoItem: '' };
        
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    render(){
        return (

            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Enter a todo list item"
                    onChange={this.onInputChange}
                    value ={this.state.todoItem}
                    className="form-control"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">
                        Add
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                </span>
            </form>
        );
    }

    onInputChange(event) {
        this.setState({ todoItem: event.target.value})
    }

    onFormSubmit(event) {
        event.preventDefault();
        // We need to add the item
        this.props.addTodoItem(this.state.todoItem);
        this.setState({ todoItem: ''})
    }
}

export default TodoInput;