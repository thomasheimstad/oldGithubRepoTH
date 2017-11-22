import React from 'react';
export default class FadeInWrapper extends React.Component {
  state = {
    scrollTop: 0,
    percentage: 0
  }
  handleScroll = () => {
    let distance = document.getElementById(`${this.props.id}`).getBoundingClientRect().top,
        percentz = (distance / document.documentElement.clientHeight) * 100;
    this.setState({
      scrollTop: distance,
      percentage: percentz
    })
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
    window.onbeforeunload = 0;
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
    window.onbeforeunload = 0;
  }
  render () {
    return (
        <div id={this.props.id} className={this.state.percentage <= 80 ? 'fadeIn' : 'fadeOut'}>
          {this.props.children}
      </div>
    )
  }
}
