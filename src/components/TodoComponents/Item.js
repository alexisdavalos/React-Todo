import React from 'react';

const Item = props =>{
    return (
        <div 
        className={`item${props.task.completed ? " completed" : ""}`}
        onClick={() => props.toggleTask(props.task.id)}>
            <p>{props.task.task}</p>
            <button onClick={props.clearTask(props.task.id)}>Clear Task</button>
        </div>
    )
        
    
}

export default Item;