import React from 'react';
import CalcTimeItem from '../components/CalcTimeItem';
export default class CalcTimeResult extends React.Component {
  renderItems = () => {
    return this.props.todos.map((todo, index) =>
      <CalcTimeItem key={index} id={index} {...todo} saveTask={this.props.saveTask} deleteTask={this.props.deleteTask} state={this.props.state}/>
    );
  }
  render = () => {
    return (
      <div class="calcTime result flex center column">
        <div class="flex row">
          <h3>Task</h3>
          <h3>Action</h3>
        </div>
        {this.renderItems()}
      </div>
    )
  }
}
