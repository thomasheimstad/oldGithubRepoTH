import React from 'react';

export default class Header extends React.Component {
  render = () => {
    return(
      <div className="flex header row center basePad">
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}
