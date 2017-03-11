import React from 'react';
import { Link, IndexLink } from 'react-router';
import MdHome from 'react-icons/lib/md/home';
import MdInfo from 'react-icons/lib/md/info';
import MdFace from 'react-icons/lib/fa/facebook-official';
/*
import MdPhoto from 'react-icons/lib/md/photo-camera';
import MdCalendar from 'react-icons/lib/md/date-range'
*/
export default class Nav extends React.Component{
  render = () => {
    return (
      <nav class={this.props.showNav ? 'showing navigator' : 'hidden navigator'}>
        <div>
          <span class="logo"><img src="./img/favicon.ico" /></span>
          <ul>
            <li onClick={this.props.handleClick}><IndexLink to="/" activeClassName="active"><MdHome /> Home</IndexLink></li>
            <li onClick={this.props.handleClick}><Link to="/charterfest" activeClassName="active"><MdInfo /> 70-årsjubileum</Link></li>
            <li onClick={this.props.handleClick}><a href="https://www.facebook.com/groups/245179519191541/"><MdFace /> Facebook</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
