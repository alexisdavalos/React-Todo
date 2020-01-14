import React from 'react';
import Item from './Item';
import {Alert} from 'reactstrap'

class TodoList extends React.Component{
    render(){
        console.log('Rendered Item List:', this.props.toDoList);
        return(
            <>
            <h2>Task list:</h2>
            <div className='ListWrapper'>
                {(this.props.toDoList.length === 0) ? 
                <Alert className='Alert'>Empty List! - Add New Items</Alert> : 
                this.props.toDoList.map(task => (
                   <Item key={task.id} task={task} clearTask={this.props.clearTask} toggleTask={this.props.toggleTask}/>
               )) }
               
            </div>
            </>
        )
    }
}
export default TodoList;