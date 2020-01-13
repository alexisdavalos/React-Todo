import React from 'react';
import Item from './Item';

class TodoList extends React.Component{
    render(){
        return(
            <div>
               {this.props.toDoList.map(task => (
                   <Item key={task.id} task={task} toggleTask={this.props.toggleTask}/>
               ))}     
            </div>
        )
    }
}
export default TodoList;