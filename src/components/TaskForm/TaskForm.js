import React, { Component } from 'react';
import './TaskForm.css'

class TaskForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      taskTitle: '',
      tasks: [],
    }
  }

  addTitle = (event) => {
    this.setState({title: [event.target.value]})
  }

  addToDoTitle = (event) => {
    this.setState({taskTitle: [event.target.value]})
  }

  createToDo = (event) => {
    event.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: [this.state.taskTitle],
      completed: false
    }

    this.setState({
      tasks: [...this.state.tasks, newTodo],
      taskTitle: ''
    });
  }

  addCard = (event) => {
    event.preventDefault();
    let newCard = {
      id: Date.now(),
      title: this.state.title,
      tasks: this.state.tasks,
      urgent: false
    }

    this.props.addCard(newCard)
    this.setState({
      title: '',
      tasks: []
    });
  }

  createToDoList = () => {
    if (this.state.tasks.length > 0) {
      return this.state.tasks.map(task => {
        return <li key={Date.now()}>{task.title}</li>
      });
    } else {
      return
    }
  }

  render() {
    let toDoList = this.createToDoList();
    return (
      <form className='form'>
        <input
          type='text'
          placeholder='Enter a title'
          value={this.state.title}
          name='title'
          onChange={event => this.addTitle(event)}
        />
        <ul>
          {toDoList}
        </ul>
        <input
          type='text'
          placeholder='Enter a to-do'
          value={this.state.taskTitle}
          name='task'
          onChange={event => this.addToDoTitle(event)}
        />
        <button 
          className='taskButton'
          onClick={event => this.createToDo(event)}
        >
          Create task!
        </button>
        <button
          className='createCardButton'
          onClick={event => this.addCard(event)}
        >
          Create a new to-do card!
        </button>
      </form>
    )
  }
}

export default TaskForm;