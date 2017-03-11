import React from 'react';

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
      <div class="flex center">
      </div>
    )
  }
}
export default class HomeHero extends React.Component {
  render = () => {
    return (
      <div class="homeHero" id="homeHero">
        <HomeButton scrolled={this.props.scrolled} />
        <div class="overcast" style={{ opacity: this.props.percent*3 }}></div>
      </div>
    )
  }
}
