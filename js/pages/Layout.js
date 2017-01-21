import React from "react";
import ReactDOM from 'react-dom';
import NavBar from '../components/NavBar';
import Nav from '../components/Nav';
import ScrollBar from '../components/ScrollBar';
import Footer from '../components/Footer';
import HomeOutro from '../components/HomeOutro';
require('../../css/styles.scss');

export default class Layout extends React.Component {
  state = {
    showNav: false
  }
  handleClick = () => {
    this.setState({
      showNav: !this.state.showNav
    })
  }
  render() {
    return (
      <div>
        <ScrollBar />
        <NavBar showNav={this.state.showNav} handleClick={this.handleClick} />
        <Nav showNav={this.state.showNav} handleClick={this.handleClick} />
        <div class={this.state.showNav ? 'overlay' : 'overlayOut'} onClick={this.state.showNav ? this.handleClick : ''}></div>
          {this.props.children}
        <Footer />
      </div>
    );
  }
}
