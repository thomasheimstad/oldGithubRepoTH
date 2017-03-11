import React from "react";
import ReactDOM from 'react-dom';
import NavBar from '../components/NavBar';
import Nav from '../components/Nav';
import ScrollBar from '../components/ScrollBar';
import Footer from '../components/Footer';
require('../../css/styles.scss');

export default class Layout extends React.Component {
  state = {
    showNav: false,
    lang: "no"
  }
  handleClick = () => {
    this.setState({
      showNav: !this.state.showNav
    })
  }
  handleLangClick = () => {
    if(this.state.lang == "no"){
      this.setState({lang: "en"})
    } else if(this.state.lang == "en"){
      this.setState({lang: "no"})
    }
  }
  render() {
    return (
      <div>
        <ScrollBar />
        <NavBar showNav={this.state.showNav} handleClick={this.handleClick}/>
        <Nav showNav={this.state.showNav} handleClick={this.handleClick} handleLangClick={this.handleLangClick} lang={this.state.lang}/>
        <div class={this.state.showNav ? 'overlay' : 'overlayOut'} onClick={this.state.showNav ? this.handleClick : ''}></div>
        {React.cloneElement(this.props.children, {lang: this.state.lang})}
        <Footer lang={this.state.lang}/>
      </div>
    );
  }
}
