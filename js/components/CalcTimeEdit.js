import React from 'react';
export default class CalcTimeEdit extends React.Component {
  
  hancleChange = () => {
    const todos = this.state.todos;
      todo[title] = event.target.value;
      this.setState({todo: todo });

  }
  render = () => {
    return (
      <form onSubmit={this.props.onSaveClick} class="flex row">
        <input value={this.state.todo.title} name={this.props.name} ref="title" placeholder="title" onChange={this.handleChange}></input>
        <input name="start" ref="start" placeholder="start" onChange={this.handleChange}></input>
        <input name="end" ref="end" placeholder="end" onChange={this.handleChange}></input>
      </form>
    )
  }
}
