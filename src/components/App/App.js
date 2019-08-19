import React, { Component } from 'react';
import TaskCardList from '../TaskCardList/TaskCardList.js';
import TaskForm from '../TaskForm/TaskForm.js';
import ideas from '../../data.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: ideas,
    }
  }

  addCard = (newCard) => {
    this.setState({tasks: [...this.state.tasks, newCard]});
  }

  deleteCard = (id) => {
    let filteredCards = this.state.tasks.filter(card => card.id !== id);

    this.setState({tasks: filteredCards});
  }

  render() {
    return (
      <div className='mainContainer'>
        <header>
          <h1>Check YO' Self</h1>
        </header>
        <TaskForm addCard={this.addCard}/>
        <TaskCardList taskCards={this.state.tasks} deleteCard={this.deleteCard}/>
      </div>
    );
  }
}

export default App;
