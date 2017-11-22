import React from 'react';
import NavLink from 'gatsby-link';
import MdHome from 'react-icons/lib/md/home';
import MdInfo from 'react-icons/lib/md/info';
import MdFace from 'react-icons/lib/fa/facebook-official';

export default class NavLinks extends React.Component {
  consoleThis = () => {
    console.log("hash has changed")
  }
  componentDidMount = () => {
    window.addEventListener("popstate", this.consoleThis);
  }
  render = () => {
    return (
      <ul className="flex center">
        <li onClick={this.props.handleClick}><NavLink exact to="/"><h4>Home</h4></NavLink></li>
        <li onClick={this.props.handleClick}><NavLink exact to="/media"><h4>Media</h4></NavLink></li>
        <li onClick={this.props.handleClick}><NavLink exact to="/blog"><h4>Blog</h4></NavLink></li>
        <li onClick={this.props.handleClick}><NavLink exact to="/upcoming"><h4>Upcoming</h4></NavLink></li>
        <li onClick={this.props.handleClick}><NavLink exact to="/about"><h4>About</h4></NavLink></li>
      </ul>
    )
  }
}
