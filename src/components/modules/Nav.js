import React from 'react';
import NavLinks from './NavLinks';
/*
import MdPhoto from 'react-icons/lib/md/photo-camera';
import MdCalendar from 'react-icons/lib/md/date-range'
*/
export default class Nav extends React.Component{
  render = () => {
    return (
      <nav className={this.props.showNav ? 'showing navigator' : 'hidden navigator'}>
        <div>
          <div className="logo"><p onClick={this.props.showNav ? this.props.handleClick : ''}>X</p></div>
          <NavLinks handleClick={this.props.handleClick} />
        </div>
      </nav>
    )
  }
}
