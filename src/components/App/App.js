import React, { Component } from 'react';
import TaskCardList from '../TaskCardList/TaskCardList.js';
import ideas from '../../data.js'
import '../../App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: ideas,
    }
  }

  render() {
    return (
      <div className='mainContainer'>
        <header>
          <h1>Check YO' Self</h1>
        </header>
        <section>
          <h2>Hello</h2>
        </section>
        <TaskCardList taskCards={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
