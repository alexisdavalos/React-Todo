import React from 'react'
import { Form, InputGroup, InputGroupAddon} from 'reactstrap';

class TodoForm extends React.Component{
    //set state for task name
    constructor(){
        super();
        this.state={
            taskName: '',
            valid: true

        };
    }

    handleChannges = e => {
        //update state with each keystroke on input
        this.setState({
            taskName: e.target.value,
            valid:true
        })
        console.log('New Task Name:', e.target.value);
    }

    //handles form submission

    handleSubmit = e => {
        //prevent submit default
        e.preventDefault();
        //validates form - cannot be empty
        if (this.state.taskName === ''){ 
            this.setState({
                ...this.state, //spread the state in
                valid:false //set valid to false - toggles form error/alert
            })
        }else{
            this.props.addToList(this.state.taskName);
            this.setState({
                taskName:'' //resets form on submit
            })
            console.log('Submitting Form... \n Value:', this.state.taskName)
        }
    }

    render(){
        return(
            <>
            <Form style={{width:'50%', marginTop:'1%'}} onSubmit={this.handleSubmit}>
                <InputGroup>
                    <input
                    className='Input'
                    type='text' 
                    name='itme' 
                    onChange={this.handleChannges}
                    value={this.state.taskName}
                    placeholder='To Do.....'
                    />
                    <InputGroupAddon className='GroupButton' addonType='append'>
                        <button>Add</button>
                    </InputGroupAddon>
                </InputGroup>
            </Form>
            {(this.state.valid) ? <div></div> : <div className='Error'><p>Oh noes! This Field Cannot Be Empty!</p></div>}
            <button style={{marginRight:'1%', marginTop:'1%'}} onClick={() => this.props.clearComplete()}>Clear Completed</button>
            <button style={{marginRight:'1%', marginTop:'1%'}} onClick={() => this.props.emptyList()}>Empty List</button>
            </>

        );
    }
}

export default TodoForm;