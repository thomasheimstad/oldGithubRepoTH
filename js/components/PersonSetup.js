import React from 'react';
import PersonCalendar from '../components/PersonCalendar';

const initialState = {
  _id: '',
  name: '',
  language: [],
  datesPicked: []
    }
export default class PersonSetup extends React.Component {
  state = initialState;
  resetState = () => {
    this.setState(initialState, function() { // called by React after the state is updated
    this.setState({
      datesPicked: []
      })
    })
  }
  handleChange = (which, payload) => {
    this.setState({
      [which] : payload
    })}

  handleSelect(date) {
    console.log(date); // Momentjs object
    }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const checked = target.checked;
    const name = target.name;
    this.setState({
      [name]: value,
      language: [this.refs.language1.checked, this.refs.language2.checked, this.refs.language3.checked],
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
    this.props.createPerson(this.state);
    this.refs.name.value = '';
    this.refs.language1.checked = '';
    this.refs.language2.checked = '';
    this.refs.language3.checked = '';
    this.resetState();
  }
  render = () => {
    return (
      <form class="calcTime setup flex column center" onSubmit={this.handleSubmit}>
        <div class="flex row center">
          <div class="flex column">
            <input name="name" ref="name" placeholder="name" onChange={this.handleInputChange}></input>
            <div class="flex row center">
              <div class="flex row center">
                <span>German</span><input type="checkbox" name="language" ref="language1" placeholder="language" onChange={this.handleInputChange} value="Ger"></input>
              </div>
              <div class="flex row center">
                <span>French</span><input type="checkbox" name="language" ref="language2" placeholder="language" onChange={this.handleInputChange} value="Fre"></input>
              </div>
              <div class="flex row center">
                <span>Russian</span><input type="checkbox" name="language" ref="language3" placeholder="language" onChange={this.handleInputChange} value="Rus"></input>
              </div>
            </div>
          </div>
          <PersonCalendar datesPicked={this.state.datesPicked} />
        </div>
        <button value="submit">CREATE</button>
      </form>
    )
  }
}
