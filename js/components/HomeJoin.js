import React from 'react';
export default class HomeJoin extends React.Component {
  state = {
    showForm: false,
    background: false
  }
  handleClick = () => {
    this.setState({
      showForm: !this.state.showForm,
      background: !this.state.background
    })
  }
  componentDidMount = () => {
    window.onbeforeunload = 0;
  }
  componentWillUnmount = () => {
    window.onbeforeunload = 0;
  }
  render = () => {
    return (
      <div class="homeJoin col12" id="homeJoin">
          <div class="behindJoin">
            <div class="flex column center" style={this.state.background ? {backgroundColor: '#607d8b'} : {backgroundColor: '#fefdfd'}}>
            <h3><button onClick={this.handleClick}>{this.state.showForm ? 'Fyll inn skjema under' : 'Ta Kontakt'}</button></h3>
            </div>
          </div>
          <div id="iFrameForm" class={this.state.showForm ? 'iFrameForm flex column center show' : 'iFrameForm flex column center hide'}>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSelglNxMpjYe9IoTmxHb6gxlkmSXto9hYX1a8WJfckswQxUWw/viewform?embedded=false" width="100%" height="1100" frameBorder="0" marginHeight="0" marginWidth="0" />
          </div>
      </div>
    );
  }
}
