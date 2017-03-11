import React from 'react';
const initialState = {
  title: '',
  start: '',
  end: ''
}
export default class CalcTimeSetup extends React.Component {
  state = initialState;
  resetState = () => {
    this.setState(initialState)
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTask(this.state);
    this.refs.title.value = '';
    this.refs.start.value = '';
    this.refs.end.value = '';
    this.resetState();
  }
  render = () => {
    return (
      <form class="calcTime setup flex column center" onSubmit={this.handleSubmit}>
        <div class="flex row center">
          <input name="title" ref="title" placeholder="title" onChange={this.handleInputChange}></input>
          <input name="start" ref="start" placeholder="start" onChange={this.handleInputChange}></input>
          <input name="end" ref="end" placeholder="end" onChange={this.handleInputChange}></input>
          </div>
          <div class="flex row center">
            <input placeholder="dager i måneden"></input>
            <input placeholder="måneder sesong"></input>
            <input placeholder="helligdager"></input>
          </div>
          <div class="flex row center">
            <input placeholder="timelønn"></input>
            <input placeholder="kveldstillegg"></input>
            <input placeholder="helligdagstillegg"></input>
          </div>
          <p>{this.state.title} & {this.state.start} && {this.state.end}</p>
          <button value="submit">CREATE</button>
      </form>
    )
  }
}
