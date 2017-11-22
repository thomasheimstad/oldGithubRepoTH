import React from 'react';

export default class ScrollBar extends React.Component{
  state = {
    percentage: 0
  }
  handleScroll = () => {
    let h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    this.setState({
      percentage: percent
    })
  }
  componentDidMount = () => {
   window.addEventListener('scroll', this.handleScroll);
 }
 componentWillUnmount = () => {
   window.removeEventListener('scroll', this.handleScroll);
 }
  render = () => {
    return (
      <div className="scrollBar" style={{width: this.state.percentage + '%'}}>
      </div>
    )
  }
}
