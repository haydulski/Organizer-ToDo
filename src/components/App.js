import React, { Component } from 'react';
import './App.css';
import TaskList from './TaskList';
import AddTask from './AddTask';
class App extends Component {
  state = {
    tasks: [
      { id: '0', text: 'clean floor', date: '2020-04-06', active: true, important: false, finishDate: null },
      { id: '1', text: 'go to school and take diplome', date: '2020-04-06', active: true, important: false, finishDate: null },
      { id: '2', text: 'drink 1 liter milk every day', date: '2020-04-06', active: true, important: false, finishDate: null },
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Organizer</h1>
        <AddTask />
        <TaskList tas={this.state.tasks} />
      </div>);
  }
}

export default App;

