import React from 'react';
import Item from './Item';

class TodoList extends React.Component{
    render(){
        console.log('Rendered Item List:', this.props.toDoList);
        return(
            <div className='ItemWrapper'>
                <h2>Task list:</h2>
                {(this.props.toDoList.length === 0) ? 
                <p>Empty List! - Add New Items</p> : 
                this.props.toDoList.map(task => (
                   <Item key={task.id} task={task} clearTask={this.props.clearTask} toggleTask={this.props.toggleTask}/>
               )) }
               
            </div>
        )
    }
}
export default TodoList;