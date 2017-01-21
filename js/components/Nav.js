import React from 'react';
import { Link } from 'react-router';
import MdHome from 'react-icons/lib/md/home';

export default class Nav extends React.Component{
  render = () => {
    return (
      <nav class={this.props.showNav ? 'showing navigator' : 'hidden navigator'}>
        <div>
          <span class="logo"><img src="./img/rtlogo.png" /></img></span>
          <ul>
            <li onClick={this.props.handleClick}><Link to="/"><MdHome /> Home</Link></li>
            <li onClick={this.props.handleClick}><Link to="/gallery" activeClassName="active"><MdHome />Bilder</Link></li>
            <li onClick={this.props.handleClick}><Link to="/info" activeClassName="active"><MdHome />Hva er Round Table?</Link></li>
            <li onClick={this.props.handleClick}><Link to="/kalender" activeClassName="active"><MdHome />Kalender</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}
