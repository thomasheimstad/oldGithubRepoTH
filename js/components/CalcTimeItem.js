import React from 'react';
import CalcTimeEdit from '../components/CalcTimeEdit';
let array = [];
export default class CalcTimeItem extends React.Component {
  state = {
    isEditing: false
  }
  onEditClick = () => {
    this.setState({
      isEditing: true
    })
  }
  onCancelClick = () => {
    this.setState({
      isEditing: false
    })
  }
  onSaveClick = (e) => {
    e.preventDefault();
    const oldTaskOrg = this.props.title;
    const newTaskOrg = this.refs.editTitle.value;
    const oldTask = array[e].key;
    const newTask = array[e].refs.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({
      isEditing: false
    })
  }
  onDeleteClick = () => {
    this.props.deleteTask(this.props.id)
  }
  renderEditInputs = (e) => {
    let it;
    let value;
    let o = this.props.state[e];
    console.log(Object.values(o));
    Object.keys(o).forEach(function(key){
      var value = o[key];
      console.log(value);
    })
    let r = this.props.state.map((value, index) =>
      <CalcTimeEdit key={index} id={index}/>
    );
  }
  renderTaskSection = (e) => {
    const {title, start, end}= this.props;
    if(this.state.isEditing){
      return(
        <CalcTimeEdit />
      )
    }
    return (
      <div class="flex row">
        <p>{title}</p>
        <p>{start}</p>
        <p>{end}</p>
      </div>
    )
  }
  renderActionsSection = () => {
    if(this.state.isEditing){
      return (
        <div>
          <button onClick={this.onSaveClick}>Save</button>
          <button onClick={this.onCancelClick}>Cancel</button>
        </div>
      )
    }
    return (
      <div>
        <button onClick={this.onEditClick}>Edit</button>
        <button onClick={this.onDeleteClick}>Delete</button>
      </div>
    )
  }
  render = () => {
    return (
      <div class="flex row center" id={this.props.id}>
        {this.renderTaskSection()}
        {this.renderActionsSection()}
      </div>
    )
  }
}
