import React, { Component } from 'react'

export class TodoInput extends Component {
    constructor(props){
        super(props);
        this.state = { todoItem: '' };
    }

    render(){
        return (
            <form onSubmit={(e) => this.onFormSubmit(e)} className="input-group">
                <input 
                    placeholder="Enter a todo list item"
                    onChange={(e) => this.onInputChange(e)}
                    value ={this.state.todoItem}
                    className="form-control"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">
                        Add
                        <span className="glyphicon glyphicon-plus" />
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
        if(this.state.todoItem)
        {
            //Will add id when we hook up to back end.
            this.props.addTodoItem({text: this.state.todoItem, completed: false});
            this.setState({ todoItem: ''})
        }
    }
}

function validate(values){

}
