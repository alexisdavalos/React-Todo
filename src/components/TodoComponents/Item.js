import React from 'react';

const Item = props =>{
    return (
        <div className='ItemWrapper'>
            <div 
            className={`item${props.task.completed ? " completed" : ""}`}
            onClick={() => props.toggleTask(props.task.id)}>
                <p>{props.task.task}</p>
            </div>
            <button onClick={() => props.clearTask(props.task.id)}>Delete</button>
        </div>
    )
        
    
}

export default Item;