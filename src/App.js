import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';


const toDo = [];
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
  //clears list of completed tasks
  clearComplete = () =>{
    console.log('clearing list..', this.state.toDoList)
    const newToDoList = this.state.toDoList.filter(item => !item.completed)
    console.log('setting list to state:', newToDoList);
    this.setState({
      toDoList: newToDoList
    })
  }
  //empty the entire list
  emptyList = () =>{
    this.setState({
      toDoList: []
    })
  }

  clearTask = id =>{
    console.log('clearing out task id:', id)
    const newToDoList = this.state.toDoList.filter(item => item.id !== id)
    this.setState({
      toDoList:newToDoList
    })
    
  }
  render() {
    console.log('To Do List State:',this.state.toDoList);
    return (
      <div className='wrapper'>
        <section>
        <div><h1>Add New Tasks</h1></div>
        <TodoForm emptyList ={this.emptyList} clearComplete={this.clearComplete} addToList={this.addToList} toDoList={this.state.toDoList}/>
        </section>
        <section className='listSection'>
          <TodoList clearTask={this.clearTask} toggleTask={this.toggleTask} toDoList={this.state.toDoList}/>
        </section>
      </div>
    );
  }
}

export default App;
