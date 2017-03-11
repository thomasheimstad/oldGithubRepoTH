import React from 'react';
import {CSVLink, CSVDownload} from 'react-csv';
import CalcTimeSetup from '../components/CalcTimeSetup';
import CalcTimeResult from '../components/CalcTimeResult';

const todos =[
  { title: 'MV1',
    start: 900,
    end: 1800
  },
  {
    title: 'MV2',
    start: 1000,
    end: 1900
  }
];
export default class CalcTime extends React.Component {
  state = {
    setup: true,
    todos
    }
  handleSetup = () => {
    this.setState({
      setup: !this.state.setup
    })
  }
  createTask = ({title, start, end}) => {
    this.state.todos.push({
      title,
      start,
      end
    });
    this.setState({
      todos: this.state.todos
    })
    console.log(title)
    console.log(this.state.todos)
  }
  saveTask = (oldTask, newTask) => {
    const foundTodo = this.state.todos.find(todo => todo.title === oldTask);
    foundTodo.title = newTask;
    this.setState({
      todos: this.state.todos
    })
  }
  saveEdit = (oldSave, newSave) => {
  }
  deleteTask = (e) => {
    this.setState({
      todos: this.state.todos.filter((_, i) => i !== e)
    })
  }
  render = () => {
    return (
      <div class="calcTimeWrapper flex column center">
        <CalcTimeSetup
          setup={this.state.setup}
          handleSetup={this.handleSetup}
          createTask = {this.createTask}
          />
        <CalcTimeResult
          todos={this.state.todos}
          saveTask = {this.saveTask}
          deleteTask = {this.deleteTask}
          state = {this.state.todos} />
        <CSVLink data={todos} >Download me</CSVLink>
        <p>HEY</p>
      </div>
    )
  }
}
