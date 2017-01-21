import React from 'react';
import MdMenu from 'react-icons/lib/md/menu';
import MdFace from 'react-icons/lib/fa/facebook-official';
import { Link } from 'react-router';

export default class NavBar extends React.Component{
  state = {
    invis: "invisible"
  }
  handleScroll = () => {
    if(window.pageYOffset > 30|| document.documentElement.scrollTop > 30 || document.body.scrollTop > 30 || 0 > 30) {
      this.setState({
        invis: "visible"
      })
    } else {
      this.setState({
        invis: "invisible"
      })
    }
  }
  componentDidMount = () => {
   window.addEventListener('scroll', this.handleScroll);
 }
  render = () => {
    return (
        <div class={`mainNavBar ${this.state.invis}`}>
          <div class="mainNavBarHeader">
              <a onClick={this.props.handleClick}><MdMenu /></a>
              <Link to="/"><img src="./img/rtlogo.png" /></Link>
              <a href="https://www.facebook.com/groups/245179519191541/"><MdFace /></a>
          </div>
        </div>
      );
    }}
