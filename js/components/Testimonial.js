import React from 'react';
export default class Testimonial extends React.Component {
  render = () => {
    let imgUrl = this.props.src;
    let imgStyle = {
      backgroundImage: 'url(' + imgUrl + ')',
    }
    return (
      <div class="testimonial flex center">
        <div class="flex center column">
          <h3>{this.props.title}</h3>
          <p>{this.props.copy}</p>
        </div>
        <div class="flex center column">
          <div class="headshot" style={imgStyle}></div>
          <h3>{this.props.name}</h3>
          <p>{this.props.position}</p>
        </div>
      </div>
    )
  }
}
