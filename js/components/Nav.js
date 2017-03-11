import React from 'react';
import { Link, IndexLink } from 'react-router';
import MdHome from 'react-icons/lib/md/home';
import MdPhoto from 'react-icons/lib/md/photo-camera';
import MdInfo from 'react-icons/lib/md/info';
import MdCalendar from 'react-icons/lib/md/date-range'
import MdLang from 'react-icons/lib/md/language';
export default class Nav extends React.Component{
  render = () => {
    return (
      <nav class={this.props.showNav ? 'showing navigator' : 'hidden navigator'}>
        <div>
          <span class="logo"><img src="./img/logo.jpg" /></span>
          <ul>
            <li onClick={this.props.handleClick}><IndexLink to="/" activeClassName="active"><MdHome /> Home</IndexLink></li>
            <li onClick={this.props.handleClick}><a href="/#"><MdPhoto /> Gallery</a></li>
            <li onClick={this.props.handleClick}><a href="/#"><MdInfo /> Calendar</a></li>
            <li onClick={()=>{ this.props.handleLangClick(); this.props.handleClick()}}>
              <a><MdLang /> {this.props.lang == "no" ? 'English' : 'Norsk'}</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
