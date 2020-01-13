import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


const toDo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    //initiliaze state
    this.state = {
      toDoList : toDo //sets state to To Do Data 
    }
  }
  // adds new task to the todo list object
  addToList = taskName => {
    const newTask ={
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      toDoList: [...this.state.toDoList, newTask] //spreads in current state of data and adds new task to the end
    })
  }
  //toggles task completion
  toggleTask = id =>{

    const newToDoList = this.state.toDoList.map(item =>{ //maps through toDoList
      console.log('After Toggling Task:', item.completed)
      if(item.id === id){ //if an id on the list matches the id of the item clicked
        //spreads in the item key value pairs and toggles the completed value
        return{
          ...item,
          completed: !item.completed
        };
      }else{
        return item;
      }
    });
    this.setState({
      toDoList: newToDoList
    })
  }
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoForm addToList={this.addToList}/>
        <TodoList toggleTask={this.toggleTask} toDoList={this.state.toDoList}/>
      </div>
    );
  }
}

export default App;
