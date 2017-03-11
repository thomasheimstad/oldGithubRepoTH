import React from 'react';
const initialState = {
  _id: '',
  title: '',
  start: '',
  end: ''
}
export default class ItemsSetup extends React.Component {
  state = initialState;
  resetState = () => {
    this.setState(initialState)
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
      _id: this.guidGenerator()
    })
  }
  guidGenerator = () => {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
      return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4())
}
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTask(this.state);
    this.refs.title.value = '';
    this.refs.start.value = '';
    this.refs.end.value = '';
    this.refs.daysamonth.value = '';
    this.refs.monthsaseason.value = '';
    this.refs.holydays.value = '';
    this.refs.fee.value = '';
    this.refs.eveningpluss.value = '';
    this.refs.weekendpluss.value = '';
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
            <input name="daysamonth" placeholder="dager i måneder" ref="daysamonth" onChange={this.handleInputChange}></input>
            <input name="monthsaseason" ref="monthsaseason" placeholder="måneder i sesong" onChange={this.handleInputChange}></input>
            <input name="holydays" ref="holydays" placeholder="helligdager" onChange={this.handleInputChange}></input>
          </div>
          <div class="flex row center">
            <input name="fee" ref="fee" placeholder="timelønn" onChange={this.handleInputChange}></input>
            <input name="eveningpluss" ref="eveningpluss" placeholder="kveldstillegg" onChange={this.handleInputChange}></input>
            <input name="weekendpluss" ref="weekendpluss" placeholder="helgetillegg" onChange={this.handleInputChange}></input>
          </div>
          <button value="submit">CREATE</button>
      </form>
    )
  }
}
