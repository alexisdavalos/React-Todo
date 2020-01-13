import React from 'react'

class TodoForm extends React.Component{
    //set state for task name
    constructor(){
        super();
        this.state={
            taskName: ''
        };
    }

    handleChannges = e => {
        //update state with each keystroke on input
        this.setState({
            taskName: e.target.value
        })
        console.log('New Task Name:', e.target.value);
    }

    //handles form submission

    handleSubmit = e => {
        //prevent submit default
        e.preventDefault();
        this.props.addToList(this.state.taskName);
        console.log('Submitting Form... \n Value:', this.state.taskName)
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                type='text' 
                name='itme' 
                onChange={this.handleChannges}
                />
                <button>Add</button>
            </form>

        );
    }
}

export default TodoForm;