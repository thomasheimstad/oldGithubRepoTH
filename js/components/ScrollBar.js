import React from 'react';
import ReactDOM from 'react-dom';

let h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';

export default class ScrollBar extends React.Component{
  state = {
    percentage: 0
  }
  handleScroll = () => {
    let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    this.setState({
      percentage: percent
    })
  }
  componentDidMount = () => {
   window.addEventListener('scroll', this.handleScroll);
 }
  render = () => {
    return (
      <div class="scrollBar" style={{width: this.state.percentage + '%'}}>
      </div>
    )
  }
}
