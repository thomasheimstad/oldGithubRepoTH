import React from 'react';
import MdDown from 'react-icons/lib/md/keyboard-arrow-down';


export default class HomeButton extends React.Component {
  state = {
    load: false
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        load: true
      })
    }, 2000)
  }
  render = () => {
    return (
      <div class="flex center buttonWrapper">
      <a href="#button"><button class={this.state.load ? 'fadeIn' : 'fadeOut' } id="button">
        <MdDown />
      </button></a>
      </div>
    )
  }
}
