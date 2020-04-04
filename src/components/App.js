import React, { Component } from 'react';
import './App.css';
import TaskList from './TaskList';
import AddTask from './AddTask';
let counter = 5;

class App extends Component {

  state = {
    tasks: [
      { id: '0', text: 'clean floor', date: '2020-04-06', active: true, important: false, finishDate: null },
      { id: '1', text: 'go ride on donkey Rocco', date: '2020-04-06', active: true, important: false, finishDate: null },
      { id: '2', text: 'drink 1 liter milk every day', date: '2020-04-06', active: true, important: true, finishDate: null },
      { id: '3', text: 'ask mum how she can scream 12h without breake', date: '2020-04-03', active: true, important: false, finishDate: null },
      { id: '4', text: 'buy gift for myself', date: '2020-03-02', active: true, important: false, finishDate: null },
    ]
  }

  handleRemove = (e) => {
    let tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === e);

    tasks.splice(index, 1);
    this.setState({
      tasks
    })
  }
  handlePassive = (e) => {
    const date = new Date()
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === e) {
        task.active = false;
        task.finishDate = date.getTime()
      }
    }
    )
    this.setState({
      tasks
    })
  }
  handleAdd = (text, date, important) => {
    if (text === "") return alert("Add task in provided place")
    const task = {
      id: counter,
      text,
      date, active: true,
      important,
      finishDate: null
    }
    this.setState({
      tasks: [...this.state.tasks, task]
    })
    counter++
    return true
  }
  render() {
    return (
      <div className="App">
        <h1>Organizer</h1>
        <AddTask add={this.handleAdd} />
        <TaskList passive={this.handlePassive} remove={this.handleRemove} tas={this.state.tasks} />
        <h6>haydulski</h6>
      </div>);
  }
}

export default App;

